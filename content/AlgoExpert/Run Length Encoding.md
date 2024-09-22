Date: 2024-07-19

![[Pasted image 20240719165611.png]]
**Problem**
- The way run length encoding work is that we encode a sequence of consecutive and identical characters of data as a single digit data value and count, in contrast with the original. For instance, if we a run of data such as "AAA" the run-length encoding would be "3A". 
- If we have for instance "AAAAAAAAAAAA" (12A's) we can't just say "12A" since the string can either be encode as "12A" which represents "AAAAAAAAAAAA" or "1AA". Therefore, long runs (10 or more characters) should be encoded in a split fashion. The correct encoding should be "9A3A".

**Solution**
-  It would be most optimal to make a list or array to hold the new encoded string.
- **It is not optimal to use a string to concatenate to, because we are essentially creating a new string every time we do so. Strings are immutable (cannot be changed once they are created) under the hood what is happening when you concatenate to a string is that a new string is created in memory to hold new this string. This would be give us an O(N) operation on the new string and since we are already looping through the input string, we end up with an operation that is costing us a time complexity of O(N^2)**
```python
#NON OPTIMAL SOLUTION USING A STRING TO OPERATE ON
string = ''

string += "4A"

# The above requires creating a new string in memory every time.
```

- Space complexity is at most O(n) and time complexity is at worst O(n) since we are only iterating through the input array once. 
```python
def runLengthEncoding(string):
    encodedStringCharacters = []
    currentRunLength = 1

    for i in range(1, len(string)):
        currentCharacter = string[i]
        previousCharacter = string[ i - 1]

        if currentCharacter != previousCharacter or currentRunLength == 9:
            encodedStringCharacters.append(str(currentRunLength))
            encodedStringCharacters.append(previousCharacter)
            currentRunLength = 0

        currentRunLength += 1


    encodedStringCharacters.append(str(currentRunLength))
    encodedStringCharacters.append(string[len(string) - 1])

    return "".join(encodedStringCharacters)
```
- This solution begins by creating two variables:
	- `encodedStringCharacters = []` This is a list that will hold the final encoded string value.
	- `currentRunLength` This variable keeps track of the run of the data, or how consecutive something is right now
- To begin the algorithm we start by iterating over the string, starting at index 1. 
- We then define the current character and the previous character (i - 1)
- Now we need to figure out a way to catch the following conditions: if current character is not the same as the previous character and when we've surpassed our single digit representation
- Therefore we say `if currentCharacter != previousCharacter or currentRunLength ==9`
- Then we can start appending our run length and the corresponding character which would be the previous character because that is the last one we checked that is the same as the previous. Meaning if the characters changed then now currentCharacter is different that the data run. 
- Since our data run ends we have to reset our currentRunLength back to 0. This is because we no longer have the same sequence and have to start over again.
- Under the if statement we also add to the currentRunLength to keep track of the current data run as well as moments where the currentRunLength resets that will take care of it too. 
- After all this we need to handle the last run, this is because the for loop will at most stop at the final character, but we need a way to also capture the run length of this one too. Therefore after all operations are done we can simply add the final currentRunLength and append the value at the end of the string. 
- Then finally, we just return the final string using .join on the list. 