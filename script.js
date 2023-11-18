let numberOfButtons = 3;
let arrayNumberOfButtons = [];

createButtons();

function createButtons() {
    for (let i = 0; i < numberOfButtons; ++i) {
        arrayNumberOfButtons[i] = numberOfButtons - i;
        const button = document.createElement("button");
        document.querySelector("#containerOfButtons").appendChild(button);
        button.textContent = `Button ${i + 1}`;
        button.classList.add("btn", "btn-secondary");
        button.addEventListener("click", buttonWinnerOrLoser);
        const disableButtons = document.getElementsByTagName("button");
        disableButtons[i].addEventListener("click", function(event) {
            event.target.disabled = true;
        });

        function buttonWinnerOrLoser() {
            const indexRandomNumber = Math.floor(Math.random() * arrayNumberOfButtons.length);
            const saveIndexRandomNumber = arrayNumberOfButtons[indexRandomNumber];
            if (numberOfButtons == saveIndexRandomNumber) {
                alert(`You found him ! Button ${i + 1} is the WINNER !`);
                button.classList.add("btn", "btn-success");
                arrayNumberOfButtons.splice(indexRandomNumber, 1);
            } else {
                alert(`Button ${i + 1} is the LOSER !`);
                button.classList.add("btn", "btn-danger");
                arrayNumberOfButtons.splice(indexRandomNumber, 1);
            }
        }
    }
}

function deleteButtons() {
    const buttonsFromContainer = document.getElementById("containerOfButtons");
    while (buttonsFromContainer.firstChild) {
        buttonsFromContainer.removeChild(buttonsFromContainer.firstChild);
    }
}

function generateButtons() {
    numberOfButtons = Number(input.value);
    if (numberOfButtons < 2) {
        alert("Please enter a valid number to generate buttons!");
    } else {
        deleteButtons();
        createButtons();
    }
    input.value = "";
}