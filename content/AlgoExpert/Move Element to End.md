Date: 2024-07-26

## Problem
- In this problem you are given an array with a target element that you must move to the end. This means if you are given an array with multiple '2' elements and target is 2. Then you will need to mutate the array in place and make sure that the end part of the array solely consists of the target element
- The order of the other elements doesn't matter, just as long as the target is at the end of the array

## Solution
 - Naively a solution that comes to mind is to simply sort the array and swap until all the same elements are at the end of the array. While this will work it is not the most optimal solution since on average sorting an array costs us `O(nlogn)` time. Its important to first think about the different methods we can use. If you move past this sorting option, you will realize that this problem can be solved in linear time `O(n)`.
 - To solve this in linear time we start by creating two pointers. One at the beginning `i` and one at the end of the array `j`. We will be stepping through the array checking if `i` is the target element and if so can it be replaced with the current position of `j` if not then we know that the target element and we don't want to move it from its place. Therefore, we must move `j` by one index until we've reached an element that is not our target and can be swapped with `i`. 
 - Once this swap is done, we can move our initial index `i` by one and repeat the same process. This will continue until both pointers have crossed each other meaning we've checked all elements in the array.
 - Time Complexity: $O(n)$  - Space Complexity: $O(1)$
 
```python
def moveElementToEnd(array, toMove):
    # Initialize Pointers
    i = 0
    j = len(array) - 1

    # While we've traversed the whole array
    while i < j:
        # While we can't swap, decrement j to eventually reach a value we can swap with.
        # Also while j is less than i. we need to prevent j from crossing i when theres multiple toMove values
        # [4, 1, 3, 2, 2, 2, 2, 2] in this instance if i is at 3 and j at the 2 in the middle itll cross i and switch mistakenly
        # before the outer while is triggered. 
        while array[j] == toMove and i < j:
            j -= 1
        # Once we break the inner while loop we can check if i equals to toMove
        if array[i] == toMove:
            array[i], array[j] = array[j], array[i]
        
        # Increment to continue the loop, can't be in the if statement since it will run indefinitely
        i += 1
        
    return array
```