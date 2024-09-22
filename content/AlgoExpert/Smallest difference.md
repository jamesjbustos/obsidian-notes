Date: 2024-07-25

**Problem**
- We're given two arrays and we need to find the smallest difference, from two numbers in each array
- Essentially the closes numbers from both arrays
**Solution**
- To solve this we can start off by sorting the array
- With sorting the array we can take advantage of some properties of a sorted array. 
- We can set two pointers two iterate through the two arrays. However as we iterate we calculate the difference and keep track of this difference. If we see that the left pointer is less than the right pointer then increasing the left pointer will yield a smaller difference, if the right pointer is less than the right pointer then we can increase the right pointer. we keep doing this until we've reach the end with the smallest possible difference.
- The time complexity is O(n(log n) + M log(M)) because we are sorting both arrays
- The space complexity O(1) since we are just storing the smallest difference
```python
# O(n (log n) + m (log m)) time | O(1) space
def smallestDifference(arrayOne, arrayTwo):
    # Sorth both arrays
    arrayOne.sort()
    arrayTwo.sort()
    
    # Pointers for both arrays
    idxOne = 0
    idxTwo = 0

    # Infinity is greater than everything so this an easy way of accounting for maybe the first value
    # that may be the smallest. Beacuse if we did arrayOne[0] - arrayTwo[0] then the first index 
    # will not be smaller than this one
    smallest = float("inf")

    # Current Difference
    current = float("inf")

    # Smallest pair 
    smallestPair = []

    # While we haven't reached the end of one of the arrays
    while idxOne < len(arrayOne) and idxTwo < len(arrayTwo):
        # Set the first and second number to the start of the arrays
        firstNum = arrayOne[idxOne]
        secondNum = arrayTwo[idxTwo]
        # current = abs(firstNum - secondNum) this would work too to replace the other current calculations
        # however the other option is arguably more readable.

        # Being comparing

        # If first is less than second, we can increment our first array index by one
        # Also for each iteration we calculate and update current
        if firstNum < secondNum:
            current = secondNum - firstNum
            idxOne += 1
        # If second is less than the first, we can increment the second array index by one
        elif secondNum < firstNum:
            current = firstNum - secondNum
            idxTwo += 1
        # if the pair of first num and second num are equal than that would be the smallest difference
        else: 
            return [firstNum, secondNum]

        # if our smallest is less than current, then we can update smallest and the smallestPair
        # Starting off since we set smallest to infinity, we will capture the first smallest value
        # regardless how big of a difference it is
        if smallest > current:
            smallest = current
            smallestPair = [firstNum, secondNum]

    return smallestPair


    # note: if were to not sort the array in place then we would use more space 
    # and it would be constant space anymore.
    # However, we are not storing anything that depends on the length of the input
```