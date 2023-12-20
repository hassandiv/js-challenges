/*
Reverse string
example: 
apple => "elppa"
greetings => "sgniteerg"
*/

/* Solution 1
1 - given string - convert into array
2 - reverse the array
3 - turn the array back into string
*/

const revString = (str) => {
	return str.split("").reverse().join("");
};

const result = revString("Greetings!");

console.log("result", result);

/* Solution 2
1 - given string - create empty string
2 - loop through each character
3 - return the reversed
*/

(function (str) {
	let reversed = "";
	for (let character of str) {
		reversed = character + reversed;
	}
	console.log({
		reversed_value: reversed,
	});
})("Greetings!");
