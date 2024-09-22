Date: 2024-07-16

---
### Problem

- The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. In mathematical terms, it’s defined as:
    - $fib(1) = 0$
    - $fib(2) = 1$
    - $fib(n) = fib(n-1) + fib(n-2)$ for $n > 2$
- We are tasked with finding the Nth Fibonacci number given an input integer N.

#### Example:

```python
getNthFib(6) # returns 5
```

---
### Approach 1: 

- The recursive approach is not optimal due to the time complexity of $O(2^n)$. This happens because each recursive call makes two further recursive calls, resulting in overlapping subproblems.
  ![[attachments/Nth Fibonacci-20240921150234340.webp| 500 | center]]
#### Implementation

```python
def getNthFib(n):
    if n == 1:
        return 0
    elif n == 2:
        return 1
    else:
        return getNthFib(n - 1) + getNthFib(n - 2)
```

#### Complexity Analysis

- Time Complexity: $O(2^n)$
- Space Complexity: $O(n)$

---
### Approach 2: 

- To avoid redundant calculations, memoization can be used to store previously computed values of Fibonacci numbers, significantly improving efficiency.
#### Implementation

```python
memoize = {}

def fib(n):
    if n in memoize:
        return memoize[n]
    else:
        memoize[n] = fib(n-1) + fib(n-2)
        return memoize[n]
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

---
### Approach 3: 

- The iterative solution is the most optimal. It uses an array initialized with the base Fibonacci values `[0, 1]` and updates the array by stepping through the Fibonacci sequence, calculating each value iteratively.
#### Implementation

```python
# Iterative solution
# O(n) time | O(1) space
def getNthFib(n):
    lastTwo = [0, 1]
    counter = 3

    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$

---
