const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    if (result !== "Mia Stone") {
      assert.fail(`Expected the replaced profile full name to be "Mia Stone", but received ${JSON.stringify(result)}.`);
    }
  },
  negativeCheck(result) {
    if (result === "Ana Perez") {
      assert.fail("This looks like the original item data, so the PUT replacement may not have been applied correctly.");
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
