// ==========================================
// 🟢 Level 1 – Array Basics
// ==========================================

// 1. Find the largest element
// Sample Input:  [3, 7, 2, 9, 5]
// Sample Output: 9
function findLargest(arr) {
  let Output = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Output < arr[i]) {
      Output = arr[i];
    }
  }
  return Output
}
// console.log(findLargest([3, 7, 2, 9, 5,234]));


// 2. Find the smallest element
// Sample Input:  [3, 7, 2, 9, 5]`
// Sample Output: 2
function findSmallest(arr) {
  let Output = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Output > arr[i]) {
      Output = arr[i];
    }
  }
  return Output
}

// 3. Find the second largest element
// Sample Input:  [12, 35, 1, 10, 34, 1]
// Sample Output: 34
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}
console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));

// 4. Find the second smallest element
// Sample Input:  [12, 35, 1, 10, 34, 1]
// Sample Output: 10
function findSecondSmallest(arr) {
  // Your code here
}

// 5. Sum of all elements
// Sample Input:  [1, 2, 3, 4, 5]
// Sample Output: 15
function sumOfElements(arr) {
  // Your code here
}

// 6. Average of elements
// Sample Input:  [10, 20, 30, 40]
// Sample Output: 25
function averageOfElements(arr) {
  // Your code here
}

// 7. Count even numbers
// Sample Input:  [1, 2, 3, 4, 5, 6]
// Sample Output: 3
function countEven(arr) {
  // Your code here
}

// 8. Count odd numbers
// Sample Input:  [1, 2, 3, 4, 5, 6]
// Sample Output: 3
function countOdd(arr) {
  // Your code here
}

// 9. Count positive numbers
// Sample Input:  [-2, 5, 0, -1, 8, 3]
// Sample Output: 3
function countPositive(arr) {
  // Your code here
}

// 10. Count negative numbers
// Sample Input:  [-2, 5, 0, -1, 8, 3]
// Sample Output: 2
function countNegative(arr) {
  // Your code here
}

// 11. Count zeros
// Sample Input:  [1, 0, 5, 0, 0, 3]
// Sample Output: 3
function countZeros(arr) {
  // Your code here
}

// 12. Reverse an array
// Sample Input:  [1, 2, 3, 4, 5]
// Sample Output: [5, 4, 3, 2, 1]
function reverseArray(arr) {
  // Your code here
}

// 13. Print array elements
// Sample Input:  [10, 20, 30]
// Sample Output: 10 \n 20 \n 30
function printElements(arr) {
  // Your code here
}

// 14. Copy one array to another
// Sample Input:  [1, 2, 3]
// Sample Output: [1, 2, 3]
function copyArray(arr) {
  // Your code here
}

// 15. Find the index of an element (Linear Search)
// Sample Input:  arr = [10, 25, 30, 45, 50], target = 30
// Sample Output: 2
function linearSearch(arr, target) {
  // Your code here
}

// 16. Check if an array is sorted
// Sample Input:  [1, 2, 3, 4, 5]
// Sample Output: true
function isSorted(arr) {
  // Your code here
}

// 17. Find maximum and minimum together
// Sample Input:  [4, 1, 9, 7, 2]
// Sample Output: { min: 1, max: 9 }
function findMinMax(arr) {
  // Your code here
}
