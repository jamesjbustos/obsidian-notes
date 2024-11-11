Date: 11-10-24

---
### Problem

- Given an integer array `nums`, return `true` if any value appears **more than once** in the array, otherwise return `false`.

#### Example:

```python
Input: nums = [1, 2, 3, 3]

Output: true
```

---
### Approach 1: 

- Since a hash map can't have duplicate values we can iterate through the original array and check if the current num is in the set, if not then add it to the set.
#### Implementation

```python
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nonDuplicates = set()
        for num in nums:
            if num in nonDuplicates:
                return True
            seen.add(num)
        return False
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

---
