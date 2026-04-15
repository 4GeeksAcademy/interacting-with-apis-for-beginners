const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    assert.strictEqual(result, "2026-04-13T00:00:00.000Z");
  },
  negativeCheck(result) {
    assert.notStrictEqual(result, "2025-01-01T00:00:00.000Z");
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
