const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    assert.strictEqual(result, "Ana");
  },
  negativeCheck(result) {
    assert.notStrictEqual(result, "Luis");
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
