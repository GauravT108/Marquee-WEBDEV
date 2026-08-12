// ## break vs continue

//ʘ `break` stops the loop completely when a condition is met.
//ʘ `continue` skips the *current* iteration and moves to the next one.
//
//Think “break = stop the loop; continue = skip this round, keep looping”.

const nums = [3, 7, 2, -5, 10];

for (let i = 0; i < nums.length; i++) {
  const value = nums[i];

  if (value < 0) {
    console.log("First negative:", value);
    break; // stop the whole loop
  }

  console.log("Checked:", value);
}

//- Loop checks 3, 7, 2 normally.
// When it hits `5`, condition `value < 0` is true.
// `break` executes → loop stops immediately, it **won’t** check 10.

const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  const value = nums[i];

  if (value % 2 === 0) {
    continue; // skip even numbers
  }

  console.log("Odd:", value);
}

//- For 2 and 4, `value % 2 === 0` is true → `continue` runs.
// - The `console.log` is skipped **only for that iteration**, loop continues to next value.
//- Output: only 1, 3, 5.

