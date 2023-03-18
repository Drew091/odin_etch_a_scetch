const container = document.getElementById("container");
let grid = 16;
let coloredCells = 0;
let everyTenthCell = 0;

function selectColor() {
  let randomColor = "rgba(" + Math.round(Math.random()*255) + "," +
    Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," +
    Math.random().toFixed(1) + ")";

  if(colorSwitchStatus == "Color" && everyTenthCell !== 9) {
    this.style.backgroundColor = randomColor;
  }else{
    this.classList.add("black");
  }

  coloredCells++;
  everyTenthCell = coloredCells%10;
}

function colorSwitch () {
  let colorSwitchStatus;

  if(document.getElementById("colorCheckbox").checked){
    colorSwitchStatus = "Color";
  }else{
    colorSwitchStatus = "Black";
  }
  return colorSwitchStatus
}

function changeColor() {
  resetDrawingArea ();
  makeGrid (grid)
}

function resetDrawingArea () {
  const cellClasses = document.querySelectorAll('.cell');

  cellClasses.forEach(cell => {
    cell.remove();
  });
}

function changeGrid () {
  grid = prompt("Please enter the new grid size. (Max 100)", "16");

  if(grid != null && grid <=100) {
    resetDrawingArea ();
  }
  makeGrid (grid)
}

function makeGrid (grid) {
  let gridBackup = grid;
  console.log(everyTenthCell);
  if (grid <= 100) {
    for (let i=0; i<grid * grid; i++){
      let cells = document.createElement("div");
      let squareWidth = 500/grid;
      let squareHeight = squareWidth;

      cells.style.width = squareWidth +"px";
      cells.style.height = squareHeight +"px";
      cells.classList.add("cell");
      colorSwitchStatus = colorSwitch ();
      cells.addEventListener("mouseover", selectColor);
      container.appendChild(cells)
    }
  }else{
    alert("100x100 is the maximum grid size");
  }
}

makeGrid (16);
