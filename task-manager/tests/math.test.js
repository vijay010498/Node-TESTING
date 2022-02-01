const {calcTip} = require("../src/math")

test('should calculate total tip',() =>{
    const total=  calcTip(10,.3);
    expect(total).toBe(13);
})

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
