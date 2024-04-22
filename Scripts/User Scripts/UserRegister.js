
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()

let campoNombre = document.getElementById('campoNombre').value;
let campoApellido = document.getElementById('campoApellido').value;
let campoCorreo = document.getElementById('campoCorreo').value;
let campoContraseña = document.getElementById('campoContraseña').value;
let botonRegistro = document.getElementById('botonRegistro');
let tipoUsuario = document.getElementById('user-type')

        axios.post('https://render-delcamp.onrender.com/clientes',
        {
            id: Math.floor(Math.random() * 100) + 1,
            nombre: campoNombre,
            apellido: campoApellido,
            Correo: campoCorreo,
            Contraseña: campoContraseña
        })
    .then((dataPost) =>{
        console.log(dataPost.data)
    })
    .catch((epa) => {
        console.log("Error " , epa)
    })
    

tipoUsuario.addEventListener("change", function() {
    let userType = this.value;
    console.log(userType);

    if (userType == "buyer") {
        window.location.href = "../LoginRegister-Farmer/Register-Farmer.html"
    }
})
})