
let campoNombre = document.getElementById('campoNombre').value;
let campoApellido = document.getElementById('campoApellido').value;
let campoCorreo = document.getElementById('campoCorreo').value;
let campoContraseña = document.getElementById('campoContraseña').value;
let botonRegistro = document.getElementById('botonRegistro');


document.getElementById("user-type").addEventListener("change", function() {
    let userType = this.value;
    console.log(userType);

    if (userType == "buyer") {
        window.location.href = "../LoginRegister-Farmer/Register-Farmer.html"
    } else if (userType == "seller") {
        //Colocar la ruta al Login de comprador
    }
});

    try {
        botonRegistro.addEventListener('submit',function(){
            console.log('Registrado')
            axios.post('https://render-delcamp.onrender.com/clientes'),
        {
            id: Math.floor(Math.random() * 100) + 1,
            nombre: campoNombre,
            apellido: campoApellido,
            Correo: campoCorreo,
            Contraseña: campoContraseña
        }
    })
    .then((dataPost) =>{
        console.log(dataPost.data)
    })
    } catch (error) {
        console.log(error,'No se registró')
    }
