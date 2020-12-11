let container = document.getElementById("container");

const sketch = (function () {
	let colorPicker = document.getElementById("colorPicker");
	let darker = document.querySelector("#darker");
	let rainbow = document.querySelector("#randomColor");

	const createCells = function (num = 16) {
		//Create the grid.
		if (num <= 100) {
			for (x = 0; x < num ** 2; x++) {
				let cell = document.createElement("div");
				cell.className = "cell";
				container.appendChild(cell);
			}
		}
		container.style.cssText = `grid-template-columns: repeat(${num}, auto);    `;
	};

	const shadeColor = function (div, num2) {
		num2 = num2 - 255 / 10;
		div.style.cssText = `background-color: rgb(${num2}, ${num2}, ${num2})`;
	};

	const randomColor = function (div) {
		let num3 = Math.floor(Math.random() * 256);
		let num4 = Math.floor(Math.random() * 256);
		let num5 = Math.floor(Math.random() * 256);
		div.style.cssText = `background-color: rgb(${num3}, ${num4}, ${num5})`;
	};

	const uncheckRadio = function () {
		colorPicker.addEventListener("change", () => {
			document.querySelectorAll(".radio").forEach((button) => {
				button.checked = false;
			});
		});
	};

	const choosenColor = function (div) {
		div.style.cssText = `background-color: ${colorPicker.value}`;
	};

	const changeColor = function () {
		let cells = document.querySelectorAll(".cell");
		cells.forEach((div) => {
			let num2 = 255;
			div.addEventListener("mouseenter", () => {
				if (darker.checked) {
					shadeColor(div, num2);
					num2 = num2 - 255 / 10;
				} else if (rainbow.checked) {
					randomColor(div);
				} else {
					choosenColor(div);
				}
			});
		});
	};

	return { createCells, changeColor, uncheckRadio };
})();

function reset() {
	// Reset the grid
	let squares = document.getElementById("squares").value;
	let reset = document.querySelector("#reset");

	reset.addEventListener("click", () => {
		container.innerHTML = "";
		sketch.createCells(squares);
		sketch.changeColor();
	});
}

function changeSize() {
	// Change the size of the grid to the selected number.
	let squares = document.getElementById("squares").value;
	if (squares > 0 && squares < 101) {
		container.innerHTML = "";
		sketch.createCells(squares);
		changeColor();
		reset();
	} else {
		container.innerHTML = "";
		createCells(16);
		changeColor();
		reset();
	}
}

sketch.uncheckRadio();
sketch.createCells();
sketch.changeColor();
reset();
