# DSA


**DSA** stands for **Data Structures and Algorithms**.

## What Is a Data Structure?

* A data structure is a way of storing and accessing data in an effective way.
* Helps to Make code cleaner  and easier to understand

## Abstract Data Types

An abstract data type is a way of describing what a data structure does, without focusing on how it is implemented.

It defines:

* What operations are allowed
* What behavior we expect from those operations

## Abstraction vs Implementation

| Abstraction (ADT) | Implementation (DS) |
| --- | --- |
| List | Dynamic Array<br>Linked List |
| Queue | Linked List based Queue<br>Array based Queue<br>Stack based Queue |
| Map | Tree Map<br>Hash Map / Hash Table |

## Complexity Analysis

Complexity analysis tells us how an algorithm performs as input size grows.

It is usually measured in:

* **Time Complexity** - how much time an algorithm takes
* **Space Complexity** - how much memory an algorithm uses

## Big Notation 
Big Notation is helps to measure the complexity Analysis

* Big O ( Upper Bound , Worst Case)
* Big Ω (Lower Bound ,best-case)
* Big Θ (both the same upper bound and lower bound , average)


## Big-O Notation

Big-O notation (**O**) describes the upper bound of an algorithm's time or space growth.

We use it to compare solutions, predict performance, and choose efficient code for large inputs.

`n` means the size of the input.

Common examples:

* **O(1)** - constant time
* **O(n)** - linear time
* **O(log n)** - logarithmic time
* **O(n log n)** - linearithmic time
* **O(n^2)** - quadratic time
* **O(n^3)** - cubic time
* **O(2^n)** - exponential time
* **O(n!)** - factorial time

## Big-O Differences

| Big-O | Simple explanation |
| --- | --- |
| **O(1)** | Same time, even if input grows |
| **O(log n)** | Grows slowly |
| **O(n)** | Grows in direct proportion to input size |
| **O(n log n)** | Slightly more than linear |
| **O(n^2)** | Grows fast for larger input |
| **O(n^3)** | Grows very fast |
| **O(2^n)** | Doubles with each extra input |
| **O(n!)** | Very, very slow for big input |

## Big-Omega Notation

Big-Omega notation (**Ω**) describes the lower bound of an algorithm's growth.

It tells us the best-case or minimum amount of time or space an algorithm needs.

## Big-Theta Notation

Big-Theta notation (**Θ**) describes the exact growth rate of an algorithm.

It means the algorithm has both the same upper bound and lower bound.

## Time Complexity

Time complexity measures how the running time of an algorithm grows as the input size increases.

