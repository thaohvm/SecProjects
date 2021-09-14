const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
let selectedColors = [];
let firstCard = null;
let waiting = false;

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if (waiting) {
    return;
  }

  const selectedCard = event.target;
  if (selectedColors.indexOf(selectedCard.classList[0]) > -1) {
    // Already selected color
    return;
  }

  selectedCard.style.backgroundColor = selectedCard.classList[0];

  if (firstCard === null) {
    // handling first card
    firstCard = selectedCard;
  } else {
    // handling second card
    if (selectedCard === firstCard) {
      return;
    }

    waiting = true;
    if (firstCard.classList[0] === selectedCard.classList[0]) {
      // Matched colors
      selectedColors.push(firstCard.classList[0]);
      firstCard = null;
      waiting = false;
    } else {
      setTimeout(function() {
        firstCard.style.backgroundColor = "white";
        selectedCard.style.backgroundColor = "white";
        firstCard = null;
        waiting = false;
      }, 1000)
    }
  }
  if (selectedColors.length === COLORS.length / 2) {
    setTimeout(alert("You win!"), 500)
  }


  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);
