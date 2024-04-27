document.getElementById("Farmers").innerHTML = "<h6 class>Cargando...</h6>";

axios.get('https://render-delcamp.onrender.com/campesinos')
    .then((response) => {
        let AllProducts = response.data;
        console.warn(AllProducts);

        let farmersHTML = "";
        AllProducts.forEach((element) => {
            farmersHTML += `
            <div class="Father">
            <p class="NameFinca">${element.ubicacion_finca}</p>
            <h1>${element.nombre_finca}</h1>
            <h4></h4>
            <h5></h5>
            </div>
               
            `;
            element.productos_disponibles.forEach((disponible) => {
                farmersHTML += `    
                <div class="card" style="width: 18rem;">
                <img src="${disponible.foto}  " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${disponible.descripcion}</h5>
                <h5 class="card-title">${disponible.precio}</h5>
                <h5 class="card-title">${disponible.descuento}</h5>
               <a href="#" class="btn btn-primary">¿Lo quieres comprar?</a>
                </div>
                </div>
                
                `;
            });
        });
        // Actualizar el DOM con la información de Agricultores y Productos
        document.getElementById("Farmers").innerHTML = farmersHTML;
    })
    .catch((error) => {
        console.error("Error al obtener los agricultores: ", error);
        document.getElementById("Farmers").innerHTML = "<p>Error al obtener los datos. Por favor, intenta de nuevo más tarde.</p>";
    });
