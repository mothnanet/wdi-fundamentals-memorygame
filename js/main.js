var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [] ;

//check for a match
var checkForMatch = function() {
            // do they match?
        if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!")
        } else {
          alert("Sorry, try again.")
      }
}

// code for flipping the card and storing volue
var flipCard = function (cardID) {

    cardsInPlay.push(cards[cardID]);
    console.log("User flipped " + cards[cardID]);

        //find number of cards played
        if (cardsInPlay.length === 2) {
            checkForMatch();
        }
}

flipCard(0);
flipCard(2);
