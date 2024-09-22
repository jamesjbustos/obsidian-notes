Date: 2024-07-29

## Problem
- You will be given an input array containing a list of integers. A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip, at which point they become strictly decreasing. At least three integers are required to form a peak.
## Examples
- `1, ,4, 10, 2` , this list forms a peak.
- `4, 0, 10`, this list does not form a peak
- `1, 2, 2, 0` this list does not form a peak due to not strictly increasing.
- `3, 4, 0` this list does form a peak
- We need at least three integers to form a peak
## Solution
- To solve this problem instead of intuitively iterating through the array simply counting the peaks as well as their lengths it would be best to iterate through the array left to right and for each element look at the left and right value, if the left and right values area strictly less than the current value then we know we've reached a peak. 
- After identifying all the peaks in the array, what we can do is see how long the peaks are and compare the lengths and return the longest one. We can start at the tips of these peaks and see how far out to the left and how far out to the right we can go until we've reach a no longer strictly decreasing number.
- Time complexity: $O(N)$ , The first iteration where we find the peaks requires us to go through each element, during our second iteration where we count the length of these peaks, there will be values that we will skip over since not all values can be considered a peak. Thus in total the worst possible time is O of N.
	- It's important to note that you can also combine these two tasks into one iteration.
- Space Complexity: $O(1)$ , at most we will need a variable to hold the current max length of each peak.

### Code
```python
# O(n) time | O(1) space
def longestPeak(array):
    # Store the length of the longest peak
    longestPeakLength = 0

    # Traverse through the array
    # We can skip the first element since a peak needs two adjacent elements
    i = 1

    # We can also skip the last element for the same reason
    while i < len(array) - 1:
        # if based on the current index its adjacent values are less than the current index
        # then isPeak is true, otherwise isPeak is false and we can continue iterating through the array `continue`
        isPeak = array[i - 1] < array[i] and array[i] > array[i+1]
        # continues to the next iteration in the while loop
        if not isPeak:
            i += 1
            continue

        # Since we already know the left element to the current index is less than we can go two indices down
        # on both sides.
        leftIdx = i - 2

        # Here we check that the current left index is still in bounds and if this index is less than the number to the right of it
        # we then shift the leftindex one more to the left and keep checking if the element to the right of it is greater than the current left index.
        while leftIdx >= 0 and array[leftIdx] < array[leftIdx + 1]:
            leftIdx -= 1

        # this is out right index which starts two places away as well
        rightIdx = i + 2

        # again, while the right index is still in bounds of the array and the element to the left of it is greater than the right index
        # then we can simply shift the index right and keep checking
        while rightIdx < len(array) and array[rightIdx] < array[rightIdx - 1]:
            rightIdx += 1

        # we minus one since the right index gets added one extra by the while loop
        currentPeakLength = rightIdx - leftIdx - 1
        # using the max function we can continously check for the max peak length
        longestPeakLength = max(longestPeakLength, currentPeakLength)

        # finally, we reset i to the edge of the current peak so we continue with the beginning of 
        # another potential peak
        i = rightIdx

	return longestPeakLength
```