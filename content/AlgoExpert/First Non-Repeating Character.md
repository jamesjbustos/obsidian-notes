Date: 2024-07-23

**Problem**
- Given a list of strings find the first non repeating character, return index if true if not return $-1$

**Solution**
- **Non optimal brute force solution**: using two pointers we can track of the current index and the index as we iterate throughout the entire string. If we find a duplicate then we move the current index one, if we iterated through the whole string with no duplicates found then we stop there and return the index of the non repeating character. This solutions run in $O(n^2)$ time and O(1) space. We are iterating through the string with two nested for loops thus causing this time complexity and we are not using any new space, just simply returning a value.
```python
def firstNonRepeatingCharacter(string):
    # First index that keep tracks of current index
    for idx in range(len(string)):
        # Boolean to keep track of values that don't have duplicates
        foundDuplicate = False

        # Second for loop that uses the first index to compare to and determine
        # if the current index has a duplicate value
        for idx2 in range(len(string)):
            # If true then we can set the boolean flag to true
            if string[idx] == string[idx2] and idx != idx2:
                foundDuplicate = True
        # If at the current index we loop through the whole string using idx and see
        # no duplicate value (indicated by the boolean) then we can immediately return the
        # current index
        if not foundDuplicate:
            return idx
    return -1
```
- **Using a hash map**: Since we are dealing with input that is limited to lowercase english alphabet the possible unique values is limited to $O(26)$. Therefore, the space complexity can be considered of O of constant value. However, if the input string was not limited and accepted any value as a character then this would not apply.
	- To implement this algorithm we would simply create a hash map that maps the characters and their frequency
	- Once we have this we can simply loop through the hash map and check for any key that is equal to one.
	- This is an $O(1)$ space and O(n) time. We iterate twice which is O(n) + O(n) = O(2n) which is simply O(n).
```python
def firstNonRepeatingCharacter(string):
    # Define hash map / dictionary
    characterFrequencies = {}

    # loop through input string
    for character in string:
        # If the character doesn't exist then .get will add 'character' as a key
        # and default to a value of 0 when initiating. 
        # Afterwards we increment it by one for every frequency of the character
        # its important to note that the first occurence is counted as well
        characterFrequencies[character] = characterFrequencies.get(character, 0) + 1

    # once we have our frequency hash map then we can iterate through the string using an idx
    for idx in range(len(string)):
        # The character at the current idx
        character = string[idx]
        # if the current character in the hash map is equal to one then we know that
        # this value is the first non repeating character
        if characterFrequencies[character] == 1:
            return idx
    return -1

```