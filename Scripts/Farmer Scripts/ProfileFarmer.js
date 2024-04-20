try {
    const contentProfile_Farmer = document.querySelector('.contentProfile_Farmer');
    const ProductosStack_availables = document.querySelector('.ProductosStack_availables')

    let urlParameters = new URLSearchParams(window.location.search);
    const ValidacionId = urlParameters.get('id');
    axios.get(`https://render-delcamp.onrender.com/campesinos/${ValidacionId}`)
        .then((ParametersId) => {
            contentProfile_Farmer.innerHTML += `
            <div class="content-profile">
            <img class="ProfileFarmer" src="${ParametersId.data.foto}" alt="Image the Farmer" width="300px" />
            <h1>Correo: ${ParametersId.data.correo}</h1>
            <h1>Finca: ${ParametersId.data.nombre_finca}</h1>
            <h1>Ubicacion: ${ParametersId.data.ubicacion_finca}</h1>
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


const msgDelate_User = document.querySelector('.msgDelate_User');
function DeleteParameter(ValidacionId) {
    if (!confirm("¿Estás seguro de que deseas eliminar este recurso?")) {
        return;
    }
    axios.delete(`https://render-delcamp.onrender.com/campesinos/${ValidacionId}`)
        .then(response => {
            alert('El recurso se ha eliminado exitosamente');
            msgDelate_User.innerHTML = `
            <p>Querido/a ${ValidacionId},</p>
            <p>Queremos informarte que todos los productos de tu stock han sido eliminados con éxito. Además, deseamos comunicarte que tu registro ha sido borrado por completo de Delcamp.</p>
            <p>Entendemos que esta decisión puede tener un impacto significativo en tu experiencia como proveedor agrario, y queremos expresarte nuestro agradecimiento por los servicios agrarios excepcionales que nos has brindado. Tu dedicación y compromiso han sido invaluables para nuestra comunidad y han contribuido de manera significativa a nuestro éxito conjunto.</p>
            <p>Si en el futuro decides regresar, estaremos encantados de darte la bienvenida nuevamente. Mientras tanto, te deseamos todo lo mejor en tus futuros proyectos y emprendimientos agrarios.</p>
            <p>Gracias de nuevo por tu colaboración y dedicación.</p>
            <p>Atentamente,</p>
            <p>El equipo de Delcamp</p>

            <button onclick="redireccionarAInicioSesionAgricultores()">Volver al Inicio</button>
            `;

            function redireccionarAInicioSesionAgricultores() {
                window.location.href = '/Components/LoginRegister-Farmer/Login-Farmer.html';
            }
            //Ojito hay que acomodar bien la parte de cuando elime la cuenta, El window.location e redireccionarlo bien, Landing Page.
        })
        .catch(error => {
            console.error('Error al eliminar el recurso:', error);
        });
}

        


