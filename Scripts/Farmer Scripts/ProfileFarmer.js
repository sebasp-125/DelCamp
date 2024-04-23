try {
    const contentProfile_Farmer = document.querySelector('.contentProfile_Farmer');
    const ProductosStack_availables = document.querySelector('.ProductosStack_availables')

    let urlParameters = new URLSearchParams(window.location.search);
    const ValidacionId = urlParameters.get('id');
    axios.get(`https://render-delcamp.onrender.com/campesinos/${ValidacionId}`)
        .then((ParametersId) => {
            contentProfile_Farmer.innerHTML += `
            <div class="content-profile">
            <div class="contentImage">
            <img class="ProfileFarmer" src="${ParametersId.data.foto}" alt="Image the Farmer" />
            </div>
            <h1>Correo Electronico: ${ParametersId.data.correo}</h1>
            <h1>Nombre de la Finca: ${ParametersId.data.nombre_finca}</h1>
            <h1>Ubicacion de la Propiedad: ${ParametersId.data.ubicacion_finca}</h1>
            <a href="#">Telefono: ${ParametersId.data.telefono}</a>
            </div>`;

            ParametersId.data.productos_disponibles.forEach(Stock => {
                ProductosStack_availables.innerHTML += `
                    <img src=${Stock.foto} alt="Product Stack Farmer" width="300px" />
                    <h1>${Stock.nombre_producto}</h1>
                    <p>${Stock.descripcion}</p>
                    <h3>${Stock.precio}</h3>
                    <button>Eliminar Producto <strong>${Stock.nombre_producto}</strong></button>
                `;
            });

            const deleteBtn = document.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                DeleteParameter(ValidacionId);
            });
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });
} catch (error) {
    console.error("Error al recibir la id ", error);
}

// Eliminar Usuario
document.getElementById("Eliminar").addEventListener("click", EliminarUser);
function EliminarUser(event) {
    event.preventDefault();
    console.log("entro");
    axios.delete(`https://render-delcamp.onrender.com/campesinos/${ValidacionId}`)
        .then((response) => {
            console.log("Eliminado: ", response.data);
        })
        .catch((error) => {
            console.error("Fallo: ", error);
        })
        .finally(() => {
            console.log("Se ha intentado eliminar el usuario.");
        });
}

//AddProduct
// Seleccionar el elemento con clase "add" y agregar un evento de clic
document.querySelector(".add").addEventListener("click", function(event) {
    console.log("entro");
    event.preventDefault();
    const productoNewPage = "Components/NewProductoFarmer/ProductoNew.html";
    window.location.href = productoNewPage;
});







