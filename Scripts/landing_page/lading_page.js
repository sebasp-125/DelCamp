const ofertas = document.querySelector('.ofertas');
const mensajeCargando = document.createElement('div');

mensajeCargando.textContent = 'Cargando productos...';
ofertas.appendChild(mensajeCargando);

let cantidadProductos = 0;
function tryS() {
    return new Promise((resolve) => {
        try {
            ofertas.removeChild(mensajeCargando);
            axios.get('https://render-delcamp.onrender.com/productos')
                .then((product) => {
                    product.data.forEach(element => {
                        ofertas.innerHTML += `
                        <div class="father">
                            <div class="producto">
                                <div class="descuento"><p>45% DTO.</p></div>
                                <div class="foto_producto"><img src="${element.foto}" alt=""></div>
                                <div class="informacion_producto">
                                    <div>
                                        <h4 class="PrecioProducto"><b>${element.precio}$</b></h4><br>
                                        <p class="nombre_producto">${element.nombre_producto}</p>
                                        <p class="descriptionElement"><strong>${element.descripcion}</strong></p>
                                    </div>
                                    <button class="btnProductoAndres" onclick="Icon(${element.id})">Agregar</button>
                                </div>
                            </div>
                        </div>
                    `;
                        cantidadProductos++;
                    });
                    resolve({ CANTIDAD: cantidadProductos, DATT: product.data });
                    ofertas.style.width = `${280 * cantidadProductos}px`;
                });

        } catch (error) {
            console.log('Error al cargar el producto', error);
            ofertas.removeChild(mensajeCargando);
        }
    })
}

function epass() {
    tryS().then((success) => {
        let epa = success.CANTIDAD
        // traslacion de productos
        let contador_traslacion = 0;
        let total_productos = 305 * cantidadProductos
        const trasladar_derecha = () => {
            contador_traslacion = contador_traslacion + 1220;
            if (contador_traslacion <= total_productos) {
                ofertas.style.transform = `translate(${contador_traslacion}px)`
                console.log(contador_traslacion);
            }

        }
        const trasladar_izquierda = () => {
            if (contador_traslacion <= total_productos && contador_traslacion >= 0) {
                contador_traslacion = contador_traslacion - 1220;
                ofertas.style.transform = `translate(-${contador_traslacion}px)`
                console.log(contador_traslacion);
            }
        }

        const traslacion_btn_izquierdo = document.getElementById('traslacion_btn_izquierdo')
        const traslacion_btn_derecho = document.getElementById('traslacion_btn_derecho')

        traslacion_btn_izquierdo.addEventListener('click', trasladar_izquierda)
        traslacion_btn_derecho.addEventListener('click', trasladar_derecha)
    })
}
epass()
let comprasContador = 0;
let carrito = []
// Obtiene una referencia al elemento AdverCompra una sola vez
const AdverCompra = document.getElementById('AdverCompra');
const carritoIncremental = document.getElementById('carritoIncremental');

function Icon(id) {
    console.log("Id de esa verdura..", id);
    if (id) {
        comprasContador++;
        AdverCompra.innerHTML = `
            <div class="alert alert-primary" role="alert">
                <p>Total de compras: ${comprasContador} </p>
                <h6>Identificación producto: ${id} </h6>
            </div>
        `;
        carrito.push(id)
        console.log(carrito);
    }
    carritoIncremental.textContent = `Carrito ${comprasContador}`;
}

// enviar array
carritoIncremental.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = '/index.html?idproduct=' + carrito;
})

//Enviar id USer Registrado
document.getElementById('IMAGENPROFILE').addEventListener('click', function (event) {
    event.preventDefault();
    let BajarId = new URLSearchParams(window.location.search);
    let ValidationId = BajarId.get('IdUserLogin')
    console.log(ValidationId);
    window.location.href = "/Components/PerfilUser.html?IdUserLogin=" + ValidationId
});


