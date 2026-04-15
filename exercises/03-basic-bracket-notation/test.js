const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    assert.strictEqual(result, "1.0");
  },
  negativeCheck(result) {
    assert.notStrictEqual(result, "2.0");
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
