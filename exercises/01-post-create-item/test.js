const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("creates a resource with POST", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "POST",
        path: "/items",
        message: "This exercise requires a real POST request to /items. Hardcoded answers do not pass."
      });

      if (result !== 3) {
        assert.fail(`Expected the created resource id to be 3, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "2026-04-13T00:00:00.000Z") {
        assert.fail("You are reading a valid POST response value, but not the one this exercise is asking for.");
      }
    }
  });
});
