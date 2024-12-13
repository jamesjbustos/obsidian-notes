---
date: 12-12-24
tags:
  - stack
---
---
### Problem

- In this problem we're given `n` cars traveling to the same destination on a one-lane highway. We're given two arrays of integers `position` and `speed`, both of length `n`.
	- `position[i]` is the position of the `ith car` (in miles)
	- `speed[i]` is the speed of the `ith` car (in miles per hour)

#### Example

```python
Input: target = 10, position = [1,4], speed = [3,2]

Output: 1
```

---
### Approach 1

#### Visualize the problem

![[Car Fleet 2024-12-12 14.15.26.excalidraw.svg | center | 500]]

- Since we're given the position and speed of the cars we know we calculate the time the cars arrive to the target position
- If they arrive at the same time  or before another fleet then they are apart of that fleet
- We'll keep a stack to keep track of fleets. each value in stack will be a different car fleet, therefore, we can pop any cars that end up joining with another fleet
- Since this is a one way road , we know that the car at the closest position will be leading and cannot be overpassed. Therefore, it would be best to start comparing from right to left.
#### Implementation

```python
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [(p, s) for p, s in zip(position, speed)]
        pair.sort(reverse=True)
        stack = []
        for p, s in pair:  # Reverse Sorted Order
            stack.append((target - p) / s)
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
        return len(stack)
```

```python title:'Concise version'
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
	    # Join p and s in one pair and sort by position descending
        pair = sorted(zip(position, speed), reverse=True)
        stack = []
        
        for p, s in pair:
            # Calculate time to reach the target
            time = (target - p) / s
            # If the current car is faster or equal to the one in front, it forms a fleet
            if stack and time <= stack[-1]:
                continue
            stack.append(time)
        
        return len(stack)
```

#### Complexity Analysis

- Time Complexity: $O(n log n)$
- Space Complexity: $O(n)$

---
### Approach 2 (Optimized space without stack)

#### Implementation

```python
class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = sorted(zip(position, speed), reverse=True)
        fleets = 0
        lastTime = 0

        for pos, spd in pair:
            time = (target - pos) / spd
            if time > lastTime:
                fleets += 1
                lastTime = time

        return fleets
```

#### Complexity Analysis

- Time Complexity: $O(nlogn)$
- Space Complexity: $O(1)$
