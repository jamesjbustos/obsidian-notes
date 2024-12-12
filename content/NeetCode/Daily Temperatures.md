---
date: 12-12-24
tags:
  - stack
---
---
### Problem

- In this problem we're given an array of integers `temperatures` where `temperatures[i]` represents the daily temperatures on `ith` day.
- Our function should return an array `result` where `result[i]` is the number of days after the `ith` day before a warmer temperature. So for the first index we'd see the current temperature and count how long before a warmer temperature and save our result. We repeat this for the length of the temperatures given.

#### Example

```python
Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
```

---
### Approach 1

#### Visualize the problem

![[Daily Temperatures 2024-12-12 10.34.16.excalidraw.svg | center | 500]]
#### Implementation

```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = [] #pair: [temp, index]

        for idx, temp in enumerate(temperatures):
            while stack and temp > stack[-1][0]:
                currentTemp, currentIdx = stack.pop()
                res[currentIdx] = idx - currentIdx
            stack.append((temp, idx))
        return res
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
