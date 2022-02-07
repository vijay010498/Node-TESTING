const { calcTip, add } = require("../src/math");

test("should calculate total tip", () => {
  const total = calcTip(10, 0.3);
  expect(total).toBe(13);
});

//
// Why test?
//
// - Saves time
// - Creates reliable software
// - Gives flexibility to developers
//   - Refactoring
//   - Collaborating
//   - Profiling
// - Peace of mind

// async 1 way
// test("Async test demo", (done) => {
//   setTimeout(() => {
//     expect(1).toBe(1);
//     done();
//   }, 2000);
// });

// async 2 way
test("Async promise based should add two numbers", (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

// async 3 days
test("Async/ await ", async () => {
  const sum = await add(2, 3);
  expect(sum).toBe(5);
});
