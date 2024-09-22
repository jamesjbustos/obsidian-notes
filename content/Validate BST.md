Date: 09-10-24

---
### Problem

- In this problem we are given a potentially invalid BST and our function should return a boolean representing whether the BST is valid. For the BST to be valid, all of its node must be valid BST nodes. It should satisfy the BST property, which is when a nodes value is strictly greater than the values of every node to its left, and is less than or equal to the nodes to the right of it.

#### Example:

```python

```

---
### Approach 1: 

- In this solution we can create a boolean case for each node as we traverse it. For instance, beginning at the root node the minimum possible value is negative inf and the maximum possible value is positive inf. Therefore, if the node satisfies this then we know this is a valid BST node. Then we move down to the left subtree and bring down that boolean case. However, in this case if we had a node of 5 moving down our left subtree, based on the current node we set it as the maximum (10) and now the new boolean case would be the current node value should be greater than negative inf and less than 10. If we move down to the right subtree we update the min value to the current node and now in this example the boolean case would be the current node should be greater than or equal to 5 and less than 10. 
- In code this is accomplished using recursion.
  
#### Implementation

```python
def validateBst(tree):
    return validateBstHelper(tree, float('-inf'), float('inf'))

def validateBstHelper(tree, minValue, maxValue):
    # Check if we are at a leaf node
    if tree is None:
        return True

    # Check if the node falls within the allowed range
    if tree.value < minValue or tree.Value >= maxValue:
        return False

    # If our node is valid up to this point
    # We want to check if its left subtree and right subtree is valid

    # For the left subtree we can use tree.left and change the maxValue to the
    # current node. because if this is a left node to the current node
    # it can only bst if its less than the current node
    # the min value stays the same because as long as its less than the current node its valid
    leftIsValid = validateBstHelper(tree.left, minValue, tree.value)
    rightIsValid = validateBstHelper(tree.right, tree.value, maxValue)
    return leftIsValid and rightIsValid
    # For right subtree we do the opposite and change the minValue to be the current Node
    # this is because if move the right of a node, it means that the right node should be
    # greater than the current node.
```

#### Complexity Analysis

- Time Complexity: $O(N)$
- Space Complexity: $O(d)$ - d represents the depth of the tree, d is the worst case scenario 

---
