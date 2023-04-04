const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function randomNum(min, max) {
  let range = max - min + 1;

  return Math.floor(Math.random() * range) + min;
}



start();


async function start(){
  let min = 1;
  let max = 100;    
  console.log("Let's play a game where I (computer) make up a number and you (human) try to guess it.")
  let userGuess = 0
  let hiddenNumber = randomNum(1, 100)
  // console.log(`${randomNum}`)
  console.log(hiddenNumber)
  let startGame = true
  while (startGame){
    userGuess = await ask("Guess what my number is NOW!")
    // console.log(hiddenNumber)
    // console.log(userGuess)
    if (hiddenNumber == userGuess){
      console.log("That is the correct number");
      startGame = false;
      break
    }

    // computer will tell you if your guess was too high or too low
    // if your guess was too high, computer tells you as such
    if (hiddenNumber > userGuess){
      console.log("you guessed too low try again")
    } else {
      console.log("you guessed too high try again")
    }
  }
  process.exit();
}


