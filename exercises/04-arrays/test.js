const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    if (result !== 30) {
      assert.fail(`Expected the target score from the nested arrays to be 30, but received ${JSON.stringify(result)}.`);
    }
  },
  negativeCheck(result) {
    if (result === 20) {
      assert.fail("You are close, but this looks like a nearby score from the same array, not the final target value.");
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
