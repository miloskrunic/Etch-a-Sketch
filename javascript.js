let color = "black";
let n=16;


document.addEventListener("DOMContentLoaded", () => {
    sizingOfBoard(n);  
    
    
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
            cell.style.backgroundColor = "white";
        });
    
    });
    
    let rndm = document.getElementById("random");
    rndm.addEventListener("input", (event) => {
        getRandomColor();
        console.log(color);
    });
    
    let sizeInput = document.getElementById("numberOfSquares");
    sizeInput.addEventListener("input", (event) => {
        let n = parseInt(sizeInput.value);  
        if (n > 0 && n < 65) { 
            resetBoard();
            sizingOfBoard(n);
        } else {
            alert("Please enter a positive number that is not bigger than 64!");
        }
    });
});


function sizingOfBoard(x){
    const grid = document.querySelector(".grid");
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;

        for(let i = 0; i<x*x; i++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);

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
        }
}


function resetBoard() {
    const grid = document.querySelector(".grid");
    grid.innerHTML = "";  // Ukloni sve trenutne ćelije
}


function getRandomColor() {

    var colorPicker = document.getElementById("random");
    color = colorPicker.value;
    console.log(color);
    return color;
  }

