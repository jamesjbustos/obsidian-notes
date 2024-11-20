---
date: 11-20-24
tags:
  - arrays-hashing
---
---
### Problem

- We're given a 9x9 sudoku board. A sudoku board is considered valid if the following are satisfied:
	- Each row must contain the digits `1-9` without duplicates.
	- Each column must contain the digits `1-9` without duplicates.
	- Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without duplicates.
- Our function should return `true` if the board is valid, otherwise return `false`.
- A board does not have to be filled to be valid. Also, "." denotes an empty cell.

#### Example

```python
Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
```

---
### Approach 1

- To solve this we can take advantage of integer division and the grid system we have. For instance lets say we need to check for duplicates in the `row, col = [2, 2]`. We can divide by three to get the outer index, giving us `[0,0]`. 
	- `key = (r/3, c/3)`
- We can use a hash map to find duplicates and reduce our time complexity. 
- To find duplicates in the row and columns we can simply just iterate over them using a hash map as well
  
![[Valid Sudoku 2024-11-20 13.13.57.excalidraw.svg | center | 350 ]]

#### Implementation

```python
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # Create hash map
        cols = defaultdict(set)
        rows = defaultdict(set)
        # Key (r/3, c/3)
        squares = defaultdict(set)  

        for r in range(9):
            for c in range(9):
                # Skip empty cells
                if board[r][c] == ".":
                    continue
                # If the current value is already in rows then we have a duplicate
                # If the current value is already in cols then we have a duplicate
                # If the current value in the 3x3 grid eg. [0,0],[1,1] 
                # Exists then we have a duplicate
                if ( board[r][c] in rows[r]
                    or board[r][c] in cols[c]
                    or board[r][c] in squares[(r // 3, c // 3)]):
                    return False

                cols[c].add(board[r][c])
                rows[r].add(board[r][c])
                squares[(r // 3, c // 3)].add(board[r][c])

        return True
```

#### Complexity Analysis

- Time Complexity: $O(n^2)$
- Space Complexity: $O(n^2)$


