
const INITIAL_SIZE = 16;
const INITIAL_WIDTH = 64;
const INITIAL_HEIGHT = 64;
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
    createGrid(newGridSize,1024/newGridSize,1024/newGridSize);    
}

function addDiv(parentElement,newHeight,newWidth) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("style", `flex: 1; min-height:${newHeight}px ; min-width:${newWidth}px`);
    newDiv.addEventListener("mouseenter", function(){
        newDiv.style.backgroundColor = "red";
    });
    parentElement.appendChild(newDiv);
}

function createGrid(gridSize,divHeight,divWidth) {
    for (let i=0; i<gridSize*gridSize; i++) {
        addDiv(dContainer,divHeight,divWidth);
    }
}

function removeGrid(parentElement) {
    for(let i=parentElement.childElementCount - 1; i>=0; i--) {
        parentElement.removeChild(parentElement.childNodes[parentElement.childElementCount - 1]);
    }
}

createGrid(INITIAL_SIZE,INITIAL_HEIGHT,INITIAL_WIDTH);

// eof