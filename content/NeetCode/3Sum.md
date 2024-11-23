---
date: 11-23-24
tags:
  - two-pointers
---
---
### Problem

- We're given an input array of numbers, our function should return all the triplets `[nums[i], nums[j], nums[k]]` where `[nums[i], nums[j], nums[k]] == 0`. 
- The indices `i`, `j`, and `k` are all distinct.

#### Example

```python
Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
```

---
### Approach 1

#### Visualize the problem

![[3Sum 2024-11-23 13.52.27.excalidraw.svg |500 | center]]
#### Solve without code

- Sort the values
- Starting from the left to right we can find combinations by using the starting number and combining the left and right of the input array
- If the sum is too large we can reduce the right pointer, conversely we increase the left pointer
- Once we're done with the possible combinations for this current pointer a we can move on to the next
#### Solve with code

- Sort the array
- Create two loops
- Define a current index `a` and left and right pointers `b`and `c`. `a` will act as our outer loop and `b` and `c` will essentially be two sum within our outer loop.
- Increase or decrease `b` and `c` based on the sum
- Once we're done with the current index `a` we can increase the index by one and reset `b` and `c`and repeat the process.
#### Implementation

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Sort input array
        nums.sort()
        res = []
        
        for i, a in enumerate(nums):
            if i > 0 and a == nums[i - 1]:
                continue
            l, r = i + 1, len(nums) - 1
            while l < r:
                threeSum = a + nums[l] + nums[r]
                if threeSum > 0:
                    r -= 1
                elif threeSum < 0:
                    l += 1
                else:
                    res.append([a, nums[l], nums[r]])
                    l += 1
                    while nums[l] == nums[l-1] and l < r:
                        l+= 1
        
        return res
```

#### Complexity Analysis

- Time Complexity: $O(nlogn) + O(n^2) = O(n^2)$ - Sorting and Two loops.
- Space Complexity: $O(1)$


