---
date: 11-17-24
tags:
---
---
### Problem

- We're given an input array of `nums` and an integer `k`. Our function should return the `k` most frequent elements in `nums`. The result doesn't need to be sorted can be in any order.

#### Example

```python
Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
```

---
### Approach 1

- To solve this we can use a hash map to keep track of the frequency of each number and create a bucket to organize the frequency of our numbers. While we don't need the buckets to solve the problem, using our hash map to find the most frequent `k` numbers would cost us `O(nlogn)` after sorting.
  
> [!todo]
> - [ ] Create a frequency map
> - [ ] Create the buckets
> - [ ] Count the frequency of each number and store in hash map
> - [ ] Append to bucket, where index is the frequency and value the num
> - [ ] Traverse the bucket in reverse and return result, break at k items

#### Implementation

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Create a frequency map
        count = {}

        # Create buckets for number frequency
        freq = [[] for i in range(len(nums) + 1)]

        for num in nums:
            # Add num to map, if doesn't exist default to 0 and add one each time
            count[num] = 1 + count.get(num, 0)
        for num, cnt in count.items():
            # num is our number and cnt is frequency
            # freq[3] would be numbers that appeared 3 times
            freq[cnt].append(num)
        
        # Traverse freq bucket in reverse and stop at k
        res = []
        for i in range(len(freq) - 1, 0, -1):
            for num in freq[i]:
                res.append(num)
                if len(res) == k:
                    return res
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(n)$


