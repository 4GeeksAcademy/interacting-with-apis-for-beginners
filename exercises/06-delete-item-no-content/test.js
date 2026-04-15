const assert = require("assert");
const solve = require("./app");
const { runExercise, assertRequestMade } = require("../../tests/shared/api-test-utils");

test("deletes the resource and reads the 204 status", async () => {
  await runExercise({
    solve,
    validate(result, baseUrl, requestLog) {
      assertRequestMade(requestLog, {
        method: "DELETE",
        path: "/items/1",
        message: "This exercise requires a real DELETE request to /items/1."
      });

      if (result !== 204) {
        assert.fail(`Expected the DELETE response status to be 204, but received ${JSON.stringify(result)}.`);
      }
    },
    negativeCheck(result) {
      if (result === 200) {
        assert.fail("A successful RESTful delete in this exercise should return 204 No Content, not 200.");
      }
    }
  });
});
