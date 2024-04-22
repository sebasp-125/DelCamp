tipoUsuario.addEventListener("change", function() {
    let userType = this.value;
    console.log(userType);

    if (userType == "buyer") {
        window.location.href = "../LoginRegister-Farmer/Login-Farmer.html"
    }
})

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault()

let campoCorreo = document.getElementById('campoCorreo').value;
let campoContraseña = document.getElementById('campoContraseña').value;


    axios.get('https://render-delcamp.onrender.com/clientes')
    .then((dataPost) =>{

        let flag = false
        dataPost.data.forEach(element => {
            if(element.Correo==campoCorreo && element.Contraseña==campoContraseña){
                console.log('Ingresaste')
                flag = true
                window.location.href = '/Components/NewProductoFarmer/ProductoNew.html'
            }
            if(!flag){
                console.log('No ingresaste')
            }
        });
    })
    .catch((epa) => {
        console.log("Error " , epa)
    })
    
})

