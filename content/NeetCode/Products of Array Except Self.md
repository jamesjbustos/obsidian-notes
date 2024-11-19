---
date: 11-19-24
tags:
---
---
### Problem

- Given an input array `nums` our function should return an array `output` that is the product of all elements in the input array except the current index.

#### Example

```python
Input: nums = [1,2,4,6]

Output: [48,24,12,8]
```

---
### Approach 1

- To solve this we can use prefix and postfix method. First we create a result array that is initialized to 1 for the length of the numbers in the input array. To calculate the prefix we're essentially finding the product sum of all the values that prefix the current index. For instance,
  
```python
  nums = [1, 2, 4, 6]
  # Read from l -> r to calculate this
  prefix = [1, 2, 8, 48]
  postfix = [48, 48, 24, 6]
  
  output = [48, 24, 12, 8]
```
  
- While this solution works we're using O(n) space since output is not regarded for the space complexity.  Therefore, to have an O(1) output we can use the output array to hold the prefix and postfix and find the product. In this logic we do use the appropriate indices to represent the prefix or postfix product of the current index that doesn't include itself. For instance the prefix product we should expect for index 2 in `nums` is 1.
  
```python
nums = [1, 2, 4, 6]
res [1, 1, 1, 1]
# Prefix run
res = [1, 1*1, 2*1, 1*2*4]
res = [1, 1, 2, 8]
# Postfix run
res = [1*2*4*6, 6*4*1, 6*2, 1*8]
res = [48, 24, 12, 8]
```

#### Implementation

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = [1] * (len(nums))

        prefix = 1
        for i in range(len(nums)):
            res[i] = prefix
            prefix *= nums[i]
        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            res[i] *= postfix
            postfix *= nums[i]
        return res
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$
