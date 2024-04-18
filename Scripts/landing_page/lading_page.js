let cantidadProductos=null
const ofertas =document.querySelector('.ofertas')
try {
    axios.get('https://render-delcamp.onrender.com/productos')
    .then((product)=> {
        console.log(product.data);
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
        `
        cantidadProductos += 1

        });
        ofertas.style.width = `calc(280px * ${cantidadProductos})`;
    })
} catch (error) {
    console.log('error al caragr el producto', error);
}




