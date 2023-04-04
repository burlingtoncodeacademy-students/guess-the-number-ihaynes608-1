const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


start();






async function start() {
  let min = 1;
  let max = 100;

  console.log(
    "Let's play a game where you (human) make up a number and I (computer) try to guess it."
  );
  console.log(`Choose secret number between ${min} to ${max}`);
  
  let secretNumber = await ask(
    "What is your secret number?\nI won't peek, I promise...\n"
  );

  console.log("You entered: " + secretNumber);

  let gamerun = true;
  while (gamerun) {
    let center = Math.floor((max - min) / 2 + min);
    // asking questions to for the number
    let yesno = await ask(`Is your number ${center} y or n `);
    if ("y" == yesno) {

      if (secretNumber != center) {
        console.log("what a loser cheating is bad");
        continue;
      }
      console.log("Congrats you got it right");
      gamerun = false;
    } else if ("n" == yesno) {
      if (secretNumber == center) {
        console.log("what a loser cheating is bad");
        continue;
      }
      
      // asking higher or lower
      let higherorlower = await ask("Is it higher or lower ");
      if ("higher" == higherorlower && center > secretNumber) {
        console.log("Cheater Cheater ");
        continue;
      } 
      else if ("lower" == higherorlower && center < secretNumber) {
        console.log("Cheater Cheater");
        continue;
      }

      if ("higher" == higherorlower) {
        console.log("higher");
        min = center + 1;
}

else if ("lower" == higherorlower) {
        console.log("lower");
        max = center;
        console.log(`${max}`);
      }
    }
  }

  process.exit();
}
