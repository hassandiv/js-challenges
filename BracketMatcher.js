//Input: "(coder)(byte))"
//Output: 0
//Input: "(c(oder)) b(yte)"
//Output: 1
function BracketMatcher(str) {
	// should return 1 if brackets are opened and closed correctly
	// should return 1 if brackets contains double quotes inside it
	// should return 1 if no brackets at all
	// should return 0 if brackets are opened and not closed correctly
	let open = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") open++;
		if (str[i] === ")") open--;
		if (open < 0) return 0;
	}
	return open ? 0 : 1;
}
// keep this function call here
const input1 = "(coder)(byte))";
const input2 = "(c(oder)) b(yte)";
console.log(BracketMatcher(input2));
