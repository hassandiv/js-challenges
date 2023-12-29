function MissingDigit(str) {
	let x = 0;
	let temp = str.replace("x", x);
	let arr = temp.split(" = ");

	const evaluateExpression = new Function([], `return ${arr[0]};`);

	while (evaluateExpression() !== eval(arr[1])) {
		x++;
		temp = str.replace("x", x);
		arr = temp.split(" = ");
	}

	return x;
}

console.log("MissingDigit", MissingDigit("1x0 * 12 = 1200"));
