async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/2`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Patched title"
    })
  });
  const result = await response.json();
  return result.data.changed.title;
}

module.exports = solve;
