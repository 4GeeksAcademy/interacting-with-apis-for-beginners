const assert = require("assert");
const http = require("http");
const https = require("https");
const { createApp } = require("../../api/server");

function ensureFetch() {
  if (typeof global.fetch === "function") {
    return;
  }

  global.fetch = function fetchPolyfill(resource, options = {}) {
    const target = new URL(resource);
    const client = target.protocol === "https:" ? https : http;
    const method = options.method || "GET";
    const headers = options.headers || {};
    const body = options.body;

    return new Promise((resolve, reject) => {
      const request = client.request(
        {
          protocol: target.protocol,
          hostname: target.hostname,
          port: target.port,
          path: `${target.pathname}${target.search}`,
          method,
          headers
        },
        (response) => {
          let raw = "";

          response.setEncoding("utf8");
          response.on("data", (chunk) => {
            raw += chunk;
          });
          response.on("end", () => {
            resolve({
              ok: response.statusCode >= 200 && response.statusCode < 300,
              status: response.statusCode,
              headers: response.headers,
              text: async () => raw,
              json: async () => JSON.parse(raw)
            });
          });
        }
      );

      request.on("error", reject);

      if (body) {
        request.write(body);
      }

      request.end();
    });
  };
}

async function startExerciseApi() {
  const app = createApp();
  const server = app.createServer();

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  return {
    baseUrl,
    close: () =>
      new Promise((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve()))
      )
  };
}

async function runExercise({ solve, validate, negativeCheck }) {
  assert.strictEqual(typeof solve, "function", "app.js must export a function named solve");
  ensureFetch();

  const context = await startExerciseApi();

  try {
    const result = await solve(context.baseUrl);
    await validate(result, context.baseUrl);
    if (negativeCheck) {
      await negativeCheck(result, context.baseUrl);
    }
  } finally {
    await context.close();
  }
}

module.exports = {
  runExercise
};
