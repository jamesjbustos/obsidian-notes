---
date: 01-06-25
tags:
  - stack
---
---
### Problem

- In this problem we're given an array of integers `heights` where `heights[i]` represents the height of a bar. The width of each bar is 1. Our function should return the area of the largest that can be formed among the bars.

#### Example

```python
Input: heights = [7,1,7,2,2,4]

Output: 8
```

---
### Approach 1

![[Largest Rectangle In Histogram 2025-01-06 13.38.55.excalidraw.png| center | 500]]

- To solve for this problem we can use a stack to keep track of the possible rectangles we can form. 
- To do this easily we can create a stack that will hold a tuple of format (index, height). This will represent the rectangles we form while iterating over the heights list.
- To start we define our `maxArea` variable and our `stack`. Then we iterate over the list and create a while loop that only runs when the bar at the top of our stack is greater than the current bar. We do this because we know if the bar to the right of the current rectangle we're forming is bigger in height then we can't extend it anymore. Therefore we pop the latest rectangle formed and we calculate the area and we pass it through a maxArea check to ensure we're only saving the max area. 
- Once we calculate the max area of the latest rectangle formed, we need to move the starting index to the index of element we just popped to ensure we create a new rectangle. 
- Then, we append the values for this starting rectangle `stack.append((start,h))`
- Once we finish our loop there can still be rectangles that we formed that never encountered a shorter bar to their right, therefore we have to calculate the area for them as well
#### Implementation

```python
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        stack = [] #pair: (index, height)

        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                index, height = stack.pop()
                maxArea = max(maxArea, height * (i-index))
                start = index
            stack.append((start, h))

        for i, h in stack:
            maxArea = max(maxArea, h * (len(heights) - i))
        return maxArea
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
