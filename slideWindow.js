// Example Problem: Maximum Sum Subarray of Size K
// Question:
// "Given an array of integers and a number k, find the maximum sum of a subarray of size k."

// Example:
// Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9 (The subarray with maximum sum is [5, 1, 3])
// Solution:
// To solve this problem, we can use the sliding window technique. We will maintain a window of size k and slide it from the beginning of the array to the end, keeping track of the maximum sum encountered.

function maxSumSubarray(arr, k) {
	if (arr.length < k) return null;

	let maxSum = 0; //8
	let windowSum = 0; //8

	for (let i = 0; i < k; i++) {
		maxSum += arr[i];
	}

	windowSum = maxSum; //9

	for (let i = k; i < arr.length; i++) {
		windowSum += arr[i] - arr[i - k];
		maxSum = Math.max(maxSum, windowSum);
	}

	return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
console.log(maxSumSubarray([2, 3, 4, 1, 5], 2)); // Output: 7
