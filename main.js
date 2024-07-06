//window.onload has been red on time by the script and it wait and paust our js code below until window/html has been rendered/generated
window.onload = function () {
	//pause until the document has been generated then react the function () {//my code}
	document.querySelector("h1").style.color = "green";
	const hello = 1000 * 90;
	const func = () => 1000 * 90;

	console.log("Log");
	console.error("Log error");
	console.warn("Log warn");
	console.table(["Osama", "Ahmed", "Sara"]);

	/*
  styling console
  Directive %c
  this will target a spacific text in our string in the console log and we can apply styling to it
  */
	console.log(
		"Hello from %cmy js %cfile",
		"color: red; font-size: 40px",
		"color: blue; font-size: 40px"
	);

	/* Ecma Script ES5 vs ES6 ...etc
  Ecma script sets some standardization for writing JavaScript code. For example they have legacy codes for writing JS in ES5 vs ES6 
  */
	const myName = "Hassan";
	const ES5Name = "Hello" + myName; //concatenation
	const ES6Name = `Hello  ${myName}`; //template literals

	//ES5
	var obj1 = { a: 1, b: 2 };
	var obj2 = { a: 2, c: 3, d: 4 };
	var obj3 = Object.assign(obj1, obj2); //Object assign

	//ES6
	const obja = { a: 1, b: 2 };
	const objb = { a: 2, c: 3, d: 4 };
	const objc = { ...obja, ...objb }; //Spread operator
};
