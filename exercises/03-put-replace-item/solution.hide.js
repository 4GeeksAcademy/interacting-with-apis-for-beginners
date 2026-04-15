async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/1`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Replaced item",
      done: true,
      profile: {
        name: "Mia",
        "full name": "Mia Stone"
      },
      contact: {
        email: "mia@example.com"
      },
      stats: {
        scores: [3, 6, 9]
      },
      tags: ["put", "replace"],
      meta: {
        "api-version": "1.0",
        "request id": "item-1-put"
      }
    })
  });
  const result = await response.json();
  return result.data.item.profile["full name"];
}

module.exports = solve;
