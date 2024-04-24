const Back = document.getElementById('Back').addEventListener('click', function() {
    console.log("Yes");
    window.history.back();
})

//me tira un error en la conexion del html con el js, revisar linea 24, Script src html

//Print all the products
function PrintProducts() {
    AllProduct().then((Print) => {
        let products = Print.AllProducts
        products.forEach((printpro) => {
            let AllProductsContainer = document.getElementById("AllProducts");
                    AllProductsContainer.innerHTML += `
            <img width="200px" src="${printpro.foto}" alt="${printpro.id}" />
            <h1>${printpro.nombre_producto}</h1>
            <h3>${printpro.descripcion}</h3>
            <h4><strong>${printpro.precio}</strong></h4>
            `
        })
    })
}

function AllProduct() {
    //Print mesagge de reload products
    const mensajeCargando = document.createElement('div');
    mensajeCargando.textContent = 'Cargando productos...';
    document.getElementById("AllProducts").appendChild(mensajeCargando);

    return axios.get('https://render-delcamp.onrender.com/productos')
        .then((response) => {
            let AllProducts = document.getElementById("AllProducts");
            //Quitar mensaje cuando se resuleve la promesa
            AllProducts.removeChild(mensajeCargando);
            return { AllProducts: response.data };
        })
        .catch((error) => {
            console.error("Error, download products: ", error);
        });
}

// Value for Input
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('SearchInput');
    searchInput.addEventListener('input', function () {
        AllProduct().then((result) => {
            let products = result.AllProducts;
            let valueInput = searchInput.value.toLowerCase();
            let filter = products.filter(product => {
                return product.nombre_producto.toLowerCase().includes(valueInput) || product.descripcion.toLowerCase().includes(valueInput);
            });
            
            // Vaciar el contenido del contenedor antes de agregar los productos filtrados
            let AllProductsContainer = document.getElementById("AllProducts");
            AllProductsContainer.innerHTML = '';

            filter.forEach(Search => {
                AllProductsContainer.innerHTML += `
                <img width="200px" src="${Search.foto}" alt="${Search.id}" />
                <h1>${Search.nombre_producto}</h1>
                <h3>${Search.descripcion}</h3>
                <h4><strong>${Search.precio}</strong></h4>
                `;
            });
        });
    });
});



//Map product Search 
