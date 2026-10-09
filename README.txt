PART 5 - DEBUGGING AND CODE ANALYSIS

Program A
Error Type: Syntax Error
Problem Identified: Unclosed string literal for `course`, invalid variable declaration syntax (`yearLevel $`), and improper template literal string closing delimiter.
Explanation: The `course` string missing its closing double quote causes a syntax error. The `$` symbol inside `yearLevel $` is invalid variable syntax. Furthermore, the string inside console.log uses single quotes `'` instead of backticks `` ` `` while using standard parenthesis `)` instead of curly braces `}` for template interpolation.
How the Correction Was Verified: Ran `node part5_A.js` in terminal and confirmed it logged "Computer Engineering Year 4" without syntax errors.

Program B
Error Type: Logical Error / Runtime Error
Problem Identified: Array index out-of-bounds due to using `<=` in the loop termination condition.
Explanation: JavaScript arrays are zero-indexed, meaning the last element is at index `scores.length - 1`. Using `i <= scores.length` causes the loop to attempt accessing `scores[4]`, which returns `undefined`.
How the Correction Was Verified: Ran `node part5_B.js` and confirmed all 4 scores were logged sequentially and no `undefined` value appeared at the end.

Program C
Error Type: Syntax Error / Logical Error
Problem Identified: Missing multiplication operator `*` for `subtotal` calculation and missing subtraction operator `-` for `finalAmount`.
Explanation: `price quantity` causes a syntax error because JavaScript requires explicit arithmetic operators (`price * quantity`). Additionally, subtracting discount directly (`subtotal - discount`) without multiplying by subtotal results in a logic error.
How the Correction Was Verified: Ran `node part5_C.js` and confirmed the output correctly calculated subtotal (3000) minus 10% discount to output 2700.

Program D
Error Type: Logical Error
Problem Identified: The function `calculateAverage` does not return any value.
Explanation: Without an explicit `return` statement in JavaScript, functions return `undefined` by default. Assigning `calculateAverage(450, 5)` to `result` caused `console.log(result)` to output `undefined`.
How the Correction Was Verified: Ran `node part5_D.js` and confirmed the terminal printed the calculated average of `90`.

Program E
Error Type: Runtime Error (Infinite Loop)
Problem Identified: Missing increment statement inside the `while` loop.
Explanation: The variable `count` remains initialized at `1` permanently because it is never incremented inside the loop body. Since `1 <= 10` continuously evaluates to `true`, the program enters an infinite loop.
How the Correction Was Verified: Ran `node part5_E.js` and confirmed numbers 1 through 10 printed sequentially and the script exited successfully.