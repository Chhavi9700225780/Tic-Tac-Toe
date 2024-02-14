let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#rbtn");
let turnO = true;
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-con");
let msg = document.querySelector("msg");

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};




boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        console.log("box was clicked");
     if(turnO){
        box.innerText = "O";
        turnO= false;  
       }
       else{
        box.innerText="X";
        turnO = true;
       }
       box.disabled=true;
       checkwinner();
    });
});
     const showWinner = (winner) => {
        msg.innerText = `Congratulations Winner is ${winner}`;
        msgContainer.classListremove("hide");
        disableBoxes();
     };

    const disableBoxes = () => {
        for( let box of boxes){
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for( let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };



    const checkwinner=() =>{
    for (let patterns of winpatterns) {
        //  console.log(patterns[0] , patterns[1], patterns[2]);
        //  console.log(boxes[patterns[0]].innerText ,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText);
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
            }
        }
    }
};
 newbtn.addEventListener("click" , resetGame);
 rbtn.addEventListener("click" , resetGame);

