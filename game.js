function colorBlack() {
  this.classList.add("black")
}

const container = document.getElementById("container");

function makeColumn (grid) {
  for (let j=0; j<grid * grid; j++){
    let cells = document.createElement("div");
    let squareWidth = 500/grid;
    let squareHeight = squareWidth;
    cells.style.width = squareWidth +"px";
    cells.style.height = squareHeight +"px";
    cells.setAttribute("id","cell");
    cells.addEventListener("mouseover", colorBlack);
    container.appendChild(cells)
  }
}
makeColumn (40);


//https://dirask.com/posts/JavaScript-dynamically-create-grid-of-divs-using-flexbox-139abp
//https://stackoverflow.com/questions/68563516/add-event-listener-to-multiple-divs-with-same-class-in-a-container

//document.getElementById("square").addEventListener("mouseover", function() {
//  document.getElementById("square").classList.add("black");
//  document.getElementById("square").style.backgroundColor = "black";
//});
