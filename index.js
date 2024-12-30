
const INITIAL_GRID_SIZE = 16;
const INITIAL_DIV_SIZE = 64;
const dContainer = document.querySelector("#maincontainer");
const bNewGrid = document.querySelector("#newgrid");

bNewGrid.addEventListener("click", function(){
    newGrid();
});

function newGrid() {
    let validInput = false;
    let newGridSize = 0;
    do {
        newGridSize = prompt("How many divs ?");
        if (Number(newGridSize) && newGridSize > 0 && newGridSize <= 100) 
            validInput = true;
        else
            alert("Enter a number between 1 and 100");
    } while (!validInput);
    removeGrid(dContainer);
    let newSize = Math.floor(1024/newGridSize)
    createGrid(newGridSize,newSize);    
}

function addDiv(parentElement,divSize) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style", `flex: 1; min-height:${divSize}px ; min-width:${divSize}px`);
    newDiv.addEventListener("mouseenter", function(){
        newDiv.style.backgroundColor = "red";
    });
    parentElement.appendChild(newDiv);
}

function createGrid(gridSize,divSize) {
    for (let i=0; i<gridSize*gridSize; i++) {
        addDiv(dContainer,divSize);
    }
}

function removeGrid(parentElement) {
    for(let i=parentElement.childElementCount - 1; i>=0; i--) {
        parentElement.removeChild(parentElement.childNodes[parentElement.childElementCount - 1]);
    }
}

createGrid(INITIAL_GRID_SIZE, INITIAL_DIV_SIZE);

// eof