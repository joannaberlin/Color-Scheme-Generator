const colorsWrapper = document.getElementById('color-boxes_wrapper');
let colorsArr = [];

fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic')
	.then((response) => response.json())
	.then((data) => {
		console.log(data.colors);
		for (let color of data.colors) {
			colorsArr.push(color.hex.value);
		}
		for (let color of colorsArr) {
			colorsWrapper.innerHTML += `<div class="color-box" style="background-color:${color}"><p>${color}</p></div>`;
		}
	});

console.log(colorsArr);
