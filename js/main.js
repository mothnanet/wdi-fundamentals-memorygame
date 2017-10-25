// code writting an array
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  };
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png'",
  };
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  };
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  };

];
var cardsInPlay = [] ;

//check for a match
var checkForMatch = function() {

        if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!")
        } else {
          alert("Sorry, try again.")
      }
}

// code for flipping the card and storing volue
var flipCard = function () {
    cardId = this.getAttribute("data-id");
    console.log(cardId)

    cardsInPlay.push(cards[cardId]);
    this.setAttribute("src", cards[cardId].cardImage);
    console.log("User flipped " + cards[cardId]).rank;
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

        //find number of cards played
        if (cardsInPlay.length === 2) {
            checkForMatch();
        }
}

var createBoard = function() {
  for (var i = 0; i < cards.length; i++)
  var cardElement = document.createElement("img");
      cardElement.setAttribute("src", "images/back.png")
      cardElement.setAttribute("data-id", i);
      cardElement.addEventListener("click", flipCard);
   document.getElementById("game-board").appendChild(cardElement);

 }

}

createBoard();
};



flipCard(0);
flipCard(2);
