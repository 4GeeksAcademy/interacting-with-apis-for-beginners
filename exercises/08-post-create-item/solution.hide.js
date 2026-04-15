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
  const data = await response.json();
  return data.data.audit.createdAt;
}

module.exports = solve;
