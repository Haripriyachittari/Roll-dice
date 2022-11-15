let results= document.getElementById('result');
let player1Dice= document.getElementById('player1dice');
let player2Dice= document.getElementById('player2dice');
let playerOneDice;
let  playerTwoDice;

function roll()
{

    let diceOne=Math.floor((Math.random()*6)+1);
    let diceTwo=Math.floor((Math.random()*6)+1);

     playerOneDice="dice"+diceOne+".png";
     playerTwoDice="dice"+diceTwo+".png";

    player1Dice.setAttribute('src',playerOneDice);
    player2Dice.setAttribute('src',playerTwoDice)

    if(diceOne===diceTwo)
    {
      results.textContent="It's a Draw";
    }
    else if(diceOne>diceTwo)
    {
        results.textContent="Player 1 Won, Yay!!!";
    }
    else{
        results.textContent="Player 2 Won, Yay!!!";
    }
}

function reset(){
    player1Dice.setAttribute('src',"dice1.png");
    player2Dice.setAttribute('src',"dice1.png");
    results.textContent="New game";
}

