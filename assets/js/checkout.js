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

		console.log('=============================================================');
		const token = localStorage.getItem('token');
		const usuarioCarrito = JSON.parse(localStorage.getItem('carrito'));
		/* Post de carrito y productos del carrito */
		var carritoId;
		postCarrito().then((carrito) => {
			console.log(carrito);

			Object.values(usuarioCarrito).forEach((carritoProducto) => {
				fetch('http://localhost:5000/api/CarritoProducto', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
						Authorization: token,
					},
					body: JSON.stringify({
						carrito: { id: carrito.id },
						producto: { id: carritoProducto.id },
						cant_productos: carritoProducto.cantidad,
						precio: carritoProducto.precio,
					}),
				}).then((resp) =>
					resp.json().then((carritoProductoResp) => {
						console.log(carritoProductoResp);
					})
				);
			});

			const envio = JSON.parse(localStorage.getItem('direccion'));
			fetch('http://localhost:5000/api/Envio', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
					Authorization: localStorage.getItem('token'),
				},
				body: JSON.stringify({
					nombre: envio.nombre_cliente,
					apellido: envio.apellido_cliente,
					telefono: envio.telefono,
					email: envio.email,
					estado: envio.estado,
					ciudad: envio.ciudad,
					cp: envio.cp,
					direccion: envio.direccion,
					referencias: envio.referencias,
					carrito: { id: carrito.id },
				}),
			}).then((resp) =>
				resp.json().then((envio) => {
					fetch('http://localhost:5000/api/Pago', {
						method: 'POST',
						headers: {
							'Content-type': 'application/json',
							Authorization: localStorage.getItem('token'),
						},
						body: JSON.stringify({
							cvc: datos.cvc,
							fecha_vencim: datos.fecha_vencim,
							nombre_tarjeta: datos.nombre_tarjeta,
							numero_tarjeta: datos.numero_tarjeta,
							envio: { id: envio.id },
						}),
					});
				})
				);
			});
			
			console.log('=============================================================');
			setTimeout(function(){
				// localStorage.removeItem('carrito')
				// localStorage.removeItem('cesta')
				// localStorage.removeItem('direccion')
				// localStorage.removeItem('pago')
				window.location.href="./confirmacion.html"
			} , 500);  
			
		} 
	});
		
	

const postCarrito = async () => {
	const resp = await fetch('http://localhost:5000/api/Carrito', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Authorization: localStorage.getItem('token'),
		},
		body: JSON.stringify({
			usuario: {
				id: localStorage.getItem('cliente_id'),
			},
		}),
	});
	return await resp.json();
};
