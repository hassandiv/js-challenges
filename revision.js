//ES6 - convert object to array
const arguments = { a: [1, 2, 3], b: [5, 6, 7], c: [0, 9, 8] };
//usually used in a function with multiple array as argument example function([1, 2, 3], [5, 6, 7], [0, 9, 8])
//in this case we can console.log arguments porperty directly, even if it is not the parameter used in the function.
// console.log("arguments", arguments);
const array = [...arguments["a"], ...arguments["b"], ...arguments["c"]];

//Array VS Object VS String

//Array:
//Presented by indexs
//for loop 'in' represents the index number in array
//for loop 'of' represents the value in array

//Object
//Presented by keys
//for loop 'in' represents the key/property name/id in object

//String
//Presented by indexs
//for loop 'in' represents the index number in string
//for loop 'of' represents the value in string

//simple example arra[index] will return the element regardless if element is a string, or number or object
const arrayExample = [1, "hassan", { age: 38 }, [1, 2, 3]];
//arrayExample[0] = 1, arrayExample[1] = hassan,  arrayExample[2] = { age: 38 }, arrayExample[3] = [1, 2, 3],

//simple example objs[key] will return value of a key regardless if value is a string, or number or object
const objectExample = { a: [1, 2, 3], 15: "hassan", c: { age: 38 } };
//objectExample[a] = [1, 2, 3], objectExample[15] = hassan,  objectExample[c] = { age: 38 },

//Object loop difference between "of" and "in"
// Using for...of loop
for (const [key, value] of Object.entries(arguments)) {
	//console.log(`${key} ${value}`); // "a 1,2,3", "b 5,6,7", "c 0,9,8"
}

// Using array methods
Object.entries(arguments).forEach(([key, value]) => {
	//console.log(`${key} ${value}`); // "a 1,2,3", "b 5,6,7", "c 0,9,8"
});

//'in' exmaple represents the key/property name/id in object
for (let x in arguments) {
	// Example Explained
	// The for in loop iterates over a arguments object
	// Each iteration returns a key (x)
	// The key is used to access the value of the key
	// The value of the key is arguments[x]
	//console.log("x", x); //ouput is keys a,b,c
	//console.log("values", arguments[x]); //ouput is values of each key
}

//below same as above example
for (const [key] in arguments) {
	//console.log("key", key); //ouput is keys a,b,c
}

// UNIQUE example using for...in loop returns the indexs of the keys
for (const key in Object.entries(arguments)) {
	//console.log(`${key}`); // "0", "1", "2"
}

//Array loop difference between "of" and "in"
//"of" represents the value of each element in the array example below 45, 4, 9, 16, 25
const numbersA = [45, 4, 9, 16, 25];
for (let x of numbersA) {
	//console.log("value of each element", x); //ouput 45, 4, 9, 16, 25
}

//"in" represents the index number of each element in the array example below 0, 1, 2, 3, 4
const numbersB = [45, 4, 9, 16, 25];
for (let x in numbersB) {
	//console.log("index number of each element", x); //ouput 0, 1, 2, 3, 4
}
//However:
// Do not use "in" over an Array if the index order is important.
// The index order is implementation-dependent, and array values may not be accessed in the order you expect.
// It is better to use a for loop, a for "of" loop, or Array.forEach() when the order is important.

//Strings loop difference between "of" and "in"
//"of" represents the value of each character in the string example below J, a, v, a, S ...etc case senstive
const stringA = "JavaScript";
for (let x of stringA) {
	//console.log("value of each character", x); //ouput J, a, v, a, S
}

//"in" represents the index number of each character in the string example below 0, 1, 2, 3, 4
const stringB = "JavaScript";
for (let x in stringB) {
	//console.log("index number of each character", x); //ouput 0, 1, 2, 3, 4, 5, 6 ...etc
}

//Example 1 String and Object
const alpha = "abcd";
let output1 = "";
const object = { a: "hassan", b: "hussien", c: "mody", v: "kk" };
let output2 = 0;
const objectNum = { a: 10, b: 20, c: 30, v: 40 };

for (let char of alpha) {
	if (char in object) {
		output1 += object[char];
		//output1 = output1 + object[char];
	}
	if (char in objectNum) {
		output2 += objectNum[char];
		//output2 = output2 + objectNum[char];
	}
	// else {
	// 	console.log(char in object, object[char]);
	// }
}
console.log("output example 1", output1, output2);

//Example 2 String and Object
const words = "I am h and i am a s e";
let output = "";
const objectWords = { h: "hassan", s: "software", e: "engineer" };

for (let char of words) {
	output += char in objectWords ? objectWords[char] : char;
	//using only equal operator output = char will display the last value because it will override the previous values
	// if (char in objectWords) {
	// 	output += objectWords[char];
	// } else {
	// 	output += char;
	// }
}
console.log("output example 2", output);

//symbols operators
// Examples:
// The Assignment Operator = assigns values
// The Addition Operator + adds values
// The Multiplication Operator * multiplies values
// The Comparison Operator > compares values

// Operator	Description
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// Operator	Example	Same As
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

let x = 5;
let y = 10;

let c = (x += y); //c = x + y usually used like this x = x + y or x += y
//console.log("c", c);

y = x; //assign value of x to y using = operator
//console.log("y", y);
