const expresiones = {
	usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	card: /^[0-9]{16}$/,
	mm: /(0[1-9]|1[0-2])/,
	yy: /2[2-9]|[3-9][0-9]/,
	cvc: /^[0-9]{3,4}$/,
	cp: /^[0-9]{5}$/,
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	address: /^[a-zA-ZÀ-ÿ\s0-9,.\-#]{1,80}$/,
};

const formulario = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const $valNombre = document.getElementById('valNombre');
const $valApellido = document.getElementById('valApellido');
const $valTel = document.getElementById('valTel');
const $valMail = document.getElementById('valMail');
const $valCiudad = document.getElementById('valCiudad');
const $valCP = document.getElementById('valCP');
const $valAddress = document.getElementById('valAddress');
const $valReferencias = document.getElementById('valReferencias');
const $valRobot = document.getElementById('valRobot');

const areValid = {
	nombre: false,
	apellido: false,
	tel: false,
	mail: false,
	ciudad: false,
	cp: false,
	address: false,
	referencias: false,
	robot: false,
};

inputs.forEach((input) => {
	input.addEventListener('keyup', (e) => {
		switch (e.target.name) {
			case 'nombre':
				if (expresiones.nombre.test(e.target.value)) {
					$valNombre.textContent = '';
					areValid.nombre = true;
				} else {
					$valNombre.textContent = 'Nombre incorrecto';
					areValid.nombre = false;
				}
				break;
			case 'apellido':
				if (expresiones.nombre.test(e.target.value)) {
					$valApellido.textContent = '';
					areValid.apellido = true;
				} else {
					$valApellido.textContent = 'Apellido incorrecto';
					areValid.apellido = false;
				}
				break;
			case 'tel':
				if (expresiones.telefono.test(e.target.value)) {
					$valTel.textContent = '';
					areValid.tel = true;
				} else {
					$valTel.textContent = 'Teléfono incorrecto';
					areValid.tel = false;
				}
				break;

			case 'correo':
				if (expresiones.email.test(e.target.value)) {
					$valMail.textContent = '';
					areValid.mail = true;
				} else {
					$valMail.textContent = 'Correo incorrecto';
					areValid.mail = false;
				}
				break;

			case 'ciudad':
				if (expresiones.nombre.test(e.target.value)) {
					$valCiudad.textContent = '';
					areValid.ciudad = true;
				} else {
					$valCiudad.textContent = 'Ciudad incorrecta';
					areValid.ciudad = false;
				}
				break;

			case 'cp':
				if (expresiones.cp.test(e.target.value)) {
					$valCP.textContent = '';
					areValid.cp = true;
				} else {
					$valCP.textContent = 'C.P. incorrecto';
					areValid.cp = false;
				}
				break;

			case 'address':
				if (expresiones.address.test(e.target.value)) {
					$valAddress.textContent = '';
					areValid.address = true;
				} else {
					$valAddress.textContent = 'Dirección incorrecta';
					areValid.address = false;
				}
				break;

			case 'referencias':
				if (expresiones.address.test(e.target.value)) {
					$valReferencias.textContent = '';
					areValid.referencias = true;
				} else {
					$valReferencias.textContent = 'Referencia incorrecta';
					areValid.referencias = false;
				}
				break;

			default:
				break;
		}
	});
});
formulario.addEventListener('submit', (e) => {
	const check = document.getElementById('robot').checked;
	areValid.robot = check;
	e.preventDefault();
	if (Object.values(areValid).every((value) => value === true) && check) {
		console.log('Enviado');
		const datos = Object.fromEntries(new FormData(e.target));
		localStorage.setItem('direccion', JSON.stringify(datos));
		console.log(datos);
		window.location.href = '/checkout.html';
	} else {
		console.log('No enviado');
		console.log(check);
	}
});
