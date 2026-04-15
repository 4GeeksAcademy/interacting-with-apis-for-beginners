async function solve(baseUrl) {
  await fetch(`${baseUrl}/items/2`, {
    method: "DELETE"
  });

  const getResponse = await fetch(`${baseUrl}/items/2`);
  const getData = await getResponse.json();
  return getData.error;
}

module.exports = solve;
