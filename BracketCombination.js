// function BracketCombinations(num) {
// 	let comb = [];
// 	let parenthesis = "()";
// 	let final = "";
// 	for (let i = 1; i <= num; i++) {
// 		const totalP = parenthesis.repeat(i);
// 		comb.push(totalP);
// 		//comb[num - 1];
// 		//or
// 		final = comb.splice(0, num)[0];
// 	}
// 	console.log(final);
// 	//return comb; // Return the array of combinations instead of num
// }
// // keep this function call here
// console.log(BracketCombinations(readline()));

function BracketCombinations(num) {
	let factorial = (n) => {
		let k = 1;
		for (var i = n; i >= 1; i--) {
			k *= i;
		}
		return k;
	};

	// formula going down
	const result = factorial(2 * num) / (factorial(num + 1) * factorial(num));
	return result;
}
// keep this function call here
console.log(BracketCombinations(readline()));
