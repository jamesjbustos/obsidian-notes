- **List are mutable, strings are not.** 
	- If you need to create a new string it would be wise to use a list and simply join the values at the end
	- if using strings it can sometimes cause a time complexity of $O(N^2)$ . Therefore its wise to not use it. 
	- `string = '' string += "4A" #DO NOT USE THIS SOLUTION` 
- **Sets are an easy to way extract the unique values from a data type**
- ![[Pasted image 20240725131337.png]]

## Coding question method

### UPCRIP

- **U**nderstand the Problem
- **B**reak Down the Problem
- **C**onsider Approaches
- **P**seudocode
- **I**mplement
- **R**eview

### Detailed Steps with UPCRIP:

1. **Understand the Problem (U):**
   - Read the problem statement carefully.
   - Identify the inputs and outputs.
   - Clarify any ambiguities.

2. **Break Down the Problem (B):**
   - Divide the problem into smaller, manageable parts.
   - Identify key tasks that need to be accomplished.

3. **Consider Approaches (C):**
   - Think about possible solutions.
   - Evaluate the efficiency and feasibility of each approach.
   - Select the most appropriate one.

4. **Pseudocode (P):**
   - Outline the logic using pseudocode.
   - Focus on the steps and flow without worrying about syntax.

5. **Implement (I):**
   - Translate pseudocode into actual code.
   - Write in small, testable chunks.

6. **Review (R):**
   - Test the code with sample inputs.
   - Consider edge cases and boundary conditions.
   - Debug and optimize as necessary.

### Example Using UPCRIP:

1. **U: Understand the Problem**
   - Move all instances of a specific element to the end of an array.

2. **B: Break Down the Problem**
   - Use two pointers to traverse the array.
   - Swap elements as necessary.

3. **C: Consider Approaches**
   - Using two pointers: left pointer at the beginning, right pointer at the end.
   - Swap elements and move pointers towards each other.

4. **P: Pseudocode**
   ```
   function moveElementToEnd(array, toMove):
       initialize leftIdx to 0
       initialize rightIdx to len(array) - 1
       
       while leftIdx < rightIdx:
           while leftIdx < rightIdx and array[rightIdx] == toMove:
               decrement rightIdx
           
           if array[leftIdx] == toMove:
               swap array[leftIdx] and array[rightIdx]
           
           increment leftIdx
       
       return array
   ```

5. **I: Implement**
   ```python
   def moveElementToEnd(array, toMove):
       leftIdx = 0
       rightIdx = len(array) - 1

       while leftIdx < rightIdx:
           while leftIdx < rightIdx and array[rightIdx] == toMove:
               rightIdx -= 1
           
           if array[leftIdx] == toMove:
               array[leftIdx], array[rightIdx] = array[rightIdx], array[leftIdx]

           leftIdx += 1

       return array
   ```

6. **R: Review**
   - Test with various inputs.
   - Ensure edge cases are handled.
   - Optimize if necessary.


- When working with a problem sometimes it's good to go through mentally the brute force approach and using this you can identify any inefficiencies and improve upon it, as well as explaining to your interviewer why this solution is not optimal and what could be done different. 

- At times you're given important details in the question, details such as being able to mutate the input, or the maximum range is n. These details can give you an advantage when trying to find the most optimal solution. 