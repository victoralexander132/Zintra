const $buscar = document.getElementById('boton-buscar');

$buscar.addEventListener('submit', (e) => {
	e.preventDefault();
	const busqueda = document.querySelector('input').value;
	console.log(busqueda);
	window.location.href = `busquedas.html?nombre=${busqueda}`;
});
