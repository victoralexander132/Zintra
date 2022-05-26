const urlProductos = "assets/api/db.json"
const $contenedorPadre = document.getElementById('tarjetaProducto')


fetch(urlProductos).then(resp => resp.json().then(datos => {

    const arrProductos = datos
    arrProductos.forEach(producto => {

        const infoProducto = {
            id : producto.id,
            nombre : producto.nombre,
            descripcion : producto.descripcion,
            precio : producto.precio,
            url : producto.url
        }

        const template =  `
                        <div class="col mb-5 grow">
                        
                            <div class="card h-100 ml-auto mr-auto" >
                                <img src="${infoProducto.url}" class="card-img-top" alt="..." />
                                <div class="card-body color-card ">
                                    <p class="card-text id">${producto.id}</p>
                                    <h5 class="card-title titulo">${infoProducto.nombre}</h5>
                                    <p class="card-text">${infoProducto.descripcion}</p>
                                    <p class="card-text precio">${infoProducto.precio}</p>
                                    <button class="agregar">Agregar al carrito</button>
                                </div>
                            </div>
                        
                        </div>
                            `
        $contenedorPadre.innerHTML += template
    })
}))


const $cards = document.getElementById('cards')
const $items = document.getElementById('items')
const $footer = document.getElementById('footer')
const $templateCard = document.getElementById('template-card').content
const $templateCarrito = document.getElementById('template-carrito').content
const $templateFooter = document.getElementById('template-footer').content


const fragment = document.createDocumentFragment()



//Espacio para agregar compras
let cesta = {} 

//al cargar documento, consulta y recupera localStorage (si es que aplica)
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cesta')){
        cesta = JSON.parse(localStorage.getItem('cesta'))
        console.log(cesta)
        actualizaCesta()
    }
})

//Se escucha click de la tarjeta, o usar $cards es =
$contenedorPadre.addEventListener('click', e => {
   iniciaAdd(e) 
})

$items.addEventListener('click', e =>{
    modificaCantidades(e)
})

//Si es clic en zona, obtiene los datos de la tarjeta
const iniciaAdd = e => {

    if (e.target.classList.contains('agregar')){

        //Obtiene contenido de card
        generaCesta(e.target.parentElement)
        console.log(e.target.parentElement) // **
    }
   
    e.stopPropagation()
}


const generaCesta = objeto => {
    //console.log(objeto)

    //Preparacion de datos de contenido card
    const producto = {
        id : objeto.querySelector('.id').textContent,
        nombre : objeto.querySelector('.titulo').textContent,
        precio : objeto.querySelector('.precio').textContent,
        cantidad : 1
    }
    console.log(producto)

    //si producto ya esta en la cesta, aumenta cantidad
    if (cesta.hasOwnProperty(producto.id)){
        producto.cantidad = cesta[producto.id].cantidad + 1 
    }

    //Actualiza cesta (hace una copia de los datos del producto)
    cesta[producto.id] = {...producto}
    actualizaCesta()
    
}

const actualizaCesta = () => {
    console.log(cesta)

    $items.innerHTML = ''

    //recorremos la coleccion, se usa object para poder usar foreach (un obj no puede recorrerse como array)
    Object.values(cesta).forEach(producto => {

        $templateCarrito.querySelector('th').textContent = producto.nombre
        $templateCarrito.querySelectorAll('td')[0].textContent = producto.cantidad
        $templateCarrito.querySelector('.btn-outline-success').dataset.id = producto.id
        $templateCarrito.querySelector('.btn-outline-danger').dataset.id = producto.id

        const prec = producto.cantidad * producto.precio.replace(/[$]/g,'')
        $templateCarrito.querySelector('span').textContent = prec.toFixed(2)
        
        const clone = $templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    $items.appendChild(fragment)

    actualizaTotales();

    //guarda en localStorage
    localStorage.setItem('cesta', JSON.stringify(cesta))
}

const actualizaTotales = () => {
    $footer.innerHTML = ''

    if (Object.keys(cesta).length ===0){

        $footer.innerHTML = `
                             <th scope="row" colspan="5">Carrito vacío - inicie compra</th>
            `
            
        //hacemos que al caer aqui se salga para que no continue pintando (caso de btnVaciar)
        return
    }

    //recorre la cesta y va acumulando las valores de cada columna
    const nCantidad = Object.values(cesta).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0)
    const nPrecio = Object.values(cesta).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio.replace(/[$]/g,''), 0)

    console.log(nCantidad)
    console.log(nPrecio)

    //pinta totales
    $templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
    $templateFooter.querySelector('span').textContent = nPrecio.toFixed(2);

    const clone = $templateFooter.cloneNode(true);
    fragment.appendChild(clone)
    $footer.appendChild(fragment)

    //
    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        cesta = {}
        actualizaCesta()
    })
}

const modificaCantidades = e => {
    console.log(e.target)

    //Cuando hay click sobre boton + (cesta)
    if (e.target.classList.contains('btn-outline-success')){
        console.log(cesta[e.target.dataset.id])
        const producto = cesta[e.target.dataset.id]
        producto.cantidad++
        cesta[e.target.dataset.id] = {...producto}

        actualizaCesta()
    }

    //Cuando hay click sobre boton - (cesta)
    if (e.target.classList.contains('btn-outline-danger')){
        console.log(cesta[e.target.dataset.id])
        const producto = cesta[e.target.dataset.id]
        producto.cantidad--

        if(producto.cantidad === 0){
            delete cesta[e.target.dataset.id]  
        }
        actualizaCesta()
    }

    e.stopPropagation()
}



