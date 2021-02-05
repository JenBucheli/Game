const options=document.querySelectorAll(".option");
const score= document.getElementById("score");
const result=document.getElementById( "result");
const restart=document.getElementById("restart");
const scoreboard={
    player:0,
    computer:0
}

//play game
function play(event){
    //.target.id to select elements
    let playerChoice =event.target.id;
    let computer=computerChoice();

}
//computer choice
function computerChoice(){
    let choice= Math.floor((Math.random()*options.length))
    return computerChoice(choice)
}
//Find winner
function findwinner(){

    if (p === c) {
        return "draw";

    } else if (p === "rock") {
        if (c === "paper"||"spock") {
            return "computer";
        } else {
            return "player";
        }

    } else if (p === "paper") {
        if (c === "scissors"||"lizard") {
            return "computer";
        } else {
            return "player";
        }

    } else if (p === "scissors") {
        if (c === "rock"||"spock") {
            return "computer";
        } else {
            return "player";
        }

    } else if(p==="lizard"){
        if(c==="scissors"||"rock"){
            return "computer";
        }else{
            return "player";
        }

    } else if(p==="spock"){
        if(c==="lizard"||"paper"){
            return "computer";
        }else {
            return "player";
        }
    }
}

//Event Listeners
options.forEach(option =>option.addEventListener("click",play));
