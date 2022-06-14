const expresiones = {
	usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	card: /^[0-9]{16,20}$/,
	mm: /(0[1-9]|1[0-2])/,
	yy: /2[2-9]|[3-9][0-9]/,
	cvc: /^[0-9]{3,4}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const formulario = document.querySelector('form');

const inputs = document.querySelectorAll('input');
const $valNombre = document.getElementById('valNombre');
const $valCard = document.getElementById('valCard');
const $valDate = document.getElementById('valDate');
const $valCVC = document.getElementById('valCVC');

const areValid = {
	nombre: false,
	card: false,
	mm: false,
	yy: false,
	cvc: false,
};

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		switch (e.target.name) {
			case 'nombre_tarjeta':
				if (expresiones.nombre.test(e.target.value)) {
					$valNombre.textContent = '';
					areValid.nombre = true;
				} else {
					$valNombre.textContent = 'Nombre incorrecto';
					areValid.nombre = false;
				}
				break;
			case 'numero_tarjeta':
				if (expresiones.card.test(e.target.value)) {
					$valCard.textContent = '';
					areValid.card = true;
				} else {
					$valCard.textContent = 'Número incorrecto';
					areValid.card = false;
				}
				break;
			case 'mm':
				if (expresiones.mm.test(e.target.value)) {
					$valDate.textContent = '';
					areValid.mm = true;
				} else {
					$valDate.textContent = 'Fecha incorrecta';
					areValid.mm = false;
				}
				break;
			case 'yy':
				if (expresiones.yy.test(e.target.value)) {
					$valDate.textContent = '';
					areValid.yy = true;
				} else {
					$valDate.textContent = 'Fecha incorrecta';
					areValid.yy = false;
				}
				break;
			case 'cvc':
				if (expresiones.cvc.test(e.target.value)) {
					$valCVC.textContent = '';
					areValid.cvc = true;
				} else {
					$valCVC.textContent = 'Código incorrecto';
					areValid.cvc = false;
				}
				break;
		}
	});
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(areValid).every((value) => value === true)) {
		const datos = Object.fromEntries(new FormData(e.target));
		datos.cvc = parseInt(datos.cvc);
		datos.fecha_vencim = parseInt(datos.mm + datos.yy);
		delete datos.mm;
		delete datos.yy;
		// console.log(datos);
		localStorage.setItem('checkout', JSON.stringify(datos));
		window.location.href = `./confirmacion.html`;
	} else {
		console.log('No enviado');
	}
});
