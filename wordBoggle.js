// Given dictionary
const dictionary = ["GEEKS", "FOR", "QUIZ", "GO"];
const M = 3,
	N = 3;

// Check if a given string is present in the dictionary
function isWord(str) {
	return dictionary.includes(str);
}

// Recursive function to find words on the Boggle board
function findWordsUtil(boggle, visited, i, j, str) {
	visited[i][j] = true;
	str += boggle[i][j];

	if (isWord(str)) {
		console.log(str);
	}

	for (let row = i - 1; row <= i + 1 && row < M; row++) {
		for (let col = j - 1; col <= j + 1 && col < N; col++) {
			if (row >= 0 && col >= 0 && !visited[row][col]) {
				findWordsUtil(boggle, visited, row, col, str);
			}
		}
	}

	visited[i][j] = false;
}

// Find words on the Boggle board
function findWords(boggle) {
	const visited = Array.from(Array(M), () => new Array(N).fill(false));

	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			findWordsUtil(boggle, visited, i, j, "");
		}
	}
}

// Boggle board
const boggle = [
	["G", "I", "Z"],
	["U", "E", "K"],
	["Q", "S", "E"],
];

console.log("Following words of dictionary are present:");
findWords(boggle);
