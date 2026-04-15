async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/1`, {
    method: "DELETE"
  });
  return response.status;
}

module.exports = solve;
