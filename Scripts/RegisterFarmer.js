import axios from 'axios'

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const descripcion = document.getElementById('descripcion').value;
    const productos = document.getElementById('productos').value;
    const ubicacion = document.getElementById('ubicacion').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const aceptaTerminos = document.getElementById('terminos').checked;

    axios.post('https://render-delcamp.onrender.com/clientes/' , {
        nombre: nombre
        
    })
    .then((dataPost) => {
    
    })
    .catch((error) => {
        console.error('Error up Post', error);
    });
    
});

