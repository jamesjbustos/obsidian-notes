Date: 08-06-24

---
### Problem
- We're given a non-zero input array that represents dishes. Sweet dishes are represented by negative values and savory dished by a postive value. Our function should return a sweet and savory dish that is as close as possible to a given input `target`. We can be under the target but not over it as the final result. 

#### Example:

```python
[5, 2, -7, 30, 12, -4, -20] -> [-4 , 5] = 1, 
this is the closes combination given a target of 4.
```

---
### Approach 1: 

- To solve this we can separate the sweet and savory dishes in their own array and sort them. Then in this we can setup a way of stepping through value based on if we're below the target or above. For instance, if our target is `4`, and our first combination of values is `-4, 2` this will give us a dish value of -2. This is less than the value of 4, so then intuitively we can increment one of the dishes to a greater value so that maybe our total dish value is closer to the target. Therefore, we will increase the positive values (savory) by moving the index one. This new combination gives us `-4, 5`, this totals to a dish value of 1. This closer to the value of 4, but still not close as it can be therefore we increment the positive index once more. Finally, this new combination will be `-4, 12` this totals to 8 which is over the target and not allowed, therefore, we increase the negative value by one index and repeat the same process. as we move along the combinations we're saving each best difference of `target-currentDish`, ensuring that the best current dish cannot surpass the target value. 
#### Implementation

```python

```

#### Complexity Analysis

- Time Complexity: $O(n logn)$ — sorting the array takes O of n log n time. 
- Space Complexity: $O(n)$ —  we're saving and storing the new arrays of total n values. 

---
