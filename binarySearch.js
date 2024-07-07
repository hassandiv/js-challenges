// Basic Binary Search:

// Question: "Implement a function that takes a sorted array and a target value, and returns the index of the target value if it exists in the array, or -1 if it does not."
// Example: Given arr = [-5, 2, 4, 6, 10] and target = 4, return 2.

function binarySearch(arr, target) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1; //6

	while (leftIndex <= rightIndex) {
		console.log("check0");
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2); //3 //4
		if (target === arr[middleIndex]) {
			console.log("check1");
			return middleIndex;
		}
		if (target < arr[middleIndex]) {
			rightIndex = middleIndex - 1;
			console.log("check2");
		} else {
			leftIndex = middleIndex + 1;
		}
	}

	return -1;
}
// console.log(binarySearch([1, 3, 6, 7, 4, 9, 10], 4));
// console.log(binarySearch([1, 3, 6, 7, 4, 9, 10], 9));
// console.log(binarySearch([1, 3, 6, 7, 4, 9, 10], 11));

console.log(binarySearch([-5, 2, 4, 6, 10], 4));
console.log(binarySearch([-5, 2, 4, 6, 10], 2));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
