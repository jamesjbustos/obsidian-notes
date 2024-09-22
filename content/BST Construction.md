Date: 08-28-24

---
### Problem

- Binary search tree's or BST, have to have an important property which is the BST property. This means that each node should be strictly greater than the nodes to the left of it and should be greater than or equal to the nodes to the right of it. 
- The main methods that can performed on a BST is Insertion, Searching, and Deletion. Deletion is a bit more difficult to implement relative to insertion and searching due to possible edge cases
-  To perform a deletion on a single children node the process is simple, delete the node and shift any child nodes if applicable. However, when dealing with nodes with two children we use `Inorder Predecessor` and `Inorder Sucessor`. Inorder Predecessor is the largest node (rightmost) in the left subtree of the node you want to delete. Inorder Successor is the smallest node (leftmost) in the right subtree of the node you want to delete. This process is good for root nodes and nodes with two children. 
- The average case time complexity is `O(log(n)` because we are splitting our traversal by half through every node we pass, since we decide we're continuing towards the left or right subtree. However, there are cases where we iterate through the whole tree. For instance, in a single linked linear tree, we would have to iterate through the whole tree in the worst case. 
- The space complexity can vary depending on the algorithm. For instance, for a recursive algorithm we would use on average `O(log(N))` and in the worst case`O(N)` space, since we are using frames on a call stack and this worst case scenario. Now, when solved iteratively the space efficiency is much better. For iterative solution we use a worst case of `O(1)`. This is because we are not storing frames on a call stack. 

#### Example:

```python
Simple BST methods. Insert, Find, and Remove
```

---
### Approach 1: 

- The insert, and contains method work the same. First, find the target node by using the fact that we traverse left or right based on if `value > | < currentNode.value`. If it is less then, then we traverse left and conversely if greater than. The remove method is a bit more complicated and requires solving for multiple edge cases such as two children nodes, single children noes, and nodes with no children. In any case, we first traverse through the BST and find the target node while also keeping track of the parent node by constantly setting it for each iteration. Once we've found the node we can use reassignment to ensure 
#### Implementation

```python
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def insert(self, value):
        currentNode = self
        while True:
            if value < currentNode.value:
                if currentNode.left is None:
                    currentNode.left = BST(value)
                    break
                else:
                    currentNode = currentNode.left
            else:
                if currentNode.right is None:
                    currentNode.right = BST(value)
                    break
                else:
                    currentNode = currentNode.right
        return self

    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def contains(self, value):
        currentNode = self
        while currentNode is not None:
            if value < currentNode.value:
                currentNode = currentNode.left
            elif value > currentNode.value:
                currentNode = currentNode.right
            else:
                return True
        return False

    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def remove(self, value, parentNode=None):
        currentNode = self
        while currentNode is not None:
            if value < currentNode.value:
                parentNode = currentNode
                currentNode = currentNode.left
            elif value > currentNode.value:
                parentNode = currentNode
                currentNode = currentNode.right
            else:
                # Case 1 and 2: Node to remove has two children
                if currentNode.left is not None and currentNode.right is not None:
                    # Replace with minimum value from right subtree
                    currentNode.value = currentNode.right.getMinValue()
                    # Remove the node we just used for replacement
                    currentNode.right.remove(currentNode.value, currentNode)
                # Case 3: Node to remove is the root
                elif parentNode is None:
                    if currentNode.left is not None:
                        # Replace root with left child
                        currentNode.value = currentNode.left.value
                        currentNode.right = currentNode.left.right
                        currentNode.left = currentNode.left.left
                    elif currentNode.right is not None:
                        # Replace root with right child
                        currentNode.value = currentNode.right.value
                        currentNode.left = currentNode.right.left
                        currentNode.right = currentNode.right.right
                    else:
                        # This is a single-node tree; do nothing.
                        pass
                # Case 4 and 5: Node to remove has one or no child
                elif parentNode.left == currentNode:
                    # Connect parent to currentNode's child (if any)
                    parentNode.left = (
                        currentNode.left if currentNode.left is not None else currentNode.right
                    )
                elif parentNode.right == currentNode:
                    # Connect parent to currentNode's child (if any)
                    parentNode.right = (
                        currentNode.left if currentNode.left is not None else currentNode.right
                    )
                break
        return self

    def getMinValue(self):
        currentNode = self
        while currentNode.left is not None:
            currentNode = currentNode.left
        return currentNode.value
```

#### Complexity Analysis

- Time Complexity: $O(log(n)), \text{worst case: } O(N)$
- Space Complexity: $O(1), \text{worst case: } O(1)$

---
