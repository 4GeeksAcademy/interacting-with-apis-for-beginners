async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Created with profile",
      done: true,
      profile: {
        name: "Sara",
        "full name": "Sara Vega"
      },
      contact: {
        email: "sara@example.com"
      },
      stats: {
        scores: [11, 22, 33]
      },
      tags: ["created", "profile"]
    })
  });
  const result = await response.json();
  return result.data.item.profile["full name"];
}

module.exports = solve;
