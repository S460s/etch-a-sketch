let container = document.getElementById('container')


function createCells(num = 16) {
    //Create the grid.
    if (num <= 100) {
    for(x=0; x< num**2; x++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        container.appendChild(cell);
        }
    }
    container.style.cssText = `grid-template-columns: repeat(${num}, auto);    `
}
function changeColor() {
    //Change the color of the divs.
    let cells = document.querySelectorAll(".cell")
    cells.forEach((div) => {
        let num2 = 255;
        div.addEventListener("mouseenter", () =>{
            if (document.querySelector("#darker").checked) {
                num2 = num2 - 255/10
                div.style.cssText = `background-color: rgb(${num2}, ${num2}, ${num2})`
            }
            else if (document.querySelector("#randomColor").checked) {
                let num3 = Math.floor(Math.random() * 256)
                let num4 = Math.floor(Math.random() * 256)
                let num5 = Math.floor(Math.random() * 256)
                div.style.cssText = `background-color: rgb(${num3}, ${num4}, ${num5})`
            }
            else {
            div.style.cssText = `background-color: #fec89a`
            }
        })
    })
}

function reset() {
    // Reset the grid
    let squares = document.getElementById("squares").value
    let reset = document.querySelector("#reset")

    reset.addEventListener("click", () =>{
        container.innerHTML = ""
        createCells(squares)
        changeColor()
    })
}

function changeSize() {
    // Change the size of the grid to the selected number.
    let squares = document.getElementById("squares").value
    if (squares > 0 && squares < 101) {
        container.innerHTML = ""
        createCells(squares)
        changeColor()
        reset()
    }
    else{
    container.innerHTML = ""
    createCells(16)
    changeColor()
    reset()
    }
}






createCells()
changeColor()
reset()