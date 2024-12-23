
const dContainer = document.querySelector("#container");
const bNewGrid = document.querySelector("#newgrid");


function addDiv(parentElement) {
    const newDiv = document.createElement("div");
    parentElement.appendChild(newDiv);
}

bNewGrid.addEventListener("click", function(){
    newGrid();
});

function newGrid() {}


// eof