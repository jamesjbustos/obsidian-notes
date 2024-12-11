---
date: 12-11-24
tags:
  - stack
---
---
### Problem

- In this problem we're given an array of strings `tokens` that represents a vlid arithmetic expression in Reverse Polish Notation.

#### Example

```python
Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5
```

---
### Approach 1

![[Evaluate Reverse Polish Notation 2024-12-11 12.29.31.excalidraw.svg | center | 500]]

- Create a variable to hold our result stack and create loop to iterate over input list
- Since our conditions are dependent on encountering the operators `+`, `-`, `*`, `/`, we can create a set to hold our operators
- We start by iterating over the list and checking if the current token is not an operator, if its not we know its a number and can append it to our result stack.
- If it is an operator we pop the last two values and perform the operation
- finally we append the result to the result stack and continue to the next token
#### Implementation

```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # Result stack
        res = []
        # Operators
        operators = {"+", "-", "*", "/"}

        # Iterate over input list
        for token in tokens:
            if token not in operators:
                res.append(int(token)) 
            else:
                a = res.pop()
                b = res.pop()
                if token == "+":
                    result = b + a
                elif token == "-":
                    result = b - a
                elif token == "*":
                    result = b * a
                elif token == "/":
                    result = int(b / a) 
                res.append(result)
        
        return res[0]
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$
