//solve the palindrome

const Palindrome = (str) => {
	const isPalindrome = str.split("").reverse().join("");
	return str === isPalindrome;
};
const palindrome = Palindrome("HannaH");
console.log("palindrome", palindrome);

(function (str) {
	let reversed = "";
	console.log("let reversed", reversed);
	for (let x of str) {
		console.log("x", x);
		reversed = x + reversed;
		console.log("reversed", reversed);
	}
	console.log("reversed", reversed === str);
})("AbbA");
