const assert = require("assert");
const solve = require("./app");
const { runExercise } = require("../../tests/shared/api-test-utils");

runExercise({
  solve,
  validate(result) {
    assert.deepStrictEqual(result, {
      startCount: 2,
      createdId: 3,
      patchedDone: true,
      deletedId: 3
    });
  },
  negativeCheck(result) {
    assert.notDeepStrictEqual(result, {
      startCount: 3,
      createdId: 4,
      patchedDone: false,
      deletedId: 4
    });
  }
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
