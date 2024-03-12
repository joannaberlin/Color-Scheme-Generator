let colorsArr = [];
const colorsWrapper = document.getElementById('color-boxes_wrapper');
const form = document.getElementById('form');
const colorInput = document.getElementById('color');
const modeOption = document.getElementById('mode');

const handleSubmit = (e) => {
	e.preventDefault();
	const colorValue = colorInput.value.slice(1);
	const modeValue = modeOption.value;

	fetch(
		`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${modeValue}`
	)
		.then((response) => response.json())
		.then((data) => {
			for (let color of data.colors) {
				colorsArr.push(color.hex.value);
			}
			for (let color of colorsArr) {
				colorsWrapper.innerHTML += `<div class="color-box" style="background-color:${color}"><p>${color}</p></div>`;
			}
		});
	colorsArr = [];
	colorsWrapper.innerHTML = '';
};

form.addEventListener('submit', handleSubmit);
