const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    if (result !== "Marco Diaz") {
      assert.fail(`Expected the mixed-path lookup result to be "Marco Diaz", but received ${JSON.stringify(result)}.`);
    }
  },
  negativeCheck(result) {
    if (result === "Ana Perez") {
      assert.fail("You found a valid full name, but it belongs to another branch of the JSON response.");
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
