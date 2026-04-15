const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    if (result !== "API is ready") {
      assert.fail(`Expected the value from GET /overview to be "API is ready", but received ${JSON.stringify(result)}.`);
    }
  },
  negativeCheck(result) {
    if (result === "api is ready") {
      assert.fail('You found a very similar string, but the exact value is case-sensitive: "API is ready".');
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
