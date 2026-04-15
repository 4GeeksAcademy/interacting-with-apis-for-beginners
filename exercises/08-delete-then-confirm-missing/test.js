const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestSequence } = require("../../tests/shared/api-test-utils");

test("deletes a resource and confirms it is missing", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestSequence(
        requestLog,
        [
          { method: "DELETE", path: "/items/2" },
          { method: "GET", path: "/items/2" }
        ],
        "This exercise requires deleting the resource first and then confirming with a GET request that it no longer exists."
      );

      if (result !== "Item 2 was not found") {
        assert.fail(`Expected the follow-up GET error to be "Item 2 was not found", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === 204) {
        assert.fail("You stopped at the DELETE response. This exercise also requires confirming the missing resource with GET.");
      }
    }
  });
});
