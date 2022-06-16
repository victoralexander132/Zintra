// Esperamos a que termine de cargar la página
window.addEventListener('load', () => {
	const token = localStorage.getItem('token');
	const email = localStorage.getItem('email');
	// Recuperamos los usuarios de la base de datos
	const usuarios = fetchUsuario(email);
});

const fetchUsuario = async (email) => {
	const response = await fetch('https://zintra-api.herokuapp.com/api/ClienteRegistro/all', {
		headers: {
			'Content-type': 'application/json',
			Authorization: token,
		},
	});
	const usuarios = await response.json();
	Object.values(usuarios).forEach((usuario) => {
		if (usuario.email == email) {
      insertUserData(usuario);
    } else {
      
    }
	});
};

const insertUserData = (usuario) => {
  console.log(usuario);
  document.getElementById('txt-nombre').outerHTML= usuario.nombre;
  document.getElementById('txt-email').outerHTML= usuario.email;
  document.getElementById('txt-telefono').outerHTML= usuario.telefono;

}