// Función para retroceder en la historia del navegador
document.getElementById("Back").addEventListener("click", function () {
    window.history.back();
});

// Redirección basada en el tipo de usuario seleccionado
document.getElementById("user_type").addEventListener("change", function () {
    let userType = this.value;
    console.log(userType);
    if (userType == "buyer") {
        window.location.href = "../LoginRegister-Farmer/Login-Farmer.html";
    }
});

// Verificación de credenciales al enviar el formulario
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let campoCorreo = document.getElementById('campoCorreo').value;
    let campoContraseña = document.getElementById('campoContraseña').value;
    axios.get('https://render-delcamp.onrender.com/clientes')
        .then((dataPost) => {
            let flag = false;
            let TimeReload = 5; // Establecer un valor inicial para TimeReload

            dataPost.data.forEach(element => {
                if (element.Correo === campoCorreo && element.Contraseña === campoContraseña) {
                    console.log('Ingresaste ', element.id);
                    flag = true;
                    let contador = 5; 
                    
                    let intervalo = setInterval(() => {
                        contador--;
                        document.getElementById('TrueFormulario').innerHTML = `
                        <h3>Iniciando con Exito... ${contador}</h3>
                    `;
                        if (contador === 0) {
                            clearInterval(intervalo);
                            window.location.href = '../leanding_page.html?IdUserLogin=' + element.id;
                        }
                    }, 1000);
                }
            });

            if (!flag) {
                console.log('No ingresaste');
                let interval = setInterval(() => {
                    TimeReload--;
                    if (TimeReload === 0) {
                        clearInterval(interval);
                        window.location.reload();
                    } else {
                        document.getElementById('TrueFormulario').innerHTML = `
                            <h3>Correo o Contraseña Incorrecta</h3>
                            <p>Recarga en ${TimeReload} segundos</p>
                        `;
                    }
                }, 1000); // Actualizar cada segundo
            }
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
});
