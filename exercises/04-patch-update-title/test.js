const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the correct value after PATCH", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "PATCH",
        path: "/items/2",
        message: "This exercise requires a real PATCH request to /items/2."
      });

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
