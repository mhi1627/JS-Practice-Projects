

function startGame() {
    

let actulNumber = Math.floor(Math.random()*101);
let guessedNum = document.querySelector("#number");
let check = document.querySelector(".check");
let guesses = document.querySelector(".gueses");
let counter = 0;
let clutter = "";
let gueseResult = document.querySelector(".gueseResult");

check.addEventListener('click',() => {
    console.log(guessedNum.value);
    console.log(actulNumber);
    counter +=1 ;
    
    if (counter <= 10 && guessedNum.value != "") {
        clutter += guessedNum.value + ",";
        guesses.textContent = `Your Guesess : ${clutter}`
        
   if(actulNumber < guessedNum.value ) {
    gueseResult.textContent = `Too Long`
   }
   else if(actulNumber > guessedNum.value) {
    gueseResult.textContent = `Too Short`
   }

   else {
    gueseResult.textContent = `You Won! The Number Was ${actulNumber}`
   }
}
  else if (counter > 10 && guessedNum.value != ""){
    gueseResult.textContent = `Your Are Out Of Guess`
    
 }

 else {
    console.log("Please Enter Number To Start");
 }
    guessedNum.value = "";
})


document.querySelector('.startGame').addEventListener('click', () => {
    guesses.textContent = "";
    gueseResult.textContent = " ";
    counter = 0;
    clutter = "";
    guessedNum.value = ""
})
}

    startGame()