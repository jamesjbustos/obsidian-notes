Date: 2024-07-18

**Problem**
- Starts from the left and checks for the smallest number. Once the smallest number is found it swaps it to a sublist to the leftmost of the input array. 
	 ![[Screenshot 2024-07-18 at 12.19.26 PM.png]]
- Time Complexity: $O(1)$
- Space Complexity: $O(1)$
**Solution**
```python
def selectionSort(array):
    currentIdx = 0
    while currentIdx < len(array) - 1:
        smallestIdx = currentIdx
        for i in range (currentIdx + 1, len(array)):
            if array[smallestIdx] > array[i]:
                smallestIdx = i
        swap(currentIdx, smallestIdx, array)
        currentIdx += 1
    return array
    
def swap(i, j, array):
    array[i], array[j] = array[j], array[i]
```

- In this solution we first declare a variable called `currentIdx` which will be the index needed for the swap. To start our iteration we create a while loop that terminates when it currentIdx has reached the end of the input array. In the while loop we define a smallestIdx variable to keep track of the smallest number. The way this solution works is that we set two indices at the same spot and begin comparing each value to smallestIdx. If the current index is smaller than the smallestIdx than we set the smallest index to the `i` index. In regular terms we start at the same spot in the input array, then we iterate through the array comparing smallestIdx to the live iteration of the input array, if we run into a number that is smaller than the smallestIdx we started with, we swap the values and move the currentIdx on spot over. while also resetting the smallestIdx back to the same starting point. 