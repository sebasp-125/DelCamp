const ofertas = document.querySelector('.ofertas');
const mensajeCargando = document.createElement('div');

mensajeCargando.textContent = 'Cargando productos...';
ofertas.appendChild(mensajeCargando);

let cantidadProductos = 0;
function tryS() {
    return new Promise((resolve) => {
        try {
            axios.get('https://render-delcamp.onrender.com/productos')
                .then((product) => {
                    console.log(product.data);
                    ofertas.removeChild(mensajeCargando);
                    product.data.forEach(element => {
                        ofertas.innerHTML += `
                        <div class="producto">
                            <div class="descuento"><p>${element.discount}% DTO.</p></div>
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
                    resolve({ CANTIDAD: cantidadProductos });
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
        console.log(success);
        let epa = success.CANTIDAD
        console.log("Object ", epa);
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

// Obtiene una referencia al elemento AdverCompra una sola vez
const AdverCompra = document.getElementById('AdverCompra');

function Icon(id) {
    const carritoIncremental = document.getElementById('carritoIncremental');

    console.log("Id de esa verdura..", id);
    if (id) {
        let TimeActual = new Date()
        comprasContador++;
        AdverCompra.innerHTML = `
            <div class="alert alert-primary" role="alert">
                <p>Total de compras: ${comprasContador} </p>
                <h6>Identificación producto: ${id} </h6>
            </div>
        `;

        setTimeout(function () {
            AdverCompra.innerHTML = '';
        }, 5000);
    }
    carritoIncremental.textContent = `Carrito ${comprasContador}`;
}
