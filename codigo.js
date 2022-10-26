let carrito = [];
let contenedor = document.getElementById("stock-productos");
let tablaBody = document.getElementById("tabla-productos");
let total = document.getElementById("total");




function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
        <div class="col-sm-3 justify-content-center">
        <div class="card mt-3" style="width: 28rem;">
            <img src="${producto.foto}" class="img-fluid" alt=${producto.nombre}>
            <div class="card-body">
                <h5 class="card-title text-center">${producto.nombre}</h5>
                <p class="card-text text-center"><strong>$${producto.precio}</strong></p>
                <div class="d-flex justify-content-center">
                    <a role="button" id="btn${producto.id}" href="#" role="button" class="btn btn-danger">Comprar</a>
                </div>
            </div>
        </div>
        `;
    }
    productos.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
            agregarAlCarrito(producto);
        });
    })
}
renderizarProductos();






function agregarAlCarrito(producto){
    carrito.push(producto);
    console.table(carrito);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto '+producto.nombre,
        text: 'Agregado al carrito!',
        showConfirmButton: false,
        timer: 1500
      })
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
        </tr>
    `;
    let preciosAcumulados = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0);
    console.log(preciosAcumulados);
    total.innerText="Total a pagar $: "+preciosAcumulados;

}