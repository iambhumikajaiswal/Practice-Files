let gameSeq= [];
let userSeq= [];

// let btns = document.querySelector("div")
let btns= ["blue" ,"red", "yellow", "green"]

let started= false;
let level = 0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started== false){
        console.log("Game started")
        started= true;

        levelUp();
    }
    //  console.log("Game started")
    // if (started== false){}
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },75);
}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },75);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let ranIdx = Math.floor(Math.random()* 3)
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`)
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranbtn);

    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFlash(ranbtn);
}

function checkAns(idx){
    // console.log("current level:", level);
    // let idx= level-1

    if (userSeq[idx]== gameSeq[idx]){
        // console.log("same value")
        if (userSeq.length == gameSeq.length){
           setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start`; 
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress (){
    let btn= this;
    // console.log(this)
    userFlash(btn);

    userColor= btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn")

for (btn of allBtns){
    btn.addEventListener("click", btnPress)
}


function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level= 0;
}