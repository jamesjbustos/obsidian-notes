Date: 2024-07-23

**Problem**
- Given a list of words we want to find the words that are spelled the same backwards. For instance if we have diaper and repaid in the list then we know we can group these two together as backwards both of them spell the same word. We store these two words in a list within a 2d array to account for multiple sets of words possible.

**Solution**
- Using the given list of words we can create a set that uses constant space to compare to (lookup time) avoiding two nested for loops, as we reverse the words while indexing the original list of words. As we compare we remove the word from the word set, if we find a pair then we place in a pairs array and keep going until we've reached the end of the list.
	- This algorithm runs in O(n * m) since we will be iterating n times and m is the length of the longest word (this matters because we have to reverse the word). The space complexity will be the same O(n * m) since n will be number of words we have to add and m is going to be the length of the longest word. 
	- A set will have an O(1) lookup time which is good when we have to compare strings. 
```python
def semordnilap(words):
    # Convert this words array to a set
    wordsSet = set(words)

    # Pairs list
    semordnilapPairs = []

    # Iterate through the word in words
    for word in words:
        # Reverse the word using slicing
        reverse = word[::-1]
        # If the word is in the wordsSet and reverse does not equal a palindrome (same word)
        if reverse in wordsSet and reverse != word:
            # then we add it to our pairs array
            semordnilapPairs.append([word,reverse])
            # and we remove the word from the set to avoid adding it again to our pairs array
            wordsSet.remove(word)
            wordsSet.remove(reverse)

    # Once we've iterated through every word in words we can return the final pairs
    return semordnilapPairs

```