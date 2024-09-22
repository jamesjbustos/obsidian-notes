Date: 08-05-24

---
### Problem
-  We are given a input array with the numbers 0 and 1, where 1 represents someone sitting and 0 represents an empty seat. We're trying to find an empty space where there's no one to the left or right of us, however, there could instances where there's an empty seat but only one seat that is available with someone to left and right. We need to find the best seat, therefore, the one with the max space to left and right would be the best and the least best would be one with less space. The leftmost and rightmost seat are always taken up. If there is not seat available we simply return `-1`. 

#### Example:

```
# Best seat case scenario with three spaces
[1, 0, 0, 0, 1] - > we would return the index of the number in the middle between the two zeros.
```

---
### Approach 1: 

- In this approach we will be using two variables and two pointers to keep track of our current best seat. Initially we will have two variables called `max space` and `best seat`. Best seat will be initialized to `-1` to account for no seats found and `max space` will be initialized to 0. To calculate the best seat and max space we will use two pointers. One pointer will begin at `i` and the second pointer at `i+1`. We check if `i + 1` is a value of 1, if so then we calculate the `max space` using $\text{maxSpace} = j - i - 1$ . This will give us the amount of space in between these two people. Now to calculate the best seat we will simply use the indices to find the median or the middle $\text{bestSeat} = \frac{i + j}{2}$. Finally, we move the pointer `i` to the last index `j` and we move the pointer `j` until we find another value `1` and do the same process over again.
#### Implementation

```python
# O(n) time | O(1) space
def bestSeat(seats):
    # Best seats and max space
    bestSeat = -1
    maxSpace = 0

    # Pointers
    left = 0

    # While left has not reached end of array
    while left < len(seats):
        # right pointer will equal left + 1
        right = left + 1

        # keep iterating right pointer until we've reached a value 1, also making sure we don't go out of bounds.
        while right < len(seats) and seats[right] == 0:
            right += 1

        # Now, we calculate the space in between
        # The space is equal to the space in between which is substraction, and minus one to account for zero indices
        availableSpace = right - left - 1

        # if the space in between something greater than we've calculated find the index of the best seat
        if availableSpace > maxSpace:
            # We find the index using the median formula and we use // to perform integer division that rounds down
            # to ensure we don't get a decimal
            bestSeat = (left + right) // 2
            # update maxSpace
            maxSpace = availableSpace

        # Finally, we move the left pointer to the right to continue our iteration
        left = right

    return bestSeat
```

- Although we do have two while loops this is not an runtime of O(n^2) because we're only iterating through the array once in one direction. Each element of the array is only processes a constant number of times `O(1)`. 
#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$

---
