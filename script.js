let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let btns=["yellow","orange","purple","pink"];

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if (started==false){

        started = true;
        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;

    let rdxidx=Math.floor(Math.random()*3);
    let rdmcolor=btns[rdxidx];
    let btnrdm= document.querySelector(`.${rdmcolor}`);
    console.log(rdxidx);
    btnFlash(btnrdm);
    gameSeq.push(rdmcolor);
}

function check(idx){

    
    if (userSeq[idx]==gameSeq[idx]){
        if (userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000) ;
        }
        console.log('same')
    }
    else{
        h2.innerHTML=`Game Over.Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    btnFlash(btn);

    useColor = btn.getAttribute("id")
    userSeq.push(useColor);
    check(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
    
}

function reset(){
     started=false;
     userSeq=[];
    gameSeq=[];
     level=0;
}