Date: 2024-07-27

## Problem
- A function is monotonic if and only if entirely non decreasing or entirely non-decreasing.

## Solution
-**First Solution**
- To solve this we will use a simple for loop to iterate through the array. As we iterate through the array we want to keep track of the direction of the array is it increasing or decreasing. Initially based on the direction of the array we can flag whenever the direction of the array meaning the array is not monotonic. In certain cases we will have duplicate values next to each other that don't affect whether its monotonic or not.
- Time Complexity: $O(N)$  | Space complexity $O(1)$
-**Second Solution**:
- In this solution we are not checking if its increasing or decreasing for each step in the iteration like the last problem. Based on the first pair of elements we can quickly invalidate whether it can be non-increasing or non-decreasing. For instance in the array `[-1,-5,-10,-100,...]` at the first pair of elements we can instantly invalidate the notion that this array will be non-decreasing (increasing). Then as we step further through the array we solely have to check whether the condition of non-increasing stays true (decreasing). If not then immediately return False that its Monotonic or True if it is.
- In this solution theres no need for a direction variable, which can be verbose and hard to represent. Alongside this, we don't need to determine the direction of the array. We will just need two booleans. 
- Time Complexity: $O(N)$ | Space Complexity: $O(1)$

## Code
First Solution
``` python
# O(n) time | O(1) space

# Non preferred solution
def isMonotonic(array):
    # Case where the length is 1 or 2. We know forsure the array is monotonic 
    if len(array) <= 2:
        return True

    # int to store the direction of the array (- , 0 , +)
    # its important to note that the direction could be the same ex: [1,1,...]
    direction = array[1] - array[0]

    for i in range(2, len(array)):
        # Check if direction is meaningful by moving the index if true
        if direction == 0:
            direction = array[i] - array[i - 1]
            continue

        # Are we breaking the direction
        if breaksDirection(direction, array[i - 1], array[i]):
            return False

    return True


def breaksDirection(direction, previosInt, currentInt):
    # The difference can determine if the direction was broken
    # if the difference is 0 than we know that they are the same value
    # if the difference is positive than we know that the direction is the same
    # However, if the difference is negative than we know we are going the opposite direction
    difference = currentInt - previousInt
    if direction > 0:
        return difference < 0
    return difference > 0

    # we don't need to account for the zero case since we only
    # call breaksDirection when direction is not equal to 0
```

Second Solution
```python
def isMonotonic(array):
    # Boolean flags
    isNonDecreasing = True
    isNonIncreasing = True

    # Being iterating over the array starting at the second index to compare the previous
    for i in range(1, len(array)):
        # if the current value is less than the previous value, then we know this cannot be non-decreasing
        if array[i] < array[i-1]:
            isNonDecreasing = False
        # similarly, if the current value is greater than the previous value, then we know this cannot be non-increasing
        if array[i] > array[i-1]:
            isNonIncreasing = False

    # if one is them true or both of them are true. or if both of them are false.    
    return isNonDecreasing or isNonIncreasing
```
- In this solution we are creating two boolean flags. these boolean flags will reduce the amount of checking we need to do and eliminate the task of us keeping track of the current direction
- As we start iterating over the array, we check two things:
	- if the value is greater than the previous value then we know that it cannot be non-increasing
	- if the value is less than the previous value then we know that it cannot be non-decreasing
- These checks will turn the boolean flags false if true. This is important because now if detect that the current array cannot be non-decreasing then it can be eliminated from the options. What's left is if it is non-increasing.
- The if statements also handles edge cases where the numbers can be the same `< or >` and can handle when the array is length 1 or 2.
- Finally, the return statement will return True or False based on the boolean values. 
