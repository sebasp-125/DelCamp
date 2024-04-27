// Perfil del usuario
function obtenerDatosUsuario() {
    let BajarId = new URLSearchParams(window.location.search);
    let ValidationId = BajarId.get('IdUserLogin');

    return axios.get(`https://render-delcamp.onrender.com/clientes/${ValidationId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error("Error", error);
            const ErroTry = document.getElementById('ErroTry')
            ErroTry.innerHTML = ` 
                <h1> Usuario no Iniciado Sesion</h1> ${error.message}
                <button type="button" onclick="Volver(event)" class="btn btn-success">Volver</button>
            `
        });
}

let GroupFunctions = {
    UserLogin: {
        LoginUser: function () {
            window.location.href = '/Components/Login-Register-User/user_login.html'
        },
        RegisterUser: function () {
            window.location.href = '/Components/Login-Register-User/user_register.html'
        },
        LandingPage: function () {
            window.location.href = '/Components/leanding_page.html'
        }
    },
};

function DelateUser(event) {
    event.preventDefault();
    obtenerDatosUsuario()
        .then((user) => {
            let SpecifyIdUser = user.id;
            axios.delete(`https://render-delcamp.onrender.com/clientes/${SpecifyIdUser}`);
            console.warn("removed success!!");
            setTimeout(() => {
                GroupFunctions.UserLogin.RegisterUser();
            }, 2000);
        })
        .catch((err) => {
            console.error("error in delate user ", err);
        })
}

//Imagen de Perfil
function cambiarFile() {
    const ImageProfileUser = document.getElementById('ImageProfileUser');
    if (ImageProfileUser.files && ImageProfileUser.files[0]) {
        const file = ImageProfileUser.files[0];
        const objectURL = URL.createObjectURL(file);

        localStorage.setItem("ImAgen", objectURL);

        document.getElementById('InformationImageProfile').innerHTML = `
            <h4 class="titleInformationX">Information Image the Profile</h4>
            <h5 class="NameImage">Name actually image: <h5 class="Result">${file.name}</h5>
            <h5 class="NameImage">Type the Image: </h5> <h5 class="Result">${file.type}</h5>
            <div class="container">
                <img src="${objectURL}" alt="profile image user selection" srcset="">
                <button class="btn btn-outline-success" type="submit" onclick="reload()">Subir</button>
            </div>
        `;
    }
}

function reload() {
    window.location.reload();
}

// Llamar a cambiarFile() cuando se selecciona un archivo
document.getElementById('ImageProfileUser').addEventListener('change', cambiarFile);
obtenerDatosUsuario()
    .then((user) => {
        let imageProfileLOCAL = localStorage.getItem("ImAgen");
        const sectionInformationUser = document.getElementById('sectionInformationUser');
        sectionInformationUser.innerHTML += ` 
            <img class='ImagenProfileUser' src="${imageProfileLOCAL}" class="img-thumbnail" alt="...">
            <h4>${user.nombre}</h4>
            <h4>${user.apellido}</h4>
            <h4>${user.Correo}</h4>
            <button type="button" class="btn btn-success">Tu Perfil</button>
        `;
    });
