const http = require("http");

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createInitialItems() {
  return [
    {
      id: 1,
      title: "Map the campus",
      done: false,
      profile: {
        name: "Ana",
        "full name": "Ana Perez"
      },
      contact: {
        email: "ana@example.com"
      },
      stats: {
        scores: [10, 20, 30]
      },
      tags: ["warmup", "navigation"],
      meta: {
        "api-version": "1.0",
        "request id": "item-1-overview"
      }
    },
    {
      id: 2,
      title: "Review nested JSON",
      done: true,
      profile: {
        name: "Luis",
        "full name": "Luis Gomez"
      },
      contact: {
        email: "luis@example.com"
      },
      stats: {
        scores: [7, 14, 21]
      },
      tags: ["arrays", "objects"],
      meta: {
        "api-version": "1.0",
        "request id": "item-2-overview"
      }
    }
  ];
}

function buildOverview(items) {
  return {
    message: "API is ready",
    user: {
      profile: {
        name: "Ana",
        level: "starter"
      }
    },
    meta: {
      "request id": "req-overview-001",
      "api-version": "1.0"
    },
    data: {
      results: items.map((item) => ({
        id: item.id,
        title: item.title,
        profile: item.profile,
        stats: item.stats,
        contact: item.contact,
        tags: item.tags
      })),
      orders: [
        {
          id: "ord-100",
          customer: {
            "full name": "Marco Diaz"
          },
          items: [
            {
              sku: "A1",
              qty: 2
            }
          ]
        }
      ]
    }
  };
}

function createApp() {
  let items = createInitialItems();
  let nextId = 3;

  function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    res.end(JSON.stringify(payload));
  }

  function notFound(res, message = "Resource not found") {
    sendJson(res, 404, { error: message });
  }

  function parseBody(req) {
    return new Promise((resolve, reject) => {
      let raw = "";
      req.on("data", (chunk) => {
        raw += chunk;
      });
      req.on("end", () => {
        if (!raw) {
          resolve({});
          return;
        }

        try {
          resolve(JSON.parse(raw));
        } catch (error) {
          reject(error);
        }
      });
      req.on("error", reject);
    });
  }

  function findItem(id) {
    return items.find((item) => item.id === id);
  }

  async function handler(req, res) {
    const url = new URL(req.url, "http://127.0.0.1");
    const path = url.pathname;
    const method = req.method;

    if (method === "OPTIONS") {
      res.writeHead(204, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      });
      res.end();
      return;
    }

    if (method === "GET" && path === "/health") {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (method === "GET" && path === "/overview") {
      sendJson(res, 200, buildOverview(items));
      return;
    }

    if (method === "GET" && path === "/items") {
      sendJson(res, 200, {
        data: {
          results: clone(items),
          count: items.length
        },
        meta: {
          "request id": "req-items-list"
        }
      });
      return;
    }

    const match = path.match(/^\/items\/(\d+)$/);
    if (match) {
      const id = Number(match[1]);
      const item = findItem(id);

      if (!item) {
        notFound(res, `Item ${id} was not found`);
        return;
      }

      if (method === "GET") {
        sendJson(res, 200, {
          data: {
            item: clone(item)
          },
          meta: {
            "request id": `req-item-${id}`
          }
        });
        return;
      }

      let body;
      try {
        body = await parseBody(req);
      } catch (error) {
        sendJson(res, 400, { error: "Invalid JSON body" });
        return;
      }

      if (method === "PUT") {
        if (typeof body.title !== "string" || typeof body.done !== "boolean") {
          sendJson(res, 400, {
            error: "PUT requires title and done"
          });
          return;
        }

        const replacement = {
          id,
          title: body.title,
          done: body.done,
          profile: body.profile || { name: "Unknown", "full name": "Unknown User" },
          contact: body.contact || { email: "unknown@example.com" },
          stats: body.stats || { scores: [] },
          tags: body.tags || [],
          meta: body.meta || { "api-version": "1.0", "request id": `item-${id}-put` }
        };

        items = items.map((entry) => (entry.id === id ? replacement : entry));
        sendJson(res, 200, {
          message: "Item replaced",
          data: {
            item: clone(replacement)
          }
        });
        return;
      }

      if (method === "PATCH") {
        if (body.title !== undefined) {
          item.title = body.title;
        }
        if (body.done !== undefined) {
          item.done = body.done;
        }
        item.meta["request id"] = `item-${id}-patched`;

        sendJson(res, 200, {
          message: "Item updated",
          data: {
            item: clone(item),
            changed: {
              title: item.title,
              done: item.done
            }
          }
        });
        return;
      }

      if (method === "DELETE") {
        items = items.filter((entry) => entry.id !== id);
        sendJson(res, 200, {
          message: "Item deleted",
          data: {
            deletedId: id,
            remainingCount: items.length
          }
        });
        return;
      }
    }

    if (method === "POST" && path === "/items") {
      let body;
      try {
        body = await parseBody(req);
      } catch (error) {
        sendJson(res, 400, { error: "Invalid JSON body" });
        return;
      }

      if (typeof body.title !== "string" || body.title.trim() === "") {
        sendJson(res, 400, {
          error: "title is required"
        });
        return;
      }

      const item = {
        id: nextId,
        title: body.title,
        done: typeof body.done === "boolean" ? body.done : false,
        profile: body.profile || {
          name: "New",
          "full name": "New Student"
        },
        contact: body.contact || {
          email: "new@example.com"
        },
        stats: body.stats || {
          scores: [5, 15, 25]
        },
        tags: body.tags || ["created", "api"],
        meta: body.meta || {
          "api-version": "1.0",
          "request id": `item-${nextId}-created`
        }
      };

      nextId += 1;
      items.push(item);

      sendJson(res, 201, {
        message: "Item created",
        data: {
          item: clone(item),
          audit: {
            createdAt: "2026-04-13T00:00:00.000Z"
          }
        }
      });
      return;
    }

    notFound(res);
  }

  return {
    createServer() {
      return http.createServer((req, res) => {
        Promise.resolve(handler(req, res)).catch((error) => {
          sendJson(res, 500, {
            error: "Internal server error",
            details: error.message
          });
        });
      });
    }
  };
}

function startStandaloneServer(port = 3001) {
  const app = createApp();
  const server = app.createServer();
  server.listen(port, "127.0.0.1", () => {
    console.log(`API server listening on http://127.0.0.1:${port}`);
  });
  return server;
}

if (require.main === module) {
  startStandaloneServer();
}

module.exports = {
  createApp,
  startStandaloneServer
};
