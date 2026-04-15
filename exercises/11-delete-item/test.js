const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

test("reads the correct value after DELETE", async () => {
  await runExercise({
    solve,
    validate(result) {
      if (result !== 1) {
        assert.fail(`Expected the delete response to confirm item id 1, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === 2) {
        assert.fail("You returned the wrong deleted id. Double-check which item this exercise asks you to delete.");
      }
    }
  });
});
