let btnRef = document.querySelectorAll(".btn-option");
let msgRef = document.getElementById("message");
let resetBtn = document.getElementById("reset");

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const enableButtons = () => {
    btnRef.forEach((element) => {
        element.disabled = false
        element.innerText = "";
    });
    
  }
  const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
  };
  
  const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = 'Match Draw';
  }
  const showWinner = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = 'X wins';
    } else {
        msgRef.innerHTML = "O wins";
    }
  }
  const winnerChecker = ()=>{
    for (let i of winningPattern) {
        let[e1, e2, e3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText, 
        ];
        if (e1 != "" && (e2 != "") & (e3 != "")) {
            if(e1 == e2 && e2 ==  e3){
                showWinner(e1)
            }
        }

    }
}

let playerXTurn = true;
let count = 0;

resetBtn.addEventListener("click", () => {
    msgRef.innerHTML = '';
    enableButtons();
    count = 0;
});

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (playerXTurn) {
            playerXTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            playerXTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        winnerChecker();
    });
});