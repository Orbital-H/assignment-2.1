// this function hold all of the valuses used for black jack these values will not be changed and cannot be changed thorught the program♠♣♥♦
const cards = [
    { suit: "Spades ♠️", value: 11 }, // Ace
    { suit: "Spades ♠️", value: 2 },
    { suit: "Spades ♠️", value: 3 },
    { suit: "Spades ♠️", value: 4 },
    { suit: "Spades ♠️", value: 5 },
    { suit: "Spades ♠️", value: 6 },
    { suit: "Spades ♠️", value: 7 },
    { suit: "Spades ♠️", value: 8 },
    { suit: "Spades ♠️", value: 9 },
    { suit: "Spades ♠️", value: 10 }, // Jack
    { suit: "Spades ♠️", value: 10 }, // Queen
    { suit: "Spades ♠️", value: 10 }, // King
    //all spades inc face cards with values and icons  
    { suit: "Hearts ♥️", value: 11 }, // Ace
    { suit: "Hearts ♥️", value: 2 },
    { suit: "Hearts ♥️", value: 3 },
    { suit: "Hearts ♥️", value: 4 },
    { suit: "Hearts ♥️", value: 5 },
    { suit: "Hearts ♥️", value: 6 },
    { suit: "Hearts ♥️", value: 7 },
    { suit: "Hearts ♥️", value: 8 },
    { suit: "Hearts ♥️", value: 9 },
    { suit: "Hearts ♥️", value: 10 }, // Jack
    { suit: "Hearts ♥️", value: 10 }, // Queen
    { suit: "Hearts ♥️", value: 10 }, // King
    // all hearts inc face cards with value and icons
    { suit: "Clubs ♣️", value: 11 }, // Ace
    { suit: "Clubs ♣️", value: 2 },
    { suit: "Clubs ♣️", value: 3 },
    { suit: "Clubs ♣️", value: 4 },
    { suit: "Clubs ♣️", value: 5 },
    { suit: "Clubs ♣️", value: 6 },
    { suit: "Clubs ♣️", value: 7 },
    { suit: "Clubs ♣️", value: 8 },
    { suit: "Clubs ♣️", value: 9 },
    { suit: "Clubs ♣️", value: 10 }, // Jack
    { suit: "Clubs ♣️", value: 10 }, // Queen
    { suit: "Clubs ♣️", value: 10 }, // King
    // all clubs inc face cards with values and icons
    { suit: "Diamonds ♦️", value: 11 }, // Ace
    { suit: "Diamonds ♦️", value: 2 },
    { suit: "Diamonds ♦️", value: 3 },
    { suit: "Diamonds ♦️", value: 4 },
    { suit: "Diamonds ♦️", value: 5 },
    { suit: "Diamonds ♦️", value: 6 },
    { suit: "Diamonds ♦️", value: 7 },
    { suit: "Diamonds ♦️", value: 8 },
    { suit: "Diamonds ♦️", value: 9 },
    { suit: "Diamonds ♦️", value: 10 }, // Jack
    { suit: "Diamonds ♦️", value: 10 }, // Queen
    { suit: "Diamonds ♦️", value: 10 }, // King
    //all diamond cards inc face cards with values and icons
];
  
  

  function startGame() {
    let playerCards = [];
    let dealerCards = [];
    //created 2 new variables in startGame these will store the value of the dealt cards()
    let message = "Place your bets!";
  
    playerCards.push(dealCard());
    playerCards.push(dealCard());
    dealerCards.push(dealCard());
    dealerCards.push(dealerCard());
     // Deal two cards each to the player and dealer adding the value to 
     // playerCards and dealerCards arry
   
    // Show the player's cards and hide one of the dealer's cards.  
    showHand("playerHand", playerCards);
    showHand("dealerHand", dealerCards, false); 
    // This was going to be a way that i could make it apear if you won or lost after you bet
    document.getElementById("All bets are closed!").innerHTML = message;
    // Shows the players cards and hides one of the dealers cards. 
    // Check if the player already wins with a Blackjack (two cards that add up to 21)! 
    checkWinner(playerCards, dealerCards);
  }
    function dealerCard() {

        return dealCard();
    }
  



  // Deals a random card from the deck.  
  function dealCard() {
    const cardIndex = Math.random() * cards.length; 
    return cards[Math.floor(cardIndex)]; 
  }
  
  // Shows the cards in a hand. Like revealing your cards on the table!
  function showHand(handId, hand, hideSecondCard = false) {
    let handText = "";
    for (let i = 0; i < hand.length; i++) {
      handText += hand[i].suit + hand[i].value + " ";
    }
  
    if (hideSecondCard && hand.length === 2) {
      handText = handText.slice(0, -3) + "[Hidden]"; // Hide the dealer's second card
    }
    document.getElementById(handId).innerHTML = handText;
  }
   //------------------------currently not working-------------------------------- 
  // This checks who wins! Like a big reveal!
  function checkWinner(playerCards, dealerCards) {
    const playerValue = calculateHandValue(playerCards);
    const dealerValue = calculateHandValue(dealerCards);
    let gameMessage = []; 
    //creates an empty array to be filled when the game logic goes therough here
    if (playerValue === 21) {
      gameMessage = "Blackjack! You Win! ";
    } else if (dealerValue > 21) {
      gameMessage = "Dealer Bust! You Win! ";
    } else if (playerValue > dealerValue && playerValue <= 21) {
      gameMessage = "You Win! You got a better hand! ";
    } else if (playerValue === dealerValue) {
      gameMessage = "Push! It's a tie. ";
    } else {
      gameMessage = "You Lose. ";
    }
    //these are the message logic, returns 21=you win, if dealer has {your score}<(dealers score)or=21
    document.getElementById("message").innerHTML = gameMessage;
  
  } //i would love to get this part working and really make this a nice game but I ran out of time :(
  //--------------------------------------------------------------------------------

  function calculateHandValue(hand) {
    let handTotal = 0;
    let hasAce = false;
    for (let card of hand) {
      handTotal += card.value;
      if (card.value === 11) {
        hasAce = true;
      }
    }
    // Calculates the total value of a hand by checking if it has an ace and to change 1-11
    // adds card values, currently not working with hitMe(). 
   
    if (handTotal > 21 && hasAce) {
      handTotal -= 10;
    }
    return handTotal;
  }
    // Adjust ace value to 1 if total exceeds 21 and there's an ace. 
  
  function hitMe() {
    console.log("Player hits!"); 
  }
  // Placeholder for now, no time
  
  