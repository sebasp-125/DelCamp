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
            }
            if(!flag){
                console.log('No ingresaste')
            }
        });
        console.log(dataPost.data)
        console.log(dataPost.contraseña)
        console.log(dataPost.correo)
    })
    .catch((epa) => {
        console.log("Error " , epa)
    })
    
})

