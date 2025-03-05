---
date: 03-05-25
tags:
  - binary-search
---
---
### Problem

- You are given an `m * n` 2-D integer array `matrix` and an integer `target`. 
- Each row in `matrix` is sorted in non-decreasing order.
- The first integer of every row is greater than the last integer of the previous row 
- Return `true` if `target` exists within `matrix` or `false` otherwise. 

#### Example

![[Pasted image 20250305153314.webp]]

```python
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

Output: true
```

---
### Approach 1

- To solve this we can performing tow binary searches. First one is a row binary search where we identify the row that could contain the target value. We can do this by comparing the first and last elements of the middle row. If the target is greater than the greatest value from the middle row then we can increase top index by one. Similarly, if the target is less than the smallest value in the middle row then we can decrease the bottom index by one. If the target is within the range of the current middle row then we break out of this loop and begin our binary search within the row itself. 
- The column binary search is very similar, we define our left and right pointers and our middle value. Based on if the value is less than or greater than the target, then we move the pointers accordingly. If we don't find a value we break out of the loop and return False.
#### Implementation

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        ROWS, COLS = len(matrix), len(matrix[0])

        top, bot = 0, ROWS - 1
        while top <= bot:
            row = (top + bot) // 2
            if target > matrix[row][-1]:
                top = row + 1
            elif target < matrix[row][0]:
                bot = row - 1
            else:
                break

        if not (top <= bot):
            return False
        row = (top + bot) // 2
        l, r = 0, COLS - 1
        while l <= r:
            m = (l + r) // 2
            if target > matrix[row][m]:
                l = m + 1
            elif target < matrix[row][m]:
                r = m - 1
            else:
                return True
        return False
```

#### Complexity Analysis

- Time Complexity: $O(logm+logn) (\text{which reduces to} \space O(log⁡(m∗n))O(log(m∗n)))$
- Space Complexity: $O(1)$
