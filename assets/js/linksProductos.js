
const kubik = () => {
  const busqueda = 'Kubik';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const ziclick = () => {
  const busqueda = 'Ziclik';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const around = () => {
  const busqueda = 'A-round';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const sunny = () => {
  const busqueda = 'Sunny';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const ziklos = () => {
  const busqueda = 'Ziklos';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const plane = () => {
  const busqueda = 'Plane';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const todos = () => {
  const busqueda = 'todos';
  window.location.href = `./productos.html?nombre=?${busqueda}`
}

const accessClient = () => {
	const token = localStorage.getItem('token');
	if(!token) {
			url = window.location;
			const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
			location.href = path +  './login.html';
		} else{
			url = window.location;
			const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
			location.href = path +  './client.html';

		}
	}