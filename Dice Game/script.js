
function throwDice() {

let random = Math.floor(Math.random()*6);
console.log(random);
let player1 = document.querySelector('.player1')
player1.innerHTML = ` <h4>Player 1</h4>
                    <img src="img/dice${random+1}.png" alt="">`;

let random2 = Math.floor(Math.random()*6);
console.log(random);
let player2 = document.querySelector('.player2')
player2.innerHTML = ` <h4>Player 2</h4>
                    <img src="img/dice${random2+1}.png" alt="">`

    if(random>random2){
        document.querySelector('#winner').textContent = "Player 1 Wins !"
    }

    else if (random<random2) {
        document.querySelector('#winner').textContent = "Player 2 Wins !"
    }
    else {
        document.querySelector('#winner').textContent = "It's a Draw !"
    }

}

document.querySelector('.play').addEventListener('click', () => {
    throwDice()
})