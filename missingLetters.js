function fearNoLetters(string) {
	let letters = "";

	for (let i = 0; i < string.length; i++) {
		if (!letters.includes(string[i])) {
			const currentLetterCode = string.charCodeAt(i);
			const nextLetterCode = string.charCodeAt(i + 1);
			if (nextLetterCode - currentLetterCode !== 1) {
				letters += string[i];
				letters += String.fromCharCode(currentLetterCode + 1);
			} else {
				letters += string[i];
			}
		}
	}
	return letters;
}
console.log(fearNoLetters("abdegi"));
