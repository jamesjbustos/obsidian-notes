Date: 08-06-24

---
### Problem
- We're given an input of a non-empty array of positive integers and our function must return the array's majority element without sorting the array and without using more than constant space. An array's majority element is an element of the array that appears in over half of its indices. You can assume that the input array will always have a majority element.

#### Example:

```python
[1, 1, 2, 2, 7, 2, 2] -> majority element is 2 because occurs > n/2 times
```

---
### Approach 1: 

- In this approach we will break down the problem to solve it. Using a majority element and a counter we can decrement or increment based on the occurrences as we move through the array. For instance, starting off with the first number from the example above, the first element `1` is the majority element, next we add the second element. The counter increases and `1` is still the majority element. Then we add the `2` and we see that this is not the majority element but we decrease the counter. And we keep doing this until we've reach the end of the array. Essentially what this does is it crosses out the least occurring elements, this works because the element that occurs the most would be the one that's left at the end of our iteration. 
- In terms of code, we will have an `answer` and `count` variable. We do the increment and decrement process as explained above and to start off we set the answer to the first value in the array. When we decrement `count` to zero, we set the next element to the current `answer`. Then we continue doing the decrement and increment process. This process will leave us with the majority element. 
#### Implementation

```python

def majorityElement(array):
    # Count and current answer variables
    count = 0
    answer = None

    # Begin iteration
    for value in array:
        # set the first answer to the first value
        if count == 0:
            answer = value

        # if our current value is equal to the answer increment otherwise decrement
        # what we're left with is the most common value
        if value == answer:
            count += 1
        else:
            count -= 1
            
    return answer
```

#### Complexity Analysis

- Time Complexity: $O(n)$
- Space Complexity: $O(1)$

---
### Approach 2 (Bitwise operations): 

- In this approach we use three bits to essentially iterate through each place in the three bit set. For instance, starting off we have the bit set `001` which represents one, we iterate over the other numbers checking for this bit set using the `&` operator. If we get the same bit set then we increment our counter, otherwise, we get a value of 0 or `000` and keep iterating. If our count is less than half of the total elements then we know we have to shift the set to left to check for the other possible values, which would now be checking for `010` , which is the value of 2. In this iteration, the current bit would be `2`, the current bit value would be `2` and the total count would be `5`, since this is greater than `n/2` we can update the answer to the value `2`.  
#### Implementation

```python
def majorityElement(array):
    answer = 0
    for currentBit in range(32):  # Iterate through each bit (assuming 32-bit integers)
        currentBitValue = 1 << currentBit  # Create a bitmask for the current bit
        onesCount = 0
        for num in array:
            if (num & currentBitValue) != 0:  # Check if the current bit is set in the number
                onesCount += 1
        if onesCount > len(array) / 2:  # If this bit is set in majority of elements
            answer += currentBitValue  # Set this bit in the answer

    return answer
```

#### Complexity Analysis

- Time Complexity: $O(n)$ — since the total number of bits in an int is 32, our worst possible runtime would be 32 x n , which would still equate to a runtime of $O(n)$
- Space Complexity: $O(1)$

---
