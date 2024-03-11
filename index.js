fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic')
	.then((response) => response.json())
	.then((data) => console.log(data));
