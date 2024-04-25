document.getElementById("Back").addEventListener("click", function () {
    window.history.back();
});

document.getElementById("user_type").addEventListener("change", function () {
    let userType = this.value;
    console.log(userType);
    if (userType == "buyer") {
        window.location.href = "../LoginRegister-Farmer/Login-Farmer.html";
    }
});
//Verification Use
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()

    let campoCorreo = document.getElementById('campoCorreo').value;
    let campoContraseña = document.getElementById('campoContraseña').value;

    axios.get('https://render-delcamp.onrender.com/clientes')
        .then((dataPost) => {
            let flag = false
            dataPost.data.forEach(element => {
                if (element.Correo == campoCorreo && element.Contraseña == campoContraseña) {
                    console.log('Ingresaste ' , element.id)
                    flag = true
                    window.location.href = '../leanding_page.html?IdUserLogin=' + element.id;
                }
                if (!flag) {
                    console.log('No ingresaste')
                }
            });
        })
        .catch((epa) => {
            console.log("Error ", epa)
        })

})