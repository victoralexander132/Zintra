const modeloUsuario = window.location.href.split('=').pop().substring(1);
const urlProductos = "https://zintra-api.herokuapp.com/api/Producto/all";
const $contenedorPadre = document.getElementById('tarjetaProducto');


const catchProducts = async (modeloUsuario) => {
  // const response = await fetch(urlProductos);
	const response = await fetch(urlProductos);
  const datos = await response.json();
    datos.forEach(element => {
    if (element.modelo.includes(modeloUsuario) || modeloUsuario=='todos') {
      const infoProducto = {
        				id: element.producto_id,
        				nombre: element.nomProduct,
        				descripcion: element.descripcion,
        				precio: element.precio,
        				url: element.url,
        			};
      
      const template = `
      <div class="col mb-5 grow">
      <div class="card h-100 ml-auto mr-auto">
      <img id="imgCard" src="${infoProducto.url}" class="card-img-top" alt="${infoProducto.url}"/>
      <div class="card-body color-card">
      <p class="card-text id" style="display:none">${element.producto_id}</p>
      <p class="card-text src" style="display:none">${element.url}</p>
      <h5 class="card-title titulo">${infoProducto.nombre}</h5>
      <p class="card-text">${infoProducto.descripcion}</p>
      <p class="card-text precio">\$${infoProducto.precio}.00</p>
      <button class="agregar">Agregar al carrito</button></div>
      </div>
      </div>
      </div>
      `;
      $contenedorPadre.innerHTML += template;
    } else {
    }
    });

}
catchProducts(modeloUsuario);


/* FILTRO */
const $filtros = document.querySelectorAll('select')

$filtros.forEach((filtro) => {

    filtro.addEventListener('change', () => {

        fetch(urlProductos).then(resp => resp.json().then(datos => {

            const arrProductos = datos
            $contenedorPadre.innerHTML = ''
    
            arrProductos.forEach(producto => {  
        
                if (producto.nomProduct.includes(document.getElementById('tipo').value) || producto.color.includes(document.getElementById('color').value)){
                    
                    
                    const infoProducto = {
                        id : producto.producto_id,
                        nombre : producto.nomProduct,
                        descripcion : producto.descripcion,
                        precio : producto.precio,
                        url : producto.url
                    }
            
                    const template =  `
                                    <div class="col mb-5 grow">
                                        <div class="card h-100 ml-auto mr-auto" >
                                            <img id="imgCard" src="${infoProducto.url}" class="card-img-top" alt="${infoProducto.descripcion}" />
                                            <div class="card-body color-card">
                                                <p class="card-text id" style="display:none">${producto.producto_id}</p>
                                                <p class="card-text src" style="display:none">${producto.url}</p>
                                                <h5 class="card-title titulo">${infoProducto.nombre}</h5>
                                                <p class="card-text">${infoProducto.descripcion}</p>
                                                <p class="card-text precio">\$${infoProducto.precio}.00</p>
                                                <button class="agregar">Agregar al carrito</button></div>
                                            </div>  
                                        </div>
                                    </div>
                                        `
                    $contenedorPadre.innerHTML += template
                }
            })
        }))	
    })
})


const $cards = document.getElementById('cards');
const $items = document.getElementById('items');
const $footer = document.getElementById('footer');
const $templateCard = document.getElementById('template-card').content;
const $templateCarrito = document.getElementById('template-carrito').content;
const $templateFooter = document.getElementById('template-footer').content;
const fragment = document.createDocumentFragment();
const $btnComprar = document.getElementById('btnComprarr');

// Botón comprar que redirecciona a dirección.html
$btnComprar.addEventListener('click', (e) => {

	if (document.querySelector('.totalC').textContent.includes('$')) {
		// Cambiando propiedades a enteros porque así lo pide la API
		Object.values(cesta).forEach((producto) => {
			producto.precio = parseInt(producto.precio.replace(/[$]/g, ''));
			producto.producto_id = parseInt(producto.producto_id)
		})
		window.location.href = './direccion.html';
	}
});

//Espacio para agregar compras
let cesta = {};

