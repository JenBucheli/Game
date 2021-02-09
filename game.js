const options=document.querySelectorAll(".option");
const score= document.getElementById("score");
const result=document.getElementById( "result");
const restart=document.getElementById("restart");
const scoreboard={
    player:0,
    computer:0
}

//play game
options.forEach(option =>option.addEventListener("click",function play (event) {
    //.target.id to select elements
    let playerChoice = event.target.id;
    let computer = computerChoice();

    let winner= findWinner(playerChoice,computer);
console.log(playerChoice,computer,winner)

//computer choice
    function computerChoice() {
        let choiceRandom = Math.floor((Math.random() * options.length))
        return document.getElementsById("#option")
    }

            //const rand = Math.random();
            //if (rand < 0.34) {
              //  return 'rock';
            //} else if (rand <= 0.67) {
               // return 'paper';
           // } else {
             //   return 'scissors';
            //}
        //}

//Find winner
    //a and b represent de playerChoice and Computer Choice, because I created the variable winner and inside the parenthesis I add to parameters.
    // function findWinner(a,b) {
    function findWinner() {

        if (playerChoice === computer) {
            return "draw";

        } else if (playerChoice === "rock") {
            if (computer === "paper" /*|| "spock"*/) {
                return "computer";
            } else {
                return "player";
            }

        } else if (playerChoice === "paper") {
            if (computer === "scissors" /*|| "lizard"*/) {
                return "computer";
            } else {
                return "player";
            }

        } else if (playerChoice === "scissors") {
            if (computer === "rock" /*|| "spock"*/) {
                return "computer";
            } else {
                return "player";
            }

        } //else if (playerChoice === "lizard") {
            //if (computer === "scissors" /*|| "rock"*/) {
              //  return "computer";
           // } else {
                //return "player";
           // }

       // } else if (playerChoice === "spock") {
        //    if (computer === "lizard" /*|| "paper"*/) {
          //      return "computer";
            //} else {
             //   return "player";
            //}
            //Event Listeners
        }
        //show result in screen
    //}
}))
