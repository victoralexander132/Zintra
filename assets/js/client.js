// Esperamos a que termine de cargar la página
window.addEventListener('load', () => {
	const token = localStorage.getItem('token');
	const email = localStorage.getItem('email');
	// Recuperamos los usuarios de la base de datos
	const usuarios = fetchUsuario(email);
});

const fetchUsuario = async (email) => {
	const response = await fetch('http://localhost:5000/api/Usuario/all', {
		headers: {
			'Content-type': 'application/json',
			Authorization: token,
		},
	});
	const usuarios = await response.json();
	Object.values(usuarios).forEach((usuario) => {
		if (usuario.email == email) {
      insertUserData(usuario);
      localStorage.setItem('cliente_id', usuario.id);
    } else {
     
    }
	});
};


const insertUserData = (usuario) => {
  document.getElementById('txt-nombre').outerHTML= usuario.nombre;
  document.getElementById('txt-email').outerHTML= usuario.email;
  document.getElementById('txt-telefono').outerHTML= usuario.telefono;
	const $contenedor = document.getElementById('txt-historial');
	let numeroFila = 1;
	Object.values(usuario.carrito).forEach(carrito => {
		Object.values(carrito.carritoProductos).forEach(carritoProducto => {
			fetchUrlName(carritoProducto.producto.id).then((producto) => {
				template = `
								<tr>
										<th scope="row">${numeroFila}</th>
										<td><img src="${producto.url}" class="img-tabla"></td>
										<td>${producto.nombre}</td>
										<td>${carritoProducto.cant_productos}</td>
										<td> $${(carritoProducto.cant_productos * carritoProducto.precio)}.00</td>
								</tr>
								`
						$contenedor.innerHTML += template
						numeroFila++;

			})
		})

	})
}

const fetchUrlName = async (id) => {
	const response = await fetch("http://localhost:5000/api/Producto/"+id, {headers:{Authorization: token}});
	const producto = await response.json();
	return producto;
}