Date: 09-21-24

---
### Problem

- In this problem we're given a binary tree and our solution should essentially swap all the node with its counterpart (inverting). In other words, mirroring the binary tree.

#### Example:

```python
Sample Input:
tree =    1
       /     \
      2       3
    /   \   /   \
   4     5 6     7
 /   \
8     9

Sample Output:
       1
    /     \
   3       2
 /   \   /   \
7     6 5     4
            /   \
           9     8
```

---
### Approach 1: 

- In this solution we will us BFS, which means we will be traversing the binary tree level by level. For each level well essentially swap the child nodes. So for root 1 we swap 3 and 2 and end up mirroring the left and right subtree. Then we move on the next level which is 3 and 2 and do the same exact step. To keep track of what we have swapped is using a queue, once done we pop it from the queue. 
#### Implementation

```python

```

#### Complexity Analysis

- Time Complexity: $O(N)$ — we're exploring every single node and adding to our queue n operations
- Space Complexity: $O(N)$ — we're using a queue where in the worst case scenario we are holding n variables in the queue. 

---
### Approach 2 (Recursive solution): 

- In this solution we start at the root node and swap the left and right subtree. Then we recursively iterate over the left subtree by calling the same function that swapped the left and right child, until finally we've reached the end of the left subtree. Once we're done with the left subtree we can unravel our way to the right subtree of the root node and swap the children as well.
#### Implementation

```python
# Most optimal solution
# O(n) time | O(h) space
def invertBinaryTree(tree):
    # Check if node is empty
    if tree is None:
        return 
	# Call helper function
    swapLeftAndRight(tree)
    # recursively iterate through left tree and right subtree
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)

def swapLeftAndRight(tree):
    tree.left, tree.right = tree.right, tree.left
   

class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
```

#### Complexity Analysis

- Time Complexity: $O(N)$ — we're traversing every single node and swapping our nodes which is just O(1) operation.
- Space Complexity: $O(h)$ — since we're doing recursive calls, our worst case for space is the depth of the tree or the height of tree. With a binary tree its important to note that the depth of a tree is also O(log(n)), but can be written in both ways.
---
