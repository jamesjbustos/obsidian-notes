---
date: 11-24-24
tags:
  - two-pointers
---
---
### Problem

- We're given an input array of non-negative integers `height` which represent the elevation map below. Each value represents the height of a bar which has a width of 1. 
- Our function should return the maximum area of water that can be trapped between the bars. 
  
  ![[Pasted image 20241124133237.webp]]

#### Example

```python
Input: height = [0,2,0,3,1,0,1,3,2,1]

Output: 9
```

---
### Approach 1

#### Visualize the problem

![[Trapping Rain Water 2024-11-24 14.18.07.excalidraw.svg| 500 | center]]
#### Solve without code

- Look left and right
- If the left pointer's value is less than the right
- We want the height to be the minimum between two points
- If left is less than right 
	- increase index
	- calculate max value 
	- and subtract by bar's value to get the trapped water
- Repeat the same process for right idx
#### Solve with code

- If height is empty return 0
- Set left and right values
- Set left and right pointers
- Define result variable
- Begin looping through input array
	- if `leftMax < rightMax`
		- `l+=1`
		- `leftMax = max(leftMax, height[l])`
		- `res += leftMax - height[l]`
	- else
		- `repeat the same process but for right idx`

#### Implementation

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        if not height:
            return 0

        l, r = 0, len(height) - 1
        leftMax, rightMax = height[l], height[r]
        res = 0
        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, height[l])
                res += leftMax - height[l]
            else:
                r -= 1
                rightMax = max(rightMax, height[r])
                res += rightMax - height[r]
        return res
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$
