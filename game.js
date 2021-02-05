const options=document.querySelectorAll("option");
const score= document.getElementById("score");
const result=document.getElementById( "result");
const restart=document.getElementById("restart");
const scoreboard={
    player:0,
    computer:0
}


//Find winner
function computerChoice(){
    const random=Math.random(p,c);
    if (p===c){
        return "draw";
    } else if (p==="rock")
        if(c==="paper"){
            return "computer";
        } else return "player";
    }
}

