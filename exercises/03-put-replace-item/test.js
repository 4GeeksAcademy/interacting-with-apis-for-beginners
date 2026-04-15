const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("reads the correct value after PUT replacement", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "PUT",
        path: "/items/1",
        message: "This exercise requires a real PUT request to /items/1."
      });

      if (result !== "Mia Stone") {
        assert.fail(`Expected the replaced profile full name to be "Mia Stone", but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === "Ana Perez") {
        assert.fail("This looks like the original item data, so the PUT replacement may not have been applied correctly.");
      }
    }
  });
});
