document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const correoValue = document.getElementById('correo').value;
    const nombreFincaValue = document.getElementById('text').value;
    const descripcionValue = document.getElementById('descripcion').value;
    const ubicacionValue = document.getElementById('ubicacion').value;
    const telefonoValue = document.getElementById('telefono').value;
    const passwordValue = document.getElementById('password').value;
    const terminosChecked = document.getElementById('terminos').checked;


    axios.post('https://render-delcamp.onrender.com/campesinos', {
        id: Math.floor(Math.random() * 100) + 1,
        nombre_finca: nombreFincaValue,
        ubicacion_finca: ubicacionValue,
        correo: correoValue,
        password: passwordValue,
        telefono: telefonoValue,
        descripcionFarmer: descripcionValue,
        terminos: terminosChecked
    })
        .then((dataPost) => {
            let userId = dataPost.data.id
            console.log("Usuario registrado con ID:", userId);
            window.location.href = '/Components/NewProductoFarmer/ProductoNew.html?NewUserId=' + userId;
        })
        .catch((error) => {
            console.error('Error up Post', error);
        });
});
