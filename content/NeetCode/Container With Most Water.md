---
date: 11-24-24
tags:
  - two-pointers
---
---
### Problem

- We're given an input array containing `height` values where `heights[i]` represent the height of the $i^{th}$ bar.
- Our function can choose any two bars to form a container. Return the maximum amount of water a container can store.
  
  ![[Pasted image 20241124130439.webp]]

#### Example

```python
Input: height = [1,7,2,5,4,7,3,6]

Output: 36
```

---
### Approach 1

#### Visualize the problem

![[attachments/Container With Most Water 2024-11-24 13.07.23.excalidraw.svg | center | 500]]
#### Solve without code

- Look at left and right of input
- Get the min height of both since we need even heights
- Calculate the area
- Ask ourselves if the new area is great than the current
- If our left is less than our right bar then we move it by one otherwise we move right by one
#### Solve with code

- Create `l` and `r` pointers. 
- Create a result variable to hold our current max result
- Create a while loop with the condition of `while l < r`
	- Calculate area by finding the width `r - l` and the height `min(heights[r],heights[l]`
	- This will give us the min height which we can multiply by the width
	- If our left pointer is smaller than our right we increase its index, otherwise subtract the right index by one
- return our result
#### Implementation

```python
class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l, r = 0, len(heights) - 1
        res = 0

        while l < r:
            area = min(heights[l], heights[r]) * (r - l)
            res = max(res, area)
            if heights[l] <= heights[r]:
                l += 1
            else:
                r -= 1
        return res
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$


