async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/1`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      done: true
    })
  });
  const result = await response.json();
  return result.data.changed.done;
}

module.exports = solve;
