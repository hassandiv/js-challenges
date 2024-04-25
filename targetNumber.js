function twoSum(nums, target) {
	const numIndexMap = { 2: 0, 7: 1 };
	// Step 1: Populate the hash table with numbers and their indices
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];
		console.log(
			"isUndefined",
			numIndexMap[complement] //1
		);
		if (numIndexMap[complement] !== undefined) {
			console.log("return", [numIndexMap[complement], i]);
			return [numIndexMap[complement], i];
		}
		numIndexMap[nums[i]] = i;
	}
	// Step 2: If no valid answer exists, return an empty array
	return [];
}
// Example usage:
const integers = [2, 7, 10, 11];
console.log("output", twoSum(integers, 17));
