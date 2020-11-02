let numOfSquares = document.querySelector("#numberPrompt")


function createCells(num = 16) {


    if (num <= 100) {
    for(x=0; x< num**2; x++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        let container = document.getElementById('container')
        container.appendChild(cell);
        }
    }
    container.style.cssText = `grid-template-columns: repeat(${num}, auto);    `
}
function changeColor() {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((div) => {
        div.addEventListener("mouseenter", () =>{
            div.classList.add("color")
        })
    })
}
function reset() {
    let cells = document.querySelectorAll(".cell")
    let reset = document.querySelector("#reset")

    reset.addEventListener("click", () =>{
        cells.forEach((cell) =>{
            cell.classList.remove("color")

        })
    })
}

createCells(
changeColor()
reset()
