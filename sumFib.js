function sumFibs(num) {
	const fibSequence = [1, 1, 2, 3, 5, 8];

	let result = 0;
	for (let i = 0; i < num; i++) {
		console.log(i);
		if (i < num) {
			result += fibSequence[i];
		}
	}

	return result;
}
console.log(sumFibs(10));
//this is not done yet
