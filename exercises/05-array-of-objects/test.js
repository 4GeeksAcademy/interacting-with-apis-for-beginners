const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    assert.strictEqual(result, "luis@example.com");
  },
  negativeCheck(result) {
    assert.notStrictEqual(result, "ana@example.com");
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
