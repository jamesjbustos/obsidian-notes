Date: 2024-07-22

**Problem**
- Given a list of strings, we return the common character between each string in the list. 
	![[Pasted image 20240722144551.png]]
	- The order in which we return them does not matter. 
	- The character has to exist at least once in each string to considered a common character
**Solution**
- The most optimal solution for this problem would be simply using the smallest string as a starting point and crossing out or removing any characters from that starting set based on if it appears at all in the other strings. what we are left with is a set that appears at least once in every string in the list. 
- Time complexity: $O(N * M)$, N is the length of string and M is the length of the longest string. which comes from the fact that we have to convert that string into a set.
- Space Complexity: $O(M)$ M is the length of the longest string. We only have one of these sets at any given moment since the other ones go to the garbage collector. Thus O(M) to account for the longest string.
```python
	def commonCharacters(strings):
    characterCounts = {}
    for string in strings:
        uniqueStringCharacters = set(string)
        for character in uniqueStringCharacters:
            if character not in characterCounts:
                characterCounts[character] = 0
            characterCounts[character] += 1

    finalCharacters = []
    for character, count in characterCounts.items():
        if count == len(strings):
            finalCharacters.append(character)
    
    return finalCharacters
```

- For this solution we are simply defining an initial character counts which will keep track of the number of times a character appears in the set of strings
- First we iterate through the strings in the list. Using a set we can iterate over each character in a single string. A set will extract the characters from the string and remove any duplicates this will leave us with the amount of times a character appears. to count we iterate over the set and initiate the character by first equating the value to zero. Then we can simply just increment the character counts after initiating. 
- Finally after we iterated over all characters in the string we can create a final list that will grab the characters that appeared as many times as the number of strings in the original list. This makes sense because we need the character to appear at least once in each string. 
- then finally we return this list of strings.

**Optimal Solution**
```python
def commonCharacters(strings):
    #Find the smallest string
    smallestString = getSmallestString(strings)

    # Convert smallesString to set
    potentialCommonCharacters = set(smallestString)

    # Iterate through every single string and remove any non common characters form PCC
    for string in strings:
        removeNoneistantCharacters(string, potentialCommonCharacters)
    
    return list(potentialCommonCharacters)

def getSmallestString(strings):
    # Set smallest string to the first valu
    smallestString = strings[0]

    # Iterate, Compare, and reassign if we find a smaller string
    for string in strings:
        if len(string) < len(smallestString):
            smallestString = string

    return smallestString

def removeNoneistantCharacters(string, potentialCommonCharacters):
    # Convert our string from the list into a set so we can 
    # remove duplicates and check  for values
    uniqueStringCharacters = set(string)

    # Now iterate over the poentialCommonCharacters from the smallest string
    # We need to convert to a list as to not mess up the indexing while also deleting
    # from the set. This list is temporary and does not affect the potentialCommonCharacters set
    for character in list(potentialCommonCharacters):
        if character not in uniqueStringCharacters:
            potentialCommonCharacters.remove(character)
    
```

- Find the smallest string
- Convert smallestString to set
- Iterate through every single string and remove any non common characters form PCC
- Set smallest string to the first value
- Iterate, Compare, and reassign if we find a smaller string
- Convert our string from the list into a set so we can 
  remove duplicates and check  for values
- Now iterate over the poentialCommonCharacters from the smallest string
- We need to convert to a list as to not mess up the indexing while also deleting
  from the set. This list is temporary and does not affect the potentialCommonCharacters set