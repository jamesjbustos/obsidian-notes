Date: 09-21-24

---
### Problem

- In this problem we're given an input array of integers that represent the pre-order traversal of BST. Our solution will use this input to reconstruct the BST in the same pre-order traversal. 

#### Example:

```python
Sample Input:
preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

Sample Output:
        10 
      /    \
     4      17
   /   \      \
  2     5     19
 /           /
1           18
```

---
### Approach 2: 

- Because in this problem our binary tree is binary search tree, we can use the pre-order traversal from the input array to output a unique BST. However, where order doesn't matter we can have many different versions of the same pre-order traversal. 
- In this solution we're iterating over the input array first identifying the left and right subtree index. To do this we find the first value less than then current node and the first value greater than the current node. This allows us to recursively iterate through the BST and add the nodes in the right order. We know that any value greater than the root node will be the right subtree, therefore as we move down the left subtree we are simply focusing on the left subtree and its sub trees. Moving the boundaries as we go. 
- This is not the most optimal solution since along from recursively iterating through the BST, for each node iteration we're iterating over the input array to check the current boundary and determine its left and right child. 
- In our solution one important step is to keep track of our root index. The way we can do this and create a 'global' integer is to create a class called TreeInfo and add a mutable data point called rootIdx which would be mutable throughout the whole program. Unlike, a regular integer which when changed in one place it will not change everywhere.
#### Implementation

```python
# Non optimal solution 
# O(n^2) time | O(n) space
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def reconstructBst(preOrderTraversalValues): 
    # Base case
    if len(preOrderTraversalValues) == 0:
        return None

    # Set the current value as the root node
    currentValue = preOrderTraversalValues[0]

    # He're assuming that there is no right subtree index therefore we just set it to the len
    # which is equal to nothing
    rightSubtreeRootIdx = len(preOrderTraversalValues)

    # Find index of the right child by checking the idx of the node that is greater than the current node
    for idx in range(1, len(preOrderTraversalValues)):
        value = preOrderTraversalValues[idx]
        if value >= currentValue:
            rightSubtreeRootIdx = idx
            break

    '''
    Now that we have the right subtree of the root node we can slice the array
    by the left and right subtree whilst also setting ourseleves up for the 'root' nodes
    that follow. Here we use slicing to indicate that we start at the first index and stop at the right subtree index
    then for right subtree we start at the right subtree index and stop at the end of the array
    so now, everytime we call the function we're passing in a sliced array until we've reached a none value and
    start reversing from the recursive stack.
    '''
    leftSubtree = reconstructBst(preOrderTraversalValues[1:rightSubtreeRootIdx])
    rightSubtree = reconstructBst(preOrderTraversalValues[rightSubtreeRootIdx:])
    return BST(currentValue, leftSubtree, rightSubtree)
```

#### Complexity Analysis

- Time Complexity: $O(N^2)$ — Iterating over the input array for each recursive call
- Space Complexity: $O(N)$ — The call stack for the recursive calls will create n space. 

---
### Approach 2: 

- In this solution we're iterating over the input array once and the way we can keep track of the left and right child nodes is by creating a `rootIdx` and a `range` for each node. This allows us to increase the rootIdx which is a number in the input array, we check if its within the range for a left child if its then we add it then we increase the index. then we check if its in the range for a right child if not then don't increase the index and simply move back up tree. 
  ![[Reconstruct BST-20240921093650006.webp | center | 500]]
  
#### Implementation

```python
# Most optimal solution
# O(n) time | O(h) space

'''
In our solution one important step is to keep track of our root index.
The way we can do this and create a 'global' integer is to create a class called TreeInfo and 
add a mutable data point called rootIdx which would be mutable throughout the whole program. 
Unlike, a regular integer which when changed in one place it will not change everywhere.
'''
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class TreeInfo:
    def __init__(self, rootIdx):
        self.rootIdx = rootIdx

def reconstructBst(preOrderTraversalValues):
    # Create instance of TreeInfo
    treeInfo = TreeInfo(0)
    # Begin recursion for the root node
    # We use inf for the lower and upper bound of the root node and we pass in treeInfo to be able
    # to update our rootIdx
    return reconstructBstFromRange(float('-inf'), float('inf'), preOrderTraversalValues, treeInfo)


def reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo):
    # First, we check if the index value of rootidx is equal to the len of the input array
    # if true this means we've reached the end of the input array
    if currentSubtreeInfo.rootIdx == len(preOrderTraversalValues):
        return None

    # Here we can define the value at root value using our global root idx
    # we will use this to test to see if its within the lower or upper bound
    rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx]

    # with this simple check we can see if its a valid BST node
    # if true then we know this number doesn't fit in the range and return None, so to not increase the root index
    # and continue our recursion
    if rootValue < lowerBound or rootValue >= upperBound:
        return None

    # if valid bst node then we can increment the root index to move on the next node
    currentSubtreeInfo.rootIdx += 1

    # if left subtree node then we update the lowerBound to be the same but update the upper bound with root value
    # to ensure that is must be less than previous node
    leftSubtree = reconstructBstFromRange(
        lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo
    )
    # Same situation but reversed
    rightSubtree = reconstructBstFromRange(
        rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo
    )
    # Finally, as we unravel we create the BST nodes
    return BST(rootValue, leftSubtree, rightSubtree)
```

#### Complexity Analysis

- Time Complexity: $O(N)$ — we have n recursive calls, therefore, n time.
- Space Complexity: $O(h)$ — the call stack is equal to the height of the tree. 

---
 