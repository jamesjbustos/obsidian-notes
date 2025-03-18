---
date: 03-18-25
tags:
  - binary-search
---
---
### Problem

- We're given an array of length `n` which was original sorted in ascending order. The array is possible rotated between `1 and n` times. Our function should determine the minimum element in the array, taking into account that the array has been rotated. Our solution should run in `O(log n)` time as opposed to the trivial solution that runs in `O(N)`time.

#### Example

```python
Input: nums = [3,4,5,6,1,2]

Output: 1
```

---
### Approach 1

- In this problem we can still perform binary search in a partly sorted array, but we can do so only by identify the pivot, where the median value is not larger than the left most value. This mean to the right of the median will be the sorted portion from the lower bound. Therefore, we shift our median by one by increasing the left pointer, conversely if the current value of the media is smaller than the left most value then we can keep searching to the left by reducing our right pointer to the median minus one.
#### Implementation

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        res = nums[0]

        l, r = 0 , len(nums) - 1

        while l <= r:
            if nums[l] < nums[r]:
                res = min(res, nums[l])
                break

            m = (l + r) // 2
            res = min(res, nums[m])
            if nums[m] >= nums[l]:
                l = m + 1
            else:
                r = m - 1
        
        return res
```

#### Complexity Analysis

- Time Complexity: $O(log n)$
- Space Complexity: $O(1)$
