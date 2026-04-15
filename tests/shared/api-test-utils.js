const assert = require("assert");
const { createApp } = require("../../api/server");

async function startExerciseApi() {
  const app = createApp();
  const server = app.createServer();

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  return {
    baseUrl,
    close: () =>
      new Promise((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve()))
      )
  };
}

async function runExercise({ solve, validate, negativeCheck }) {
  assert.strictEqual(typeof solve, "function", "app.js must export a function named solve");

  const context = await startExerciseApi();

  try {
    const result = await solve(context.baseUrl);
    await validate(result, context.baseUrl);
    if (negativeCheck) {
      await negativeCheck(result, context.baseUrl);
    }
  } finally {
    await context.close();
  }
}

module.exports = {
  runExercise
};
