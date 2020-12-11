let container = document.getElementById("container");

const sketch = (function () {
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

	return { createCells };
})();

const colorSettings = (function () {
	let colorPicker = document.getElementById("colorPicker");
	let darker = document.querySelector("#darker");
	let rainbow = document.querySelector("#randomColor");

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

	return { changeColor, uncheckRadio };
})();

const sketchFlow = (function () {
	let sizeChanger = document.getElementById("squares");
	let resetButton = document.querySelector("#reset");

	function reset() {
		// Reset the grid
		resetButton.addEventListener("click", () => {
			container.innerHTML = "";
			sketch.createCells(sizeChanger.value);
			colorSettings.changeColor();
		});
	}

	function changeSize() {
		// Change the size of the grid to the selected number.
		const etchForm = document.querySelector("#etchForm");
		etchForm.addEventListener("submit", (event) => {
			event.preventDefault();
			let squares = document.getElementById("squares").value;
			if (squares > 0 && squares < 101) {
				container.innerHTML = "";
				sketch.createCells(squares);
				colorSettings.changeColor();
			}
		});
	}

	const startSketch = function () {
		colorSettings.uncheckRadio();
		sketch.createCells();
		colorSettings.changeColor();
		reset();
		changeSize();
	};

	return { startSketch };
})();

sketchFlow.startSketch();
