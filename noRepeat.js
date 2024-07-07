function noRepeat(string) {
	let unique = "";
	for (let char of string) {
		if (!unique.includes(char)) {
			unique += char;
		}
	}
	if (unique.length === 1) {
		return 0;
	}
	return unique.length;
}
console.log(noRepeat("aaaaazaa"));
