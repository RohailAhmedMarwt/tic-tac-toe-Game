let boxes = document.querySelectorAll(".box");
let resetGamebtn = document.querySelector(".reset");
let newGamebtn = document.querySelector(".Newgame");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnO = true; // playerO , playerX
let count = 0; // Tracks the number of moves

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked!");
        if (turnO === true) {
            box.innerText = "O";
            box.classList.add("player-o");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("player-x");
            turnO = true;
        }
        box.disabled = true;
        count++; // Increment the move counter

        cheakWinner();
    });
});

let resetGame = () => {
    turnO = true;
    count = 0; // Reset the move counter
    enableBoxes();
    msgcontainer.classList.add("hide");
};

let showWinner = (winner) => {
    if (message && msgcontainer) {
        message.innerText = `Congratulations! Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
    } else {
        console.error("msg-container or message element is missing in the DOM.");
    }
};

let disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

let enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("player-x", "player-o");
    }
};

let cheakWinner = () => {
    let hasWinner = false;

    for (let Patterns of winPatterns) {
        let pos1Val = boxes[Patterns[0]].innerText;
        let pos2Val = boxes[Patterns[1]].innerText;
        let pos3Val = boxes[Patterns[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                disableBoxes();
                hasWinner = true;
                return; // Stop checking once we find a winner
            }
        }
    }

    // Check for a draw
    if (count === 9 && !hasWinner) {
        console.log("Game is a Draw!");
        message.innerText = "It's a Draw!Play Again";
        msgcontainer.classList.remove("hide");
       l("Scroll down to review")
    }
};

newGamebtn.addEventListener("click", resetGame);
resetGamebtn.addEventListener("click", resetGame);
