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
                    <div class="descuento"><p>${element.discount}</p></div>
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

// Obtiene una referencia al elemento AdverCompra una sola vez
const AdverCompra = document.getElementById('AdverCompra');
function Icon(id) {
    if (!id) {
        alert("No hay id")
    }
    const carritoIncremental = document.getElementById('carritoIncremental');
    console.log("Id de esa verdura..", id);
    if (id) {
        let TimeActual = new Date()
        comprasContador++;
        AdverCompra.innerHTML = `
            <div class="alert alert-primary" role="alert">
                <p>Total de compras: ${comprasContador} </p>
                <p>${TimeActual}</p>
                <h6>Identificación producto: ${id} </h6>
            </div>
        `;

        setTimeout(function () {
            AdverCompra.innerHTML = '';
        }, 5000);
    }
    carritoIncremental.textContent = `Carrito ${comprasContador}`;
}
