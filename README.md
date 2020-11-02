Project: etch-a-sketch


function changeColor() {
    let cells = document.querySelectorAll(".cell")
    cells.forEach((div) => {
        div.addEventListener("mouseenter", () =>{
            div.classList.add("color")
        })
    })
}