document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
});

const $mostrarDetalle = document.querySelector('.boton-detail')


const detalleCesta = {}
$mostrarDetalle.addEventListener('click', e => {
    if (localStorage.getItem('cesta')){
        cesta = JSON.parse(localStorage.getItem('cesta'))
        console.log(cesta)
    }
})


const actualizaDetalle = () => {

    //recorremos la coleccion, se usa object para poder usar foreach (un obj no puede recorrerse como array)
    Object.values(cesta).forEach(producto => {

        document.querySelector('th').textContent = producto.nombre
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