const gridContainer = document.querySelector(".grid-container")

for(let i=0; i<16; i++){
    const colBox = document.createElement("div");
    colBox.classList.add("col-container");
    gridContainer.appendChild(colBox)
    for(let x=0; x<16; x++){
        const box =  document.createElement("div");
        box.classList.add("box")
        colBox.appendChild(box);
    }
}