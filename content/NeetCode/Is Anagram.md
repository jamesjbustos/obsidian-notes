---
date: 11-10-24
tags:
---

---
### Problem

- Given two strings `s` and `t`, we must return true if the two strings are anagrams, otherwise return False. An anagram is a string that contains the same number of characters regardless of the order. 

#### Example:

```python
Input: s = "racecar", t = "carrace"

Output: true
```

---
### Approach 1: 

- Using a hash map is a great solution. We can first check if the two strings have the same number of characters, if not then we know they can't possibly be anagrams. If so we iterate over each string and map each string, giving it a key value pair. Each character starts at 0 and increments by 1 every time its seen again until we've reach the end of both strings. Finally, we return the boolean `mapS == mapT` which will either return True or False.
#### Implementation

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # If not the same number of letters
        if len(s) != len(t):
            return False
        
        # Hash map solution
        mapS, mapT = {}, {}

        # Iterate over each string and create key value pair
        for i in range(len(s)):
            mapS[s[i]] = 1 + mapS.get(s[i], 0)
            mapT[t[i]] = 1 + mapT.get(t[i], 0)
        return mapS == mapT
```

#### Complexity Analysis

- Time Complexity: $O(N)$
- Space Complexity: $O(1)$ - Since we can only have characters as input, the worst case scenario for the number of unique characters would be 26.