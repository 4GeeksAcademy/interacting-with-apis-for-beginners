async function solve(baseUrl) {
  await fetch(`${baseUrl}/items/2`, {
    method: "DELETE"
  });

  const getResponse = await fetch(`${baseUrl}/items/2`);
  const getResult = await getResponse.json();
  return getResult.error;
}

module.exports = solve;
