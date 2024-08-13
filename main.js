//Creates a 16x16 grid once the webpage first loads
let size = 16;
const gridContainer = document.querySelector(".grid-container");
createGrid(size);



function createGrid(gridSize) {

    for (let i = 0; i < gridSize; i++) {
        const colBox = document.createElement("div");
        colBox.classList.add("col-container");
        document.querySelector(".grid-container").appendChild(colBox)
        for (let x = 0; x < gridSize; x++) {
            const box = document.createElement("div");
            box.classList.add("box");
            colBox.appendChild(box);
        }
    }

    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function () {
            boxes[i].classList.add("covered");
        });
    }
}






const resetButton = document.querySelector("#reset-button");
const content = document.querySelector(".content");

resetButton.addEventListener("click", function () {
    let tempSize = prompt("How many rows/columns should your new grid have?");
    if (tempSize > 100 || tempSize < 0) {
        alert("You must enter a value from 0-100 inclusive! Try Again.");
    } else {
        size = tempSize;
        document.querySelector(".grid-container").remove();
        const newDiv = document.createElement("div");
        content.appendChild(newDiv);
        newDiv.classList.add("grid-container");

        createGrid(size);
    }
});