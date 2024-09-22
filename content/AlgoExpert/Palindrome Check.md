Date: 2024-07-18

**Problem**
- Is this string of letters written the same forward and backwards.
	 ![[Screenshot 2024-07-18 at 1.27.52 PM.png]]
**Solutions**
- **New String Solution**
	- This method essentially iterates through the input string and creates a new duplicate string and at the end compares them both to see if they are the same. 
	- Space Complexity: $O(N)$ Time Complexity: $O(N^2)$
```python
def isPalindrome(string):
    reversedString = ""
    for i in reversed(range(len(string))):
        reversedString += string[i]
    return string == reversedString
	
```
- **New Array Solution**
	- Similar to the new string solution this solution does the same operations however instead of creating a new string it simply appends the characters to an array and joins the the array at the end to do the final comparison 
	- This solution slightly more optimal to creating a new string because in the new string solution we are iterating through the new string twice thus creating a time complexity of $O(N^2)$. In this solution appending it to an array does not require iterating through the new string it just appends it. this is because the behavior of appending to a string requires iterating through it in comparison with the behavior of an array when you simply have to append to it. 
```python
def isPalindrome(string):
    reversedChars = []
    for i in reversed(range(len(string))):
        reversedChars.append(string[i])
    reeturn string == "".join(reversedChars)
```
- **Recursive Solution**
	- This solution uses recursion and first and last variables, to do the following:
		- first, check if first and last are the same, if not then simply return False
		- If true, then the recursion begins which recurses through the middle section of the string and checks if it is a palindrome. 
			- `return first == last AND isPalindrome(mid)`
	 	- Space Complexity: $O(N)$ Time Complexity: $O(N)$
		- You would think that space complexity is constant since we are not creating a new variable but it's important to remember that recursion uses a call stack to store the variables and eventually unfold. For time complexity since we are iterating through the input array it would still be O of N. 
```python
def isPalindrome(string, i=0):
    j = len(string) - 1 - i
    return True if i >= j else string[i] == string[j] and isPalindrome(string, i +1)
```
- This recursive function checks if a string is a palindrome by comparing characters from both ends towards the middle. It uses two indices: `i` starting from the beginning and `j` from the end. The base case is when `i >= j`, meaning all characters have been checked or we've reached the middle, returning `True`. In each recursive step, it compares `string[i]` with `string[j]`. If they match, it makes a recursive call with `i + 1` to check the next pair. If they don't match, it immediately returns `False`. This process continues until a mismatch is found or all characters are verified, efficiently determining if the string is a palindrome.
- **Iterative Solution**
	- Two pointer solution is the most optimal way of solving this. We set one pointer to the beginning and another to the end of the string. We compare each pointer iteratively if not the same then we break out of the iteration and return False, if the same then we keep iterating until we've reached the middle of the string. 
	- Time Complexity: $O(n)$ 
	- Space Complexity: $O(1)$ , We are not storing anything apart from our pointers, therefore we have a constant space complexity. 
```python
def isPalindrome(string):
    leftIdx = 0
    rightIdx = len(string) - 1
    while leftIdx < rightIdx:
        if string[leftIdx] != string[rightIdx]:
            return False
        leftIdx += 1
        rightIdx -= 1
        
    return True

```
- This solution begins by defining two pointers, the beginning and end of the string. 
- Then using a while loop with the case that the left index is less than the right index. (This is where they surpass each other in the middle).
- We begin iterating and checking if the character on the left index is the same as the right index. If there is ever a character that are not the same then we simply return False. 
- However, if we don't hit the False case and need to continue iterating we simply increase the left index and decrease the right index. 
- If the while loop finishes with no case hitting then we can assume that every character was the same and we return True. 
- This is the most optimal way of solving this problem since we don't create any new variable and time complexity is as optimal as it can be. 