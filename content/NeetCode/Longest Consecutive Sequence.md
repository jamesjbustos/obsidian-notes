---
date: 11-21-24
tags:
  - arrays-hashing
---
---
### Problem

- Given an input array `nums` our function should return the length of the longest consecutive sequence that can be formed. A consecutive sequence is a sequence of elements in which each element is exactly `1` greater than the previous element. The elements in the input array don't have to be in consecutive order
- Our solution should run in `O(n)` time complexity
#### Example

```python
Input: nums = [2,20,4,10,3,4,5]

Output: 4
```

---
### Approach 1

#### Visualize the problem

![[attachments/Longest Consecutive Sequence 2024-11-21 13.06.00.excalidraw.svg | center | 500]]

#### Solve without code

 - To start we can iterate through the input array
 - Checking each time if the current number has a neighbor value of `num - 1`
 - If not then we know this is a start of a sequence
 - Then we check if `num + 1` exists until we can't
 - This run defines one sequence and we kept track of how many numbers define this sequence
 - Once we've counted all sequences we can find the max count value we defined
#### Solve with code

- Convert our input array to a hash set to reduce the time complexity of looking up values to O(1)
- Create our max count variable to keep track of the max count
- Begin iterating through the set
- If our current number does not have a neighbor of `num - 1` in the set then we know this is the start of a sequence
- We can then check if `num + 1` exists in the set until we can't
- Update our max count to the count of this sequence
- We move to the next number in the set and check for the same conditions
- Return max count
#### Implementation

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Convert our input array to hash set
        numSet = set(nums)
        # Longest sequence
        longest = 0

        for n in nums:
            # check if start of sequence
            if (n - 1) not in numSet:
                length = 0
                # Iterate over current sequence
                while(n + length) in numSet:
                    length += 1
                # Calculate max value
                longest = max(length, longest)
        return longest
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$


