const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

test("reads the nested value with dot notation", async () => {
  await runExercise({
    solve,
    validate(result) {
      if (result !== "Ana") {
        assert.fail(`Expected the nested profile name from GET /overview to be "Ana", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Luis") {
        assert.fail("You probably navigated to the second person instead of the profile requested in this exercise.");
      }
    }
  });
});
