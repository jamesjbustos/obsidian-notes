---
date: 12-10-24
tags:
  - stack
---
---
### Problem

- In this problem we're told to create a stack that support the `push`,`pop`, `top`, and `getMin` operations. The operations must be done in `O(1)` constant time.

#### Example

```python
Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
```

---
### Approach 1

#### Visualize the problem

![[Minimum Stack 2024-12-10 22.16.55.excalidraw.svg | center | 500]]

- The `push`, `pop`, and `top` operations can easily be done in `O(1)` time with using the built-in functions. 
- The `getMin()` function naively can be solved using `O(n)` time by iterating over the current version of the stack and comparing the min value. However since we wan't a more optimal solution we can do the following
- Since for each `push` and `pop` operation our min value changes we can keep a parallel stack to keep track of the earliest and latest min value of the stack . Meaning that when a value is added to the empty stack we say its the min value, as we add more values we compare again and determine the new min value at this position in the stack while ensuring we keep the previous min values. 
#### Implementation

```python
class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)

    def pop(self) -> None:
        self.stack.pop()
        self.minStack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
```

#### Complexity Analysis

- Time Complexity: $O(1)$ - for all operations
- Space Complexity: $O(n)$
