function colorBlack() {
  this.classList.add("black")
}

const container = document.getElementById("container");


  function makeRow (rows) {
    for (let i=0; i<rows; i++){
    let cells = document.createElement("div");
    cells.setAttribute("id","square");
    cells.addEventListener("mouseover", colorBlack);
    container.appendChild(cells)
    }
    }


function makeColumn (columns) {
  for (let j=0; j<columns; j++){
    makeRow(16);
}
}
makeColumn (16);


https://dirask.com/posts/JavaScript-dynamically-create-grid-of-divs-using-flexbox-139abp
https://stackoverflow.com/questions/68563516/add-event-listener-to-multiple-divs-with-same-class-in-a-container

//document.getElementById("square").addEventListener("mouseover", function() {
//  document.getElementById("square").classList.add("black");
//  document.getElementById("square").style.backgroundColor = "black";
//});
