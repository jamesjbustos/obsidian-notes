Date: 2024-07-18

**Problem**
- Insertion starts from the left of the input array and swaps based on the value next to it. Unlike bubble it doesn't swap and move to the next index, it keeps going until the currently swapped number is less than all the values to the left of it. If a value is bigger than the number to the first number on the sorted left we can just move to the next index. 
- Time Complexity: $O(N^2)$
- Space Complexity: $O(1)$

**Solution**
```python
def insertionSort(array) :
    for i in range(1, len(array)):
        j = i
        while j > 0 and array[j] < array[j-1]:
            swap(j, j-1, array)
            j -= 1
    return array

def swap(i, j, array):
    array[i], array[j] = array[j], array[i]

```

- In this solution first we begin by iterating over the input array, starting from the second index (1). We set j = i so we can revert to the current index later on. If a number that we are iterating from in the input array is less than the number to the left of it than we can simply swap them and decrease the index of j. This mean that this while loop will keep going until the index reaches the first value or theres no more values that are less than it to the left. 
- We also define a helper function called swap which simply just swaps the index.