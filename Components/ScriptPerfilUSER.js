// Perfil del usuario
function obtenerDatosUsuario() {
    let BajarId = new URLSearchParams(window.location.search);
    let ValidationId = BajarId.get('IdUserLogin');

    return axios.get(`https://render-delcamp.onrender.com/clientes/${ValidationId}`)
        .then((Clientes) => {
            return { DATA: Clientes.data }
        })
        .catch((ErrorUser) => {
            console.error("Error", ErrorUser);
        });
}

obtenerDatosUsuario()
    .then((Cliente) => {
    console.log("Datos del usuario:", Cliente.DATA)
});
obtenerDatosUsuario();
