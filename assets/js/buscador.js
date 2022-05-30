const $buscar = document.getElementById('button-addon2');
console.log($buscar);

// Escuchar el click del botón de búsqueda y recuperar el texto
$buscar.addEventListener('click', (e) => {
	const $input = document.querySelector('.container input').value;
	console.log($input);
});
