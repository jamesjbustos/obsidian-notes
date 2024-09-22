Date: 2024-07-16

## Three largest solution

``` python
def findThreeLargestNumbers(array):
    threeLargest = [None, None, None]

    for num in array:
        updateLargest(threeLargest, num)
    return threeLargest
    
def updateLargest(threeLargest, num):
    if threeLargest[2] is None or num > threeLargest[2]:
        shiftAndUpdate(threeLargest, num, 2)
    elif threeLargest[1] is None or num > threeLargest[1]:
        shiftAndUpdate(threeLargest, num, 1)
    elif threeLargest[0] is None or num > threeLargest[0]:
        shiftAndUpdate(threeLargest, num, 0)

def shiftAndUpdate(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i+1]
```

- In this solution the following happens
	- We define a parent function that holds the `threeLargest` array. we initially define them as `None` since we will be iterating over the input array.
	- Next, we create a simple for loop that loops through the input array and calls a helper function called `udpateLargest`. 
		- `updateLargest` takes in the threeLargest array a number in the input array. As the name states this function updates the current largest number by checking every value in the threeLargest array. For instance lets say we run into the number 20, and we have the following values in threeLargest `[2, 6, 9]`. The first if statement will check if the position of 9 is none or if num (20) is greater than 9. Since this is true we shift and update. 
		- To accomplish this we use another helper function called `shiftAndUpdate`. This function takes in an array, num, and index (idx). We pass in the threeLargest variable, num, and the index respectively in this case 2 for the first if statement. The way it shifts and update when the if statement is triggered is that using the idx we can see which value is smaller then num. Using this we replace the value at idx with the new value num. Since we are iterating from 0 we also do the following `array[i] = array[i+1]`. Essentially what this does is update the least greatest value to the value next to it, until it reaches the desired index to where it is replaced by num.
	- Once, all these operations are done we end up with an array that hold the three largest number from least to greatest. 