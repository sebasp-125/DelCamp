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
            const ErroTry = document.getElementById('ErroTry')
            ErroTry.innerHTML = ` 
                <h1> Usuario no Iniciado Sesion</h1> ${ErrorUser.message}
                <button type="button" onclick="Volver(event)" class="btn btn-success">Volver</button>
                `
        });
}

function Volver(event) {
    event.preventDefault();
    window.location.href = '/Components/Login-Register-User/user_login.html'
}


obtenerDatosUsuario()
    .then((Cliente) => {
        let ObjeArray = Object.values(Cliente)
        const sectionInformationUser = document.getElementById('sectionInformationUser')
        ObjeArray.forEach((User) => {
            sectionInformationUser.innerHTML += ` 
        <img class='ImagenProfileUser' src="https://cdn.discordapp.com/attachments/1219748133177655306/1232860477806088243/historiaDelCamp.png?ex=662afe4b&is=6629accb&hm=04565fc1481d1d2b88d92d5e77043cba9254067b496e522f5a45e86755ddc8e7&" class="img-thumbnail" alt="...">
        <h2>${User.nombre}</h2>
        <h4>${User.apellido}</h4>
        <h4>${User.Correo}</h4>
        <h4>${User.apellido}</h4>
        <button type="button" class="btn btn-success">Success</button>
            `
        })
    });

obtenerDatosUsuario();
//Imagen de Perfil
function cambiarFile() {
    const ImageProfileUser = document.getElementById('ImageProfileUser');
    if (ImageProfileUser.files && ImageProfileUser.files[0]) {
        const file = ImageProfileUser.files[0];
        const objectURL = URL.createObjectURL(file);

        //------HERE------
        localStorage.setItem("ImAgen", objectURL)
        let imageProfileLOCAL = localStorage.getItem("ImAgen")
        console.log(imageProfileLOCAL);
        //------HERE------

        document.getElementById('InformationImageProfile').innerHTML = `
        <h4 class="titleInformationX">Information Image the Profile</h4>
        <h5 class="NameImage">Name actually image: <h5 class="Result">${file.name}</h5>
        <h5 class="NameImage">Type the Image: </h5> <h5 class="Result">${file.type}</h5>
        <div class="container">

        <img src="${imageProfileLOCAL}" alt="profile image user selection" srcset="">

        <button class="btn btn-outline-success" type="submit">Subir</button>
</div>

        `;
    }
}

//Aplly localStorange in the image profile and information user. for that when updoloand the page not delate information user 

