document.querySelectorAll('.printbutton').forEach(function(element) {
    element.addEventListener('click', function() {
        print();
    });
});

const $mostrarDetalle = document.querySelector('.boton-detail')
const $padredetalle  = document.getElementById('detalleProdd')
let $padreDetalleTotales = document.getElementById('detalleTotales')


let detalleCesta = {}

$mostrarDetalle.addEventListener('click', e => {
    if (localStorage.getItem('cesta')){
        detalleCesta = JSON.parse(localStorage.getItem('cesta'))
        console.log(detalleCesta)
        detalleAddress = JSON.parse(localStorage.getItem('direccion'))
        console.log(detalleAddress);
        document.getElementById('address').innerHTML = `${detalleAddress.ciudad}, ${detalleAddress.address}`
        actualizaDetalle()
    }
})


let actualizaDetalle = () => {

    $padredetalle.innerHTML = ''
    $padreDetalleTotales.innerHTML = ''

    let numeroFila = 0

    Object.values(detalleCesta).forEach(producto => {

        numeroFila++

        template = `
            <tr>
                <th scope="row">${numeroFila}</th>
                <td><img src="${producto.url}" class="img-tabla"></td>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${(producto.cantidad * producto.precio.replace(/[$]/g,'')).toFixed(2) }</td>
            </tr>
            `
        $padredetalle.innerHTML += template
    })


    const nCantidad = Object.values(detalleCesta).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0)
    const nPrecio = Object.values(detalleCesta).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio.replace(/[$]/g,''), 0)

    templatee = `
                <tr>
                    <th scope="row" colspan="3" class="text-center table-active">Total</th>
					<th scope="row" colspan="1" class="text-center table-active">${nCantidad}</th>
					<th scope="row" colspan="1" class="text-center table-active">${nPrecio.toFixed(2)}</th>
                </tr>
    `
    $padreDetalleTotales.innerHTML += templatee
    
}
