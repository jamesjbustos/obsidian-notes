---
date: 03-05-25
tags:
  - binary-search
---
---
### Problem

- You are given an array of distinct integers `nums`, sorted in ascending order, and an integer `target`.
- Implement a function to search for `target` within `nums`. If it exists, then return its index, otherwise return `-1`.

#### Example

```python
Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
```

---
### Approach 1

- To solve this we can simply create a left and right pointer and find the midpoint, if the current value is less than the target then we move the left pointer by one to the right, conversely, if the current value is greater than the target then we move the right pointer to left by one. If the current value is equal to the target than we've found our value and can return it.
#### Implementation

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r:
            m = (l + r) // 2
            if nums[m] > target:
                r = m - 1
            elif nums[m] < target:
                l = m + 1
            else:
                return m
        return -1
```

#### Complexity Analysis

- Time Complexity: $O(log n)$
- Space Complexity: $O(1)$
