// let cards = [];
// let sum = 0;
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-el");
// let sumEL = document.getElementById("sum-el");
// let cardsEL = document.getElementById("cards-el");

// let player = {
//     name : "shakthi",
//     chips : 145
// }
// let playerEl = document.getElementById("player-el");

// playerEl.textContent = player.name + ": $" + player.chips

// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   if (randomNumber > 10) {
//     return 10;
//   } else if (randomNumber === 1) {
//     return 11;
//   } else {
//     return randomNumber;
//   }
// }

// function startGame() {
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards = [firstCard, secondCard];
//   sum = firstCard + secondCard;
//   renderGame();
// }

// function renderGame() {
//   cardsEL.textContent = "Cards : ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEL.textContent += cards[i] + " ";
//   }

//   sumEL.innerText = "Sum : " + sum;
//   if (sum <= 20) {
//     message = "Do u want to draw a card";
//   } else if (sum === 21) {
//     message = "whoo!, you got a blackjack";
//     hasBlackJack = true;
//   } else {
//     message = "you are out of the game";
//     isAlive = false;
//   }
//   messageEl.textContent = message;
// }

// function newCard() {
//   if (isAlive === true && hasBlackJack === false) {
//     let card = getRandomCard();
//     sum += card;
//     cards.push(card);
//     renderGame();
//   }
// }

// shakthi's practice

let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let cards = [];
let message = "";

let messageEl = document.getElementById("message-el");
let cardsEL = document.getElementById("cards-el");
let sumEL = document.getElementById("sum-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + " ";
  }
  sumEL.textContent = "Sum:" + sum;
  if (sum <= 20) {
    message = "Do u want to draw a card";
  } else if (sum === 21) {
    message = "whoo!, you got a blackjack";
    hasBlackJack = true
  } else {
    message = "you are out of the game";
    isAlive = false
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
