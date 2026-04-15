const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestSequence } = require("../../tests/shared/api-test-utils");

test("creates a resource and verifies it with GET", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestSequence(
        requestLog,
        [
          { method: "POST", path: "/items" },
          { method: "GET", path: "/items/3" }
        ],
        "This exercise requires creating the item first and then fetching it by id."
      );

      if (result !== "Verify after create") {
        assert.fail(`Expected the verified title to be "Verify after create", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === 3) {
        assert.fail("You stopped at the POST response. This exercise also requires a follow-up GET request.");
      }
    }
  });
});
