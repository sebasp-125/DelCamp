document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const Gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;

    axios.get('https://render-delcamp.onrender.com/campesinos')
        .then((response) => {
            console.log(response);w
            let validation = false;
            response.data.forEach(Validacion => {
                Validacion.correo == Gmail && Validacion.password == password ? (
                    validation = true, console.log("Yes!"), window.location.href = "/Scripts/ProfileFarmer.html?id=" + Validacion.id)
                    : false;
            });
            !validation ? console.log("No!") : null;
        })
        .catch((error) => {
            console.error('Error', error);
        });
});
