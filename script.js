
//okay lets say i wanna create a r,p,s game
//whats the order of things i wanna do

//i wanna create funcs

//i wanna make all the buttons do smth
//i wanna make each button r,p,s
//go into a rock, paper and scissors


//okay then i need to create logic
//make the computer create a choice and then compare

//how many funcs do i need?

//1 func for getting the user choice

//1 func for getting the cpu choice

//1 func for keeping score

//that should be good?

//select buttons
let rock = document.querySelector(".rock-button");
let paper = document.querySelector(".paper-button");
let scissors = document.querySelector(".scissors-button");
let score = document.querySelector("#score");
let reset = document.querySelector(".reset-button");

//create and append results
let results = document.createElement("p");
score.appendChild(results);

//create a game constance
const game = createGame();


//attach event listners
rock.addEventListener("click", ()=>{
    game.playRound("rock");
});

paper.addEventListener("click", ()=>{
    game.playRound("paper")
});

scissors.addEventListener("click", ()=>{
    game.playRound("scissors")
});

reset.addEventListener("click", ()=>{
    game.reset();
})



function cpuChoice(){
    let options = ['rock', 'paper','scissors']

    //create randomizer

    //the math.floor bit gets a random number from 0 - 2
    return options[Math.floor(Math.random() * options.length)];

}


function createGame(){
    //create member variables that get updated
    let userScore = 0;
    let cpuScore = 0;
    let ties = 0;

    function playRound(userChoice){

        let cpu = cpuChoice();

        console.log(`You chose ${userChoice}`);
        console.log(`CPU chose ${cpu}`)

        if(userChoice === cpu){
            ties++;
            updateScore();
        } else {
            switch (userChoice) {
                case "rock":
                    if(cpu === "scissors"){
                        userScore++;
                        console.log("You won!")
                    }
                    if(cpu === "paper"){
                        cpuScore++;
                        console.log("You lost!")
                    }
                    break;
                case "paper":
                    if(cpu === "rock"){
                        userScore++;
                        console.log("You won!")
                    }
                    if(cpu === "scissors"){
                        cpuScore++;
                        console.log("You lost!")
                    }
                    break;
                case "scissors":
                    if(cpu === "paper"){
                        userScore++;
                        console.log("You won!")
                    }
                    if(cpu === "rock"){
                        cpuScore++;
                        console.log("You lost!")
                    }
                    break;

                default:
                    break;
                    
            }
            updateScore();
        }

        
    }

    function reset(){
        userScore = 0;
        cpuScore = 0;
        ties = 0;
        updateScore();
        enableButtons()
    }

    function updateScore(){
        if(userScore == 5){
            results.textContent = `You have won the duel!`
            disableButtons()
        } else if(cpuScore == 5){
            results.textContent = 'You have lost the duel'
            disableButtons()
        } else {
            results.textContent = `Wins ${userScore}, Losses ${cpuScore}, Ties ${ties}`;
        }
    }

    function disableButtons(){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    function enableButtons(){
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    }

    return{
        playRound,
        reset,
    };
}




