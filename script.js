let numberOfButtons = 3;
let arrayNumbersOfButtons = [];
const result = document.querySelector(".result");

createButtons();

function createButtons() {
   for (let i = 0; i < numberOfButtons; ++i) {
      arrayNumbersOfButtons[i] = numberOfButtons - i;
      const newButtons = document.createElement("button");
      document.querySelector("#btnContainer").appendChild(newButtons);
      newButtons.textContent = `Button ${i + 1}`;
      newButtons.className = "btn btn-secondary";
      newButtons.addEventListener("click", isWinnerOrIsLoser);
   }
}

function isWinnerOrIsLoser(event) {
   const indexRandomNumber = Math.floor(Math.random() * arrayNumbersOfButtons.length);
   let saveIndexRandomNumber = arrayNumbersOfButtons[indexRandomNumber];
   if (numberOfButtons == saveIndexRandomNumber) {
      result.textContent = "You found him, this button is a winner !";
      result.style.color = "green";
      event.target.style.backgroundColor = "green";
      event.target.disabled = "true";
   } else {
      result.textContent = "This button is a loser !";
      result.style.color = "red";
      event.target.style.backgroundColor = "red";
      event.target.disabled = "true";
   }
   arrayNumbersOfButtons.splice(indexRandomNumber, 1); // am facut splice deoarece trebuie sa elimin indexul respectiv, sa nu mai fie generat si a 2 a oara.
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
