const loginForm = document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const Gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;

    axios.get('https://render-delcamp.onrender.com/campesinos')
        .then((response) => {
            let validation = false;
            response.data.forEach(Validacion => {
                Validacion.correo == Gmail && Validacion.password == password ? (
                    validation = true, console.log("Yes!"), window.location.href = "/Scripts/ProfileFarmer.html?id=" + Validacion.id)
                    : false;
            });
            !validation ? (console.log("No!"),error_message(),
                errorMessage.textContent = "Contraseña Incorrecta") : null;

                function error_message() {
                    document.getElementById('error-message').innerHTML = 'Contraseña o Correo incorrecto...'
                }

                function happy_message() {
                    document.getElementById('happy-message').innerHTML = 'Iniciando Seccion...'
                }
        })
        .catch((error) => {
            console.error('Error', error);
        });
});
