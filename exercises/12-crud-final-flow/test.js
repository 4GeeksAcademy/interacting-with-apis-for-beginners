const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    const expected = {
      startCount: 2,
      createdId: 3,
      patchedDone: true,
      deletedId: 3
    };

    try {
      assert.deepStrictEqual(result, expected);
    } catch (error) {
      assert.fail(
        `Expected the full CRUD summary ${JSON.stringify(expected)}, but received ${JSON.stringify(result)}. Check the initial count, the created id, the PATCH result, and the deleted id in that order.`
      );
    }
  },
  negativeCheck(result) {
    if (
      result &&
      result.startCount === 3 &&
      result.createdId === 4 &&
      result.patchedDone === false &&
      result.deletedId === 4
    ) {
      assert.fail("The sequence looks shifted. Re-check the starting count and make sure you patch and delete the same created item.");
    }
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
