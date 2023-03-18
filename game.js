function colorBlack() {
  this.classList.add("black")
}

function random_rgba() {
  let randomColor = "rgba(" + Math.round(Math.random()*255) + "," +
  Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," +
  Math.random().toFixed(1) + ")";

  console.log(randomColor);
   this.style.backgroundColor = randomColor;
}

const container = document.getElementById("container");

function changeGrid () {
  let grid = prompt("Please enter the new grid size. (Max 100)", "16");

  if(grid != null && grid <=100) {
    const cellClasses = document.querySelectorAll('.cell');

    cellClasses.forEach(cell => {
      cell.remove();
    });
  }
  makeGrid (grid)
}

function makeGrid (grid) {

  if (grid <= 100) {
    for (let i=0; i<grid * grid; i++){
      let cells = document.createElement("div");
      let squareWidth = 500/grid;
      let squareHeight = squareWidth;

      cells.style.width = squareWidth +"px";
      cells.style.height = squareHeight +"px";
      cells.classList.add("cell");
      cells.addEventListener("mouseover", random_rgba);
      container.appendChild(cells)
    }
  }else{
    alert("100x100 is the maximum grid size");
  }
}

makeGrid (16);