//al cargar, consulta y recupera localStorage (si es que aplica)
document.addEventListener('DOMContentLoaded', () => {
	if (localStorage.getItem('cesta')) {
		cesta = JSON.parse(localStorage.getItem('cesta'));
		actualizaCesta();
	}
});

//Tarjeta, o usar $cards es =
$contenedorPadre.addEventListener('click', (e) => {
	iniciaAdd(e);
});

//Item de cesta
$items.addEventListener('click', (e) => {
	modificaCantidades(e);
});

//btn Agregar a carrito, obtiene los datos de la tarjeta
const iniciaAdd = (e) => {
	if (e.target.classList.contains('agregar')) {
		//Obtiene contenido de card
		generaCesta(e.target.parentElement);
	}
	e.stopPropagation();
};

const generaCesta = (objeto) => {

	const producto = {
		producto_id: objeto.querySelector('.id').textContent,
		nombre: objeto.querySelector('.titulo').textContent,
		precio: objeto.querySelector('.precio').textContent,
		cant_productos: 1,
		url: objeto.querySelector('.src').textContent,
	};

	//si el producto ya esta en la cesta, aumenta cantidad
	if (cesta.hasOwnProperty(producto.producto_id)) {
		producto.cant_productos = cesta[producto.producto_id].cantidad + 1;
	}

	//Actualiza cesta (hace una copia de los datos del producto)
	cesta[producto.producto_id] = { ...producto };
	actualizaCesta();
};

const actualizaCesta = () => {

	$items.innerHTML = '';

	//recorremos la coleccion, se usa object para poder usar foreach (un obj no puede recorrerse como array)
	Object.values(cesta).forEach((producto) => {
		$templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre;
		$templateCarrito.querySelectorAll('td')[1].textContent = producto.cant_productos;
		$templateCarrito.querySelector('.btn-outline-success').dataset.id = producto.producto_id;
		$templateCarrito.querySelector('.btn-outline-danger').dataset.id = producto.producto_id;

		const prec = producto.cant_productos * producto.precio.replace(/[$]/g, '');
		$templateCarrito.querySelector('span').textContent = prec.toFixed(2);

		const clone = $templateCarrito.cloneNode(true);
		fragment.appendChild(clone);
	});
	$items.appendChild(fragment);

	actualizaTotales();

	//envia a localStorage
	localStorage.setItem('cesta', JSON.stringify(cesta));
};

const actualizaTotales = () => {
	$footer.innerHTML = '';

	if (Object.keys(cesta).length === 0) {
		$footer.innerHTML = `
                             <th scope="row" colspan="5">Carrito vacío - inicie compra</th>
            `;

		//bota para que no continue pintando (caso de btnVaciar, --)
		return;
	}

	//recorre la cesta y va acumulando las valores de cada columna
	const nCantidad = Object.values(cesta).reduce((acumulador, { cant_productos }) => acumulador + cant_productos, 0);
	const nPrecio = Object.values(cesta).reduce((acumulador, { cant_productos, precio }) => acumulador + cant_productos * precio.replace(/[$]/g, ''), 0);

	//pinta totales
	$templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
	$templateFooter.querySelector('span').textContent = nPrecio.toFixed(2);

	const clone = $templateFooter.cloneNode(true);
	fragment.appendChild(clone);
	$footer.appendChild(fragment);

	
	const btnVaciar = document.getElementById('vaciar-carrito');
	btnVaciar.addEventListener('click', () => {
		cesta = {};
		actualizaCesta();
	});
};

const modificaCantidades = (e) => {
	

	//Click en boton + (cesta)
	if (e.target.classList.contains('btn-outline-success')) {
		const producto = cesta[e.target.dataset.id];
		producto.cant_productos++;
		cesta[e.target.dataset.id] = { ...producto };

		actualizaCesta();
	}

	//Click en boton - (cesta)
	if (e.target.classList.contains('btn-outline-danger')) {
		const producto = cesta[e.target.dataset.id];
		producto.cant_productos--;

		if (producto.cant_productos === 0) {
			delete cesta[e.target.dataset.id];
		}
		actualizaCesta();
	}

	e.stopPropagation();
};
