Date: 2024-07-17

**Problem**
Example: `[8,5,2,9,5,6,3]`
- Bubble sort iterates through the array by checking if the current number is greater than the number that follows it, if true we swap them otherwise move the index one. Once we finish iterating we determine if we made a swap or not, if true then we continue with another new iteration over the array and continue sorting. Otherwise, we went through the rest of the array without sorting again which means every number is in order. With each iteration the last number will always be in the correct order and won't have to be iterated over again for the next iteration.
	![[Screenshot 2024-07-17 at 6.36.57 PM.png]]

- Time Complexity: O(N^2)
- Space Complexity: O(1)
**Solution**
```python
def bubbleSort(array):
    isSorted = False
    counter = 0

    while not isSorted:
        isSorted = True
        for i in range(len(array) - 1 - counter):
            if array[i] > array[i + 1]:
                swap(i, i+1, array)
                isSorted = False
        counter+=1
    return array

def swap(i, j, array):
    array[i], array[j] = array[j], array[i]

```

- First we define an isSorted boolean to again determine if our array is sorted or not based on the condition that we iterated over the array with/without needing to swap.
- We kick off a while loop by assuming its not sorted, and start our loop to iterate over the input array
- if one of the values is greater than the value next to it we call our helper `swap` function and set isSorted to False. This is because we need to check again after doing our swap thus continuing the while loop. 
	- The `swap` function simply reverses the index and sets the variables for the array
- We also have a slight optimization factor which is called counter, which simply keeps track of the last variable since after an iteration of the array where values were swapped, the final value will always be in the correct order.
- Once we've completed iterated over the array and the if statement is no longer triggering then that means the all values swapped are now in the correct order and we can break out of the while loop since isSorted is never set to False again. 