async function solve(baseUrl) {
  const startResponse = await fetch(`${baseUrl}/items`);
  const startData = await startResponse.json();

  const createdResponse = await fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "Capstone item"
    })
  });
  const createdData = await createdResponse.json();
  const createdId = createdData.data.item.id;

  const patchedResponse = await fetch(`${baseUrl}/items/${createdId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      done: true
    })
  });
  const patchedData = await patchedResponse.json();

  const deletedResponse = await fetch(`${baseUrl}/items/${createdId}`, {
    method: "DELETE"
  });
  const deletedData = await deletedResponse.json();

  return {
    startCount: startData.data.count,
    createdId,
    patchedDone: patchedData.data.changed.done,
    deletedId: deletedData.data.deletedId
  };
}

module.exports = solve;
