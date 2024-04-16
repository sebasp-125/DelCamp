const ofertas =document.querySelector('.ofertas')
try {
    axios.get('https://render-delcamp.onrender.com/campesinos')
    .then((product)=> {
        product.data.productos_disponibles.forEach(element => {
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
        });
        
    })
} catch (error) {
    console.log('error al caragr el producto', error);
}


