---
date: 12-11-24
tags:
  - stack
---
---
### Problem

- In this problem we're given an integer `n`, return all well-formed parentheses strings that you can generate with `n` pairs of parentheses.

#### Example

```python
Input: n = 3

Output: ["((()))","(()())","(())()","()(())","()()()"]
```

---
### Approach 1

#### Visualize the problem

![[Generate Parentheses 2024-12-11 21.59.17.excalidraw]]
![[Generate Parentheses 2024-12-12 00.14.44.excalidraw]]
#### Implementation

```python
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # only add open parentheses if open < n
        # only add a closing parentheses if close < open
        # stop when, valid IIF open == close == n

        stack = []
        res = []

        def backtrack(openN, closedN):
            if openN == closedN == n:
                res.append(''.join(stack))
                return
            
            if openN < n:
                stack.append("(")
                backtrack(openN + 1, closedN)
                stack.pop()

            if closedN < openN:
                stack.append(")")
                backtrack(openN, closedN + 1)
                stack.pop()
        
        backtrack(0,0)
        return res
```

#### Complexity Analysis

- Time Complexity: $O\left(\frac{4^n}{\sqrt{n}}\right)$
- Space Complexity: $O(n)$
