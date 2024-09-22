Date: 09-13-24

---
### Problem

- In this problem we are given an input array and our solution should create a BST of minimum height, meaning of less depth. Through this process we also have to ensure that each node follows the BST property. 

#### Example:

```python
Sample Input: [1, 2, 5, 7, 10, 13, 14, 15, 22]

Sample Output:
         10
       /     \
      2      14
    /   \   /   \
   1     5 13   15
          \       \
           7      22
```

---
### Approach 1: 

- In this solution we're given the insert function which makes sure that nodes are insert correctly. To ensure the min height we need to ensure that we distribute as much nodes to the left subtree as we do the right subtree. The fact that our input array is in sorted order, means we can use it to effectively place our nodes.
- First inset the middle of the array in the example this would be 10. Then we get the middle node in the left side of the array, which in this case is 2. Then we get the middle value to left of 2, which in this case is just 1. And then for the right subtree we get the middle value to the right of 2 which is 5 and 7, with the middle node being 5. And nothing to the left of 5, and 7 is just left so we pick that number to insert. This same logic applies to the right of 10. 
#### Implementation

```python
# Iterative Solution (CLEANER CODE) — O(n) time | O(n) space
def minHeightBst(array):
    return constructMinHeightBst(array, 0, len(array) - 1)

def constructMinHeightBst(array, startIdx, endIdx):
    if endIdx < startIdx:
        return None

    # Get middle index, rounding down
    midIdx = (startIdx + endIdx) // 2
    # Manually create new bst node
    bst = BST(array[midIdx])

    # Recursively call — cleaner code implementation
    # Left subtree (left side of the array)
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1)
    # Right side of the array
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx)
    return bst
```

#### Complexity Analysis

- Time Complexity: $O(N log(N))$ — we are inserting a total of n nodes, and inserting a node in a binary tree takes $log(N)$ time.    $\therefore O(N) + O(log(N)) = O(N log(N))$. However, its important to note that with another method we can bypass the insert method and manually insert them, reducing our time complexity to $O(N)$.
- Space Complexity: $O(N)$ — where N is the length of the array, and we save a BST of length N.

---
