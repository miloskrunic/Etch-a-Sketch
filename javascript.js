let color = "black";

const grid = document.querySelector(".grid");

grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i<256; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}


grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cell")) {
        if (color === "black"){
        event.target.style.backgroundColor = "black";
    }
        else if(color ==="white"){
            event.target.style.backgroundColor = "white";
        }
            else{
                console.log("kurcina");
                event.target.style.backgroundColor = color;
            }
    }
});


function getRandomColor() {

    var colorPicker = document.getElementById("random");
    color = colorPicker.value;
    console.log(color);
    return color;
  }


let blck = document.getElementById("black");

blck.addEventListener("click", (event) => {
    color = "black";
});

let whte = document.getElementById("white");

whte.addEventListener("click", (event) => {
    color = "white";
});

let rset = document.getElementById("reset");

rset.addEventListener("click",(event) => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";  // Postavljanje bele boje na svaku ćeliju
    });

});

let rndm = document.getElementById("random");

rndm.addEventListener("input", (event) => {
    getRandomColor();
    console.log(color);
});