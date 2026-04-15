const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("creates a resource with additional fields", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "POST",
        path: "/items",
        message: "This exercise requires a real POST request to /items."
      });

      if (result !== "Sara Vega") {
        assert.fail(`Expected the created profile full name to be "Sara Vega", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "New Student") {
        assert.fail("You are returning the default profile value, which suggests the custom body was not sent correctly.");
      }
    }
  });
});
