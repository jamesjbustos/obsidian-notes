---
date: 11-27-24
tags:
---
---
### Problem

- We're given a a string `s` that contains the following characters:
	- `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`
- Our function should return if the input is valid based on the following conditions:
	- Every open bracket has its respective closing bracket
	- Open brackets are closed in the correct order
	- Every close bracket has its respective open bracket
#### Example

```python
Input: s = "([{}])"

Output: true

Input: s = "[(])"

Output: false
```

---
### Approach 1

#### Visualize the problem

![[Valid Parentheses 2024-11-27 12.18.55.excalidraw.svg|641]]
#### Plan

- Go through input string
- If the current character is a opening bracket then we can look for the next character to have its closing bracket
- If the current character is not the respective closing bracket return False
#### Implementation

```python
class Solution:
    def isValid(self, s: str) -> bool:
        # stack to hold our open brackets and result
        stack = []
        # hash map to match brackets
        closeToOpen = { ")" : "(", "]" : "[", "}" : "{" }

        for c in s:
            # if this current character is not an opening bracket
            if c in closeToOpen:
                # if stack is not empty and if the last value
                # in the stack is the corresponding opening bracket
                # pop from stack
                if stack and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    return False
            # If current character is an opening bracket 
            else:
                stack.append(c)
        
        return True if not stack else False
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
