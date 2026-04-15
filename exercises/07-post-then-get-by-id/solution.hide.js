async function solve(baseUrl) {
  const createResponse = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Verify after create"
    })
  });
  const createResult = await createResponse.json();
  const createdId = createResult.data.item.id;

  const getResponse = await fetch(`${baseUrl}/items/${createdId}`);
  const getResult = await getResponse.json();
  return getResult.data.item.title;
}

module.exports = solve;
