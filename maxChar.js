/* 
  32eddseew3
  #%he3#33ll#l#o
*/
//find the character that appears the most and total number of times it appears

const maxChar = (str) => {
	let obj = {};
	for (let x of str) {
		!obj[x] ? (obj[x] = 1) : obj[x]++;
	}
	console.log("obj", obj);
	console.log("obj", JSON.stringify(obj));

	let maxNum = 0;
	let maxChar = "";

	for (let char in obj) {
		if (obj[char] >= maxNum) {
			maxNum = obj[char];
			maxChar = char;
		}
	}
	console.log(`${maxChar} appears ${maxNum} times`);
};
maxChar("#%he3#33l3l#l#3xox");
