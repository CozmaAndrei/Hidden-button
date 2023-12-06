let numberOfButtons = 3;
let arrayNumbersOfButtons = [];
const button = document.querySelector(".firstContainer");
const result = document.querySelector(".result");

createButtons();

function createButtons() {
   for (let i = 0; i < numberOfButtons; ++i) {
      const newButtons = document.createElement("button");
      document.querySelector("#btnContainer").appendChild(newButtons);
      newButtons.textContent = `Button ${i + 1}`;
   }
   fillTheArray();
}

function fillTheArray() {
   for (let i = 0; i < numberOfButtons; ++i) {
      arrayNumbersOfButtons[i] = numberOfButtons - i;
   }
}

button.addEventListener("click", winnerOrNot);

function winnerOrNot(event) {
   if (arrayNumbersOfButtons.length === 0) {
      event.preventDefault();
   } else {
      const indexRandomNumber = Math.floor(Math.random() * arrayNumbersOfButtons.length);
      let saveIndexRandomNumber = arrayNumbersOfButtons[indexRandomNumber];
      if (numberOfButtons == saveIndexRandomNumber) {
         result.textContent = "You found him, this button is a winner !";
         result.style.color = "green";
      } else {
         result.textContent = "This button is a loser !";
         result.style.color = "red";
      }
      arrayNumbersOfButtons.splice(indexRandomNumber, 1);
   }
}

function deleteContainer() {
   const deleteDiv = document.getElementById("btnContainer");
   deleteDiv.remove();
}

function createContainer() {
   const newDiv = document.createElement("div");
   document.querySelector(".firstContainer").appendChild(newDiv);
   newDiv.setAttribute("id", "btnContainer");
}

function generateButtons() {
   numberOfButtons = Number(input.value);
   if (numberOfButtons < 2) {
      alert("Please enter a valid number to generate buttons!");
   } else {
      result.textContent = "";
      deleteContainer();
      createContainer()
      createButtons();
   }
   input.value = "";
}
