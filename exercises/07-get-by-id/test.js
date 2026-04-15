const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    if (result !== "Luis Gomez") {
      assert.fail(`Expected the nested full name from GET /items/2 to be "Luis Gomez", but received ${JSON.stringify(result)}.`);
    }
  },
  negativeCheck(result) {
    if (result === "Ana Perez") {
      assert.fail("You likely fetched or navigated to item 1 instead of item 2.");
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
