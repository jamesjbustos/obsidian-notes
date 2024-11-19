---
date: 11-14-24
tags:
  - arrays-hashing
---
---
### Problem

- We're given an array of strings and our function should return an array of sublists containing the pairs of anagrams and the words with no anagrams can be grouped alone. 

#### Example

```python
Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
```

---
### Approach 1

- We know two different words can only be anagrams of each other if they have the same number of characters and contain the same letters.
- Another thing we know is that if for instance we have two words `cat` and `act`, if sorted we would get for both `act`. This can act as a signature to determine if they're are anagrams of each other. Although this would work, it would be time heavy since we're sorted every single word form the input array. 
- Another possible solution could be to create a counter for each letter apparent in the string of words. We would have a list that maps all the characters in the alphabet and we can increase the count for each letter in the word. 

```python
res = {
    (1, 0, 0, 0, 1, 0, ..., 1, 0, ..., 0): ["eat", "tea", "ate"],
    (1, 0, 0, ..., 1, 0, ..., 1, 0, 0, ..., 0): ["tan", "nat"],
    (1, 1, 0, ..., 0, 0, ..., 1, 0, 0, ..., 0): ["bat"]
}
```

- Since an iteration of a word will result in the same count for anagrams once they're added the hash map, they'll be place to the appropriate key. Then we just return the values of the hash map. 

> [!todo]
> - [ ] Create hash map with empty lists as values.
> - [ ] Begin a for loop to iterate over each word
> - [ ] Create a new counter list for each word form a-z (26 values)
> - [ ] Loop through each character in the word
> - [ ] Map the counter index by mapping it using the index
> - [ ] Finally we append the count tuple and its string value.
>
> An ascii value of 97 represents 'a' therefore to map it as the first index we can simply subtract its ascii value by itself to get an index value of 0. 

#### Implementation

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Create hash map
        res = defaultdict(list)

        # Iterate over words
        for s in strs:
            # Create counter
            count = [0] * 26
            
            # Iterate over each character and increase counter
            for c in s:
                # Use ascii value to map and increase counter
                count[ord(c) - ord("a")] += 1
            
            # Append string with key value as the count tuple
            res[tuple(count)].append(s)

        # Return the list of words.
        return res.values()
```

#### Complexity Analysis

- Time Complexity: $O(m*n)$
- Space Complexity: $O(m)$
- Where m represents the length of the list and n represents the average size of each word.
