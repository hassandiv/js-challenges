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
		windowSum += arr[i];
	}

	maxSum = windowSum;

	for (let i = k; i < arr.length; i++) {
		windowSum += arr[i] - arr[i - k];
		console.log("windowSum", windowSum);
		maxSum = Math.max(maxSum, windowSum);
	}

	return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 9
// console.log(maxSumSubarray([2, 3, 4, 1, 5], 2)); // Output: 7

// function minSumSubarray(arr, k) {
// 	if (arr.length < k) return null;

// 	let minSum = 0;
// 	let windowSum = 0;

// 	for (let i = 0; i < k; i++) {
// 		windowSum += arr[i];
// 	}

// 	minSum = windowSum;

// 	for (let i = k; i < arr.length; i++) {
// 		windowSum += arr[i] - arr[i - k];
// 		minSum = Math.min(minSum, windowSum);
// 	}

// 	return minSum;
// }

// console.log(minSumSubarray([2, 1, 5, 1, 3, 2], 3)); // Output: 6
// console.log(minSumSubarray([2, 3, 4, 1, 5], 2)); // Output: 5
