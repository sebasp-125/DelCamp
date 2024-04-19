const ofertas = document.querySelector('.ofertas');
const mensajeCargando = document.createElement('div');

mensajeCargando.textContent = 'Cargando productos...';
ofertas.appendChild(mensajeCargando);

let cantidadProductos = 0;
try {
    axios.get('https://render-delcamp.onrender.com/productos')
        .then((product) => {
            console.log(product.data);
            ofertas.removeChild(mensajeCargando);
            product.data.forEach(element => {
                ofertas.innerHTML += `
                <div class="producto">
                    <div class="descuento"><p>32% dto.</p></div>
                    <div class="foto_producto"><img src="${element.foto}" alt=""></div>
                    <div class="informacion_producto">
                        <div>
                            <p><b>${element.precio}</b></p><br>
                            <p>${element.nombre_producto}</p>
                        </div>
                        <button onclick="Icon(${element.id_producto})">Agregar</button>
                    </div>
                </div>
            `;
                cantidadProductos++;
            });

            ofertas.style.width = `${280 * cantidadProductos}px`;
        });
} catch (error) {
    console.log('Error al cargar el producto', error);
    ofertas.removeChild(mensajeCargando);
}
let comprasContador = 0;
function Icon(id) {
    const carritoIncremental = document.getElementById('carritoIncremental')
    AdverCompra = document.getElementById('AdverCompra')

    console.log("Id de esa verdura..", id);
    if (id) {
        let TimeActual = new Date()
        comprasContador++;

        AdverCompra.innerHTML += `
        <div class="ContentAdv">
        <h3>Haz realizado ${comprasContador} compras</h3>
        <p>Producto identificado con id ${id}</p>
        <p><strong>${TimeActual}</strong></p>
        </div>
        `
        setTimeout(function () {
            let AdverCompra = document.getElementById('AdverCompra')
            if (AdverCompra) {
                AdverCompra.remove()
            }
        }, 5000)
    }
    carritoIncremental.textContent = `Carrito ${comprasContador}`;
}
