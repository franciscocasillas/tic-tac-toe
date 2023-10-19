let player = "user";
const squares = document.querySelectorAll(".square");
squares.forEach(function (square) {
	square.addEventListener("click", userPicksABox);
});
let tiedGames = 0;

function userPicksABox(event) {
	const clickedSquareId = event.target.id;
	const square = document.getElementById(clickedSquareId);
	changeSquareColor(square);
	addTickedClass(square);
	checkForGame();
}

function changeSquareColor(square) {
	if (player === "user") {
		square.style.backgroundColor = "green";
	}
}

function addTickedClass(square) {
	if (player === "user") {
		square.classList.add("tickedByUser");
		square.classList.add("ticked");
	}
}

function checkForGame() {
	let tickedSquares = 0;
	squares.forEach(function (square) {
		if (square.classList.contains("ticked")) {
			tickedSquares += 1;
		}
	});
	console.log(tickedSquares);
	if (tickedSquares === 9) {
		tiedGames += 1;
		document.getElementById("tiedGames").innerText = tiedGames;
	}
}
