Date: 2024-07-19

**Problem**
- The way this encryptor works, is that given a non empty string and a non negative integer representing a key, we can encrypt the string. The encryption works by shifting the words based on the key and the alphabet. For instance 
```python
string = 'xyz'
key = 2

#Output
"zab"
```

**Solution**
- With the unicode value we can see which character it is. In python we can use the `ord` function to input a character and retrieve its unicode value.
$$
nLC = ord(letter) + key
$$
- New letter code is solved as shown above.
- Time Complexity: $O(N)$, iterating through the input string. If we were to use the self built array then it would of constant time $O(1)$
- Space Complexity: $O(N)$ we are creating of space O of n and not creating anything else.
- If you have an alphabet of length M (not the english alphabet) then you would need to store an array of length of M. thus making space and time complexity $O(M)$
```python
def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26

    for letter in string:
        newLetters.append(getNewLetter(letter, newKey))
    return "".join(newLetters)

def getNewLetter(letter, key):
    newLetterCode = ord(letter) + key
    return chr(newLetterCode) if newLetterCode <= 122 else chr(96+newLetterCode % 122)
```
- This solution creates a newLetters array to hold the new Letters after being shifted. 
- we use the modulus on the key due to the fact that we need to normalize the value so that when don't surpass the 122 limit. This way were are given exactly the shift required to make and nothing more.
- The for loop begins to iterate through each letter in the string and append the result from the getNewLetter function which takes in a letter and the key
- The getNewLetter function works by calling the ord function which gives us the unicode value of that letter and we immediately shift the letter based on the key by simply adding it
- Then we use a ternary operator and the chr function to convert the unicode value back to a character
- The ternary operator checks if the new letter code is less than or equal to the max of 122 (z) if not then we do the modulus of this new letter code and add the value at the beginning of the this unicode table before -> (a = 97). This will give us the new character and the appropriate shift. 