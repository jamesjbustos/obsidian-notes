---
date: 11-19-24
tags:
---
---
### Problem

- Given a list of strings our function should encode the list into a single string using some type of delimiter to the start and end of the next string. 

#### Example

```python
Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
```

---
### Approach 1

- We know that while encoding we need some type of delimiter to denote the start and end of a string. If we use something like `#` to separate the words `neet`, `code` into a single string `neet#code`, this would work, however it does not cover the edge case where a string can have a `#` sign in the middle of the string such as `co#de`. To prevent this we can use the length of the original string as sort of a double proof. Using the length of the string our encoded string should look like `4#neet5#co#de`. Although we have two `#` signs in the second string we know that the first `#` sign we find will have an accompanying integer to represent where our first string ends. Using the length we can extract the 4 characters from the first string and know that second string will have 5 characters including the `#` sign.
  

> [!todo]
> - [ ] Encode string by concatenating `Length of word + # + word` 
> - [ ] Create a list to hold words after decoding
> - [ ] Begin loop to iterate over each character
> - [ ] Create a second pointer to keep track of `#` sign
> - [ ] While second pointer != #, increase index
> - [ ] Iterate from index i to j to extract the integer 
> - [ ] Move i index right after `#` sign and move `j` index to end of the word
> - [ ] Append the word from index `[i:j]`
> - [ ] Return result

#### Implementation

```python
class Solution:
    
    def encode(self, strs: List[str]) -> str:
        # Result encoded string
        res = ""

        # Encode using length of word + # + word
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    def decode(self, s: str) -> List[str]:
        # Starting index and list of decoded words
        res, i = [], 0
        
        # Iterate over each character and start decoding
        while i < len(s):
            # Intialize second pointer
            j = i
            # Use j to look for #
            while s[j] != '#':
                j += 1
            # We know the length is prepended to $
            length = int(s[i:j])
            # Move i to right after # sign and j to end of the word
            i = j + 1
            j = i + length
            # Append the word by slicing
            res.append(s[i:j])
            # Move i to the start of the next encoded word
            i = j
            
        return res
```

#### Complexity Analysis

- Time Complexity: $O(m)$ $\text{m is the sum of all strings and n is the number of stirngs}$
- Space Complexity: $O(1)$


