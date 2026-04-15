const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("updates the resource status with PATCH", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "PATCH",
        path: "/items/1",
        message: "This exercise requires a real PATCH request to /items/1."
      });

      if (result !== true) {
        assert.fail(`Expected the updated status to be true, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === false) {
        assert.fail("You are still returning the previous done value, so the PATCH change is not reflected.");
      }
    }
  });
});
