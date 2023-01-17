//create a webpage with a 16x16 grid of square divs
//set up a hover effect (or onclick) that changes color of divs to black
//add a button that prompts user for an integer
    //remove and create a new grid with the dimensions of that integer
    //while keeping same total space as before

//extra: instead of prompt, have a slider
//add rgb colors instead of black 
//add eraser and clear 
//add ability to change color with a color picker
let slider = document.querySelector(".slider");
let sliderValue = document.createElement("span");
let gridContainer = document.querySelector(".gridContainer");

function createGrid (gridSize){
    for(i=0; i<gridSize; i++){
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "gridRow");
        gridContainer.appendChild(gridRow); 
        for(j=0; j<gridSize; j++){
                let gridSquare = document.createElement("div");
                gridSquare.setAttribute("class", "gridSquare");
                gridRow.appendChild(gridSquare);
        }
    }
}
createGrid(8);

function changeGridSize(num) {
    createGrid(num);
}

function removeRows() {
    let gridRowsToRemove = document.querySelectorAll(".gridRow");
    for (i=0; i<gridRowsToRemove.length; i++){
        gridRowsToRemove[i].remove();
    }
}

slider.addEventListener("input", () => {
    removeRows();
    changeGridSize(slider.value);
});




    let colorSquares = document.querySelectorAll(".gridSquare");

    colorSquares.forEach(colorSquare => colorSquares.addEventListener("click", function () {
        colorSquare.classList.add("addColor")
    }))
