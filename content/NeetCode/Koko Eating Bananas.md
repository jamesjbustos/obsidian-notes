---
date: 03-18-25
tags:
  - binary-search
---
---
### Problem

- You are given an integer array `piles` where `piles[i]` is the number of bananas in the `ith` pile. You are given an integer `h`, which represents the number of hours you have to eat all the bananas.
- Our function should determine what is the minimum `k` per hour koko can finish the entire pile of bananas without exceeding the allowed `h` time.

#### Example

```python
Input: piles = [25,10,23,4], h = 4

Output: 25
```

---
### Approach 1

- To determine the minimum `k` value we can define a range that will be the bounds of possible bananas that can be eaten per hour. Our max upper bound would be the pile with the maximum value, this is because at most Koko can eat an entire pile per hour. Therefore, in our example above we know that Koko can eat a maximum of 25 bananas per hour. Our minimum would be 1, can't be zero because that wouldn't be a solution for our problem. 
- In our solution we can take advantage of binary search by using our range and determining if given the current value of `hours` is less than or greater than the allowed hours `h`. If it less than, then we can shift the right pointer to the current median  - 1. Conversely, if `hours` is greater than the allowed `h` , then we can shift the left pointer to the median + 1. 
#### Implementation

```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        l, r = 1, max(piles)
        res = r

        while l <= r:
            # Median value
            k = (l + r) //2
            hours = 0
            for p in piles:
                hours += math.ceil(p / k)
            if hours <= h:
                res = min(res, k)
                r = k - 1
            else:
                l = k + 1
            
        return res
```

#### Complexity Analysis

- Time Complexity: $O(n * log m)$
- Space Complexity: $O(1)$
