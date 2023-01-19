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
let sliderValue = document.querySelector(".sliderValue");
let gridContainer = document.querySelector(".gridContainer");
let clearButton = document.querySelector(".clearButton");

function createGrid (gridSize){
    for(i=0; i<gridSize; i++){
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class", "gridRow");
        gridContainer.appendChild(gridRow); 
        for(j=0; j<gridSize; j++){
                let gridSquare = document.createElement("div");
                gridSquare.setAttribute("class", "gridSquare");
                gridSquare.addEventListener("mouseover", () =>
                    setColor(gridSquare));
                gridRow.appendChild(gridSquare);
        }
    }

}

createGrid(16);

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
    sliderValue.textContent = `Grid Size: ${slider.value} x ${slider.value}`
    removeRows();
    changeGridSize(slider.value);
    if (window.performance) {
        console.info("window.performance works fine on this browser");
      }
      console.info(performance.navigation.type);
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.info( "This page is reloaded" );
      } else {
        console.info( "This page is not reloaded");
      }
});

clearButton.addEventListener("click", function() {
    let allSquares = document.querySelectorAll(".gridSquare");

    allSquares.forEach(function(squares) { 
        squares.style.backgroundColor = "rgba(171,178,191,255)";
    })
})

function setColor (squares) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    squares.style.backgroundColor = "#" + randomColor;
}