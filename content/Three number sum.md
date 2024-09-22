Date: 2024-07-25

**Problem**
- We need to find three numbers from an array that sum up to the target. There could be multiple triplets to achieve this.
**Solution** 
![[Screenshot 2024-07-25 at 1.03.49 PM.png]]
- To solve this problem we can create the following variables:
	- Current index to keep track of the current starting index
	- Left and right pointer
	- Array to hold the sums
- First we must sort the array
- Next, we can set the current index to the beginning and set the left and right pointer, the left pointer is one index ahead of the current index and the right pointer would be at the end
- The idea is that since the array is sorted we can adjust the pointers based on the sum. if the sum is too large then we can reduce the right pointer, or if its too small we can move the left pointer one to increase the sum. 
- Once we've reached a sum that equals the target we can move the left and right index at the same time. 
- If we reach a point where the pointers cross each other we can move the current index by one and reset the pointers.
- Time complexity would be O(N^2), since we are iterating through the array multiple times in one iteration. 
	- O(n log n) is the cost of sorting the array but since O(N^2) is greater in terms of complexity then we can just conclude on the worst possible time. 
- Space complexity would be O(N) since we could end up storing all the numbers. Well by bounded by O of n space. 
- Its important to start the outer loop with the length of array minus 2. we do this because eventually the current index is going to reach the third element from the end of the array and the left and right pointers will follow to the end of that array. We need triplets so this is a way to still have enough elements to form a valid triplet. 
