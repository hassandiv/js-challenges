function uniteUnique(arr) {
	//const toArray = Array.from(arguments);
	//or
	const toArray = [...arguments].flat();
	// above output before flat is [ [ 1, 2, 3 ], [ 4, 3, 2 ], [ 90, 9, 12 ] ]
	// after flat[1, 2, 3, 4, 3, 2, 90, 9, 12]

	let array = [];

	//Solution A
	const uniqueArray = new Set(toArray);
	for (let n of uniqueArray) {
		array.push(n);
	}

	//Solution B
	// for (let i = 0; i < toArray.length; i++) {
	// 	if (!array.includes(toArray[i])) {
	// 		// array[i] = toArray[i]; //this is also refrence the non existing [ 1, 2, 3, 4, <2 empty items>, 90, 9, 12 ]numbers
	// 		console.log("toArray[i]", toArray[i]);
	// 		array.push(toArray[i]);
	// 	}
	// }

	console.log("array", array);
	return array;
}
uniteUnique([1, 2, 3], [4, 3, 2], [90, 9, 12]);
