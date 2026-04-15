const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

test("reads the correct value after PATCH", async () => {
  await runExercise({
    solve,
    validate(result) {
      if (result !== "Patched title") {
        assert.fail(`Expected the updated title after PATCH to be "Patched title", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Review nested JSON") {
        assert.fail("You are still returning the original title, so the PATCH result is not being read from the updated response.");
      }
    }
  });
});
