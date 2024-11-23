---
date: 11-23-24
tags:
  - two-pointers
---
---
### Problem

- We're given an input array of numbers that are sorted in non-decreasing order. Our function should return the indices (1-indexed) of two numbers that satisfy the target.

#### Example

```python
Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
```

---
### Approach 1

- This problem is really similar to a regular two sum. We just need to ensure we make the index change by adding one to the index. To solve this we can use a two pointer method which are defined as the left and right pointers. Based on the current sum that we derive we either increase the left index or decrease the right index. Increase the left index means we'll derive a greater sum, while decreasing the right index we'll derive a smaller sum.
#### Implementation

```python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # Create two pointers
        left = 0
        right = len(numbers) - 1

        # Check if sum is greater than or less than target
        while left < right:
            currentSum = numbers[left] + numbers[right]
            if currentSum == target:
                return [left + 1, right + 1]
            elif currentSum < target:
                left += 1
            else:
                right -= 1
        
        return []
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$


