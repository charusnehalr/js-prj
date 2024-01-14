
let player ={
  name: "charu",
  chips: 154
}

let cards = [] //array- ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name +": $"+player.chips

function getRandomCard(){
  let no = Math.floor(Math.random()*13)+1
  if(no === 11) return 1
  else if(no>10) return 10
  else return no
  // return Math.floor(Math.random()*13)+1
}
function startGame(){
  isAlive =  true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards.push(firstCard)
  cards.push(secondCard)
  sum= firstCard+secondCard
  renderGame()
}
function renderGame(){
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent= "Card: "
  for(i=0; i<cards.length;i++) {
    cardEl.textContent += cards[i] +" "
  }
  // cardEl.textContent= "Card: " + cards[0]+ " " + cards[1]
  if(sum <= 20){
    message = "Do you want a new card?"
  }
  else if (sum === 21){
    message = "hurray!! you have blackjack"
    hasBlackJack = true
  }
  else{
    message = "alas! you are out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard(){
  if(isAlive===true && hasBlackJack===false){
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
  }
}


