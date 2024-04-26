function TreeConstructor(strArr) {
	//1. parent must have max 2 children. parents = {parent: [child, child]}
	//2. each child must have max 1 parent. children = {child: parent}

	let parents = {};
	let children = {};

	for (let i = 0; i < strArr.length; i++) {
		//"(1,2)" => ["1", "2"]
		let pair = strArr[i].replace(/[()]/g, "").split(",");
		let parent = pair[1];
		let child = pair[0];

		if (parents[parent]) {
			parents[parent].push(child);
		} else {
			parents[parent] = [child];
		}

		if (parents[parent].length > 2) {
			return false;
		}

		if (children[child]) {
			return false;
		} else {
			children[child] = parent;
		}
	}
	return true;
}

// keep this function call here
//   Input1: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true
// Input2: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false
console.log(TreeConstructor(Input1));
