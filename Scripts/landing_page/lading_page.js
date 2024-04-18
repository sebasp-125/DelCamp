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
                        <button>Agregar</button>
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
