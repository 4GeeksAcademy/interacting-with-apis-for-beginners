const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    assert.strictEqual(result, "API is ready");
  },
  negativeCheck(result) {
    assert.notStrictEqual(result, "api is ready");
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
