/**
 * Looping Questions - Question Paper Style
 * Only question, input, and output are listed.
 */

// 1. Question: Print numbers from 1 to 5 using a loop.
// Input: 5
// Output: 1 2 3 4 5

// const printNum = (length) => {
//     for (let i = 1; i <= length; i++) {
//         console.log(i);
//     }
// }
// printNum(5)
// ========================================

// 2. Question: Print even numbers from 1 to 10.
// Input: 10
// Output: 2 4 6 8 10

// const printEvenNum = (input) => {
//     const output = [];
//     for (let i = 2; i <= input; i++) {
//         if (i % 2 === 0) {
//             output.push(i);
//         }
//     }
//     console.log(output);
// }

// printEvenNum(10);

// ========================================


// 3. Question: Print numbers in reverse order from 5 to 1.
// Input: 5
// Output: 5 4 3 2 1

// const printReverseNum = (input) => {
//     for (let i = input; i >= 1; i--) {
//         console.log(i);
//     }
// }
// printReverseNum(5)
// ========================================


// 4. Question: Find the sum of numbers from 1 to 5.
// Input: 5
// Output: 15

// const findSumNum = (input) => {
//     let count = 0;
//     for (let i = 1; i <= input; i++) {
//         count += i;
//     }
//     console.log(count);
// }
// O(n) => size of input increase time also increase


//================ Can it be optimized?========== O(1) => constant
// Yes. Since this is the sum of the first n natural numbers, you can use the mathematical formula:
//_______________ (n*(n+1))/2  ________________

// const findSumNum2 = (input) => {
//     const sum = input * (input + 1) / 2
//     console.log(sum);
// }

// findSumNum(5);

// ========================================

// 5. Question: Print the multiplication table of 3 up to 5 terms.
// Input: 3, 5
// Output:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15

// const printMultiplicationTable = (number, terms) => {
//     for (let i = 1; i <= terms; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }
// };

// printMultipleTable(3, 5);
// ========================================

// 6. Question: Find the factorial of 5 using a loop.
// Input: 5
// Output: 120
// const findFactorial = (input) => {
//     let output = 1;
//     for (let i = 1; i <= input; i++) {
//         output *= i
//     }
//     console.log(output);
// }
// findFactorial(5)

// ========================================


// 7. Question: Count how many even numbers are in an array.
// Input: [1, 2, 3, 4, 5, 6]
// Output: 3

// const findEvenCount = (input) => {
//     let count = 0
//     for (let i = 0; i <= input.length; i++) {
//         if (input[i] % 2 == 0) {
//             count += 1
//         }
//     }
//     console.log(count);
// }
// findEvenCount([1, 2, 3, 4, 5, 6])

// ========================================

// 8. Question: Find the largest number in an array.
// Input: [10, 25, 7, 18]
// Output: 25

// const findLargeNum = (array) => {
//     let output = array[0];
//     for (let i = 1; i < array?.length; i++) {
//         if (output < array[i]) {
//             output = array[i]
//         }
//     }
//     console.log(output);
// }
// findLargeNum([10, 25, 7, 18])

// ========================================


// 9. Question: Reverse the digits of a number using a loop.
// Input: 12345
// Output: 54321


// const printReverse = (input) => {
//     let reverse = 0;
//     while (input > 0) {
//         const digit = input % 10;
//         reverse = reverse * 10 + digit;
//         input = Math.floor(input / 10);
//     }
//     console.log(reverse);
// };

// printReverse(12345);

// ========================================

// 10. Question: Print a star pattern for 3 rows.
// Input: 3
// Output:
// *
// * *
// * * *
