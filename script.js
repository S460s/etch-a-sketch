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
            div.style.cssText = `background-color: black`
            }
        })
    })
}

function reset() {
    let cells = document.querySelectorAll(".cell")
    let reset = document.querySelector("#reset")


    reset.addEventListener("click", () =>{
        cells.forEach((cell) =>{
            cell.style.cssText = "background-color: white"
        })
    })
}

function changeSize() {
    
    let squares = document.getElementById("squares").value
    if (squares > 0 && squares < 101) {
        let container = document.getElementById('container')
        container.innerHTML = ""
        createCells(squares)
        changeColor()
        reset()
    }
    else{
    let container = document.getElementById('container')
    container.innerHTML = ""
    createCells(16)
    changeColor()
    reset()
    }
}




createCells()
changeColor()
reset()
