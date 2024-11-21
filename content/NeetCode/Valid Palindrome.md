---
date: 11-21-24
tags:
  - two-pointers
---
---
### Problem

- In this problem we're given an input string and our function should return a `boolean` validating if the string is a palindrome or not. We ignore cases and non-alphanumeric characters.

#### Example

```python
Input: s = "Was it a car or a cat I saw?"

Output: true
```

---
### Approach 1

#### Visualize the problem
![[Valid Palindrome 2024-11-21 14.03.09.excalidraw.svg | center | 500]]
#### Solve without code

 - To start we can preprocess the word by removing spaces, converting all to lowercase, and ignoring non-alphanumeric characters.
 - Then we look to the left and right of the string and compare if each time we move inwards we have the same character if so then we know that is a palindrome since the same string can be read in both ways. 
 - If we run into a character that is not the same then we simply return false
#### Solve with code

- Use python comprehension to quickly remove spaces by using `''.join()` alongside a iterable which uses `char.lower()` to convert all chars to lowercase and `isalnum()` to check for alphanumeric chars. The final line of code should look like `''.join(char.lower() for char in word if char.isalnum())`
- Define a left and right index to keep track of the chars. Setting `leftIdx` to 0 and `rightIdx` to `len(word) - 1`
- Once we've preprocessed the word we can begin iterating over the processed word. Using a while loop to make sure left and right don't cross
- Using and if statement we check if the current left and right char are not the same then we return false otherwise we increase the left and right index
#### Implementation

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Preprocess word
        word = ''.join(char.lower() for char in s if char.isalnum())
        print(word)
        # Define left and right idx
        leftIdx = 0
        rightIdx = len(word) - 1

        # Begin iterating over word
        while leftIdx < rightIdx:
            if word[leftIdx] != word[rightIdx]:
                return False
            # Move leftIdx right by one
            leftIdx += 1
            # Move rightIdx left by one
            rightIdx -= 1
        
        return True
```

- To optimize this word we can avoid storing a new word variable as this will give us an `O(n)` space complexity. We can directly process the input string s instead.

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Define left and right indices
        leftIdx, rightIdx = 0, len(s) - 1

        while leftIdx < rightIdx:
            # Skip non-alphanumeric characters
            while leftIdx < rightIdx and not s[leftIdx].isalnum():
                leftIdx += 1
            while leftIdx < rightIdx and not s[rightIdx].isalnum():
                rightIdx -= 1

            # Compare characters
            if s[leftIdx].lower() != s[rightIdx].lower():
                return False

            # Move pointers
            leftIdx += 1
            rightIdx -= 1

        return True
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$
