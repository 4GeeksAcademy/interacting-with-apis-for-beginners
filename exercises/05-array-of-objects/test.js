const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    if (result !== "luis@example.com") {
      assert.fail(`Expected the email inside the array of objects to be "luis@example.com", but received ${JSON.stringify(result)}.`);
    }
  },
  negativeCheck(result) {
    if (result === "ana@example.com") {
      assert.fail("You returned the first contact email, but this exercise points to a different object in the array.");
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
