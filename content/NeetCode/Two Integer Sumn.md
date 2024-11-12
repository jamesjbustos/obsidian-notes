---
date: 11-12-24
tags:
---
****
---
### Problem

- Given an array of integers and a target value. Our function must find the two values `i` and `j` that equate to the target while ensuring that `i != j`. We can assume that that there's at least one pair. 
- Return the answer with the smaller indices.

#### Example:

```python
Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
```

---
### Approach 1: 

- Two solve this we can sort the array which gives us an `O(nlogn)` time, which although is slower than `O(n)` will be a worthy tradeoff for the constant space complexity. Once we've sorted the input array we can create two pointers, one at the starting index and one at the end. If the sum of these indices equates to the target value then we return their indices. If the value calculated is less than target we move the left pointer to increase the sum, if the value calculated is greater than the sum than we move the right pointer to reduce the total sum. After moving the index we calculate again and check for the same logic. If the two pointers cross then we know that there is no two values that equal to the target value.
	- Sort the array
	- Create two pointers
	- Create if logic
	- return indices if pair found otherwise return empty array.

> [!warning]
> I noticed last second that the input is sorted already, so no need to sort the array. But still good to know when its not such.

#### Implementation

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create two pointers
        left = 0
        right = len(nums) - 1

        # Check if sum is greater than or less than target
        while left < right:
            currentSum = nums[left] + nums[right]
            if currentSum == target:
                return [left, right]
            elif currentSum < target:
                left += 1
            else:
                right -= 1
        
        return []
```

#### Complexity Analysis

- Time Complexity: $O(N)$
- Space Complexity: $O(1)$
