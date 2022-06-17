const expresiones = {
	nombre: /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,
};

const formulario = document.querySelector('form');
const inputs = document.querySelectorAll('input');

const emailError = document.querySelector('#errorEmail');
const nombreError = document.querySelector('#errorNombre');
const passwordError = document.querySelector('#errorPassword');
const telefonoError = document.querySelector('#errorTelefono');

/* console.log(telefonoError); */

const statusInf = {
	nombre: false,
	email: false,
	password: false,
	telefono: false,
};

inputs.forEach((inp) => {
	inp.addEventListener('keyup', (e) => {
		switch (e.target.name) {
			case 'email':
				if (expresiones.email.test(e.target.value)) {
					statusInf.email = true;
					emailError.textContent = '';
				} else {
					statusInf.email = false;
					emailError.textContent = 'Correo electronico incorrecto';
				}
				break;
			case 'nombre':
				if (expresiones.nombre.test(e.target.value)) {
					statusInf.nombre = true;
					nombreError.textContent = '';
				} else {
					statusInf.nombre = false;
					nombreError.textContent = 'Nombre incorrecto';
				}
				break;
			case 'contrasenia':
				if (expresiones.password.test(e.target.value)) {
					statusInf.password = true;
					passwordError.textContent = '';
				} else {
					statusInf.password = false;
					passwordError.textContent = 'Contraseña incorrecta';
				}
				break;
			case 'telefono':
				if (expresiones.telefono.test(e.target.value)) {
					statusInf.telefono = true;
					telefonoError.textContent = '';
				} else {
					statusInf.telefono = false;
					telefonoError.textContent = 'Telefono incorrecto';
				}

				break;
		}
	});
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (Object.values(statusInf).every((value) => value === true)) {
		const formData = Object.fromEntries(new FormData(e.target));
		sendInfo(formData);
		formulario.reset();
		
	} else {
		console.log('No enviado');
	}
});

const sendInfo = async (formData) => {
	const request = await fetch('https://zintra-api.herokuapp.com/api/Usuario', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData),
	});

	const respuesta = await request.json();
	console.log(respuesta);
	url = window.location;
		const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
		location.href = path + 'login.html';
};
