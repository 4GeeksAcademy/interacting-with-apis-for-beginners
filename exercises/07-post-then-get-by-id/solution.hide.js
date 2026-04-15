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
  const createData = await createResponse.json();
  const createdId = createData.data.item.id;

  const getResponse = await fetch(`${baseUrl}/items/${createdId}`);
  const getData = await getResponse.json();
  return getData.data.item.title;
}

module.exports = solve;
