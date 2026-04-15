async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Practice POST requests"
    })
  });
  const result = await response.json();
  return result.data.item.id;
}

module.exports = solve;
