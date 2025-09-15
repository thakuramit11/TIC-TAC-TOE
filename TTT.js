// let main = document.querySelector(".main")
let gameContainer = document.querySelector(".game")
let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn")
let container = document.querySelectorAll(".msg-container hide")
let hide = document.querySelector(".hide")
let newbtn = document.querySelector("#newgame") 
let resetbtn = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg")
let turnO = true;



const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    hide.classList.add("hide")
    msg.classList.add("hide");
    newbtn.classList.add("hide")
  }

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if (turnO) {box.innerText = "X"
       turnO = false;

       }else{
        box.innerText = "O"
        turnO = true;
       }
    box.disabled= true
    checkWinner(); 
    });
}) ;

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
        }
}
 
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `congrates ${winner} is winner` ;
    hide.classList.remove("hide")
    msg.classList.remove("hide");
    newbtn.classList.remove("hide")
    disableBoxes();
    boxes.innerText = "";
}

                                                                        
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val !="" && pos3Val !="") {
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos3Val); 
                
                
            }
        }
    }
}


newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);







