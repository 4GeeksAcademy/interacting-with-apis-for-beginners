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
  const data = await response.json();
  return data.data.changed.done;
}

module.exports = solve;
