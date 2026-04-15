async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/1`, {
    method: "DELETE"
  });
  const data = await response.json();
  return data.data.deletedId;
}

module.exports = solve;
