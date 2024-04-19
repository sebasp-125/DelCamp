
//Add Products primary filter
function Up_Image_Profile(e) {
    let input = document.getElementById('inputGroupFile02'),
        ImageProfile = document.getElementById('ImageProfile'),
        progressOne = document.getElementById('progressOne'),
        AddProducts = document.getElementById('AddProducts');

    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            ImageProfile.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);

        const TimeNone = setTimeout(function () {
            // progressOne.style.display = 'none';
            AddProducts.style.display = 'block';
            console.log(TimeNone);
        }, 3000);
    }
}

//Add Products second filter
function AddProduct() {
    let input = document.getElementById('AddProduc-Input'),
        ImageProfile = document.getElementById('ProducNew')
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            ImageProfile.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

//Add Products the Api
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreProductoValue = document.getElementById('NombreProducto').value;
    const descripcionProductoValue = document.getElementById('DescripcionProducto').value;
    const calidadProductoValue = document.getElementById('floatingSelect').value;
    const precioProductoValue = document.getElementById('PrecioProducto').value;
    const descuentoProductoValue = document.getElementById('DescuentoProducto').value;

    if (nombreProductoValue && descripcionProductoValue && calidadProductoValue && precioProductoValue && descuentoProductoValue) {
        const params = new URLSearchParams(window.location.search);
        const newUserId = params.get('NewUserId');
        if (!newUserId) {
            alert("Id inválida");
            return;
        }

        // Crear un objeto con los datos del producto
        const producto = {
            nombre_producto: nombreProductoValue,
            descripcion: descripcionProductoValue,
            calidad_producto: calidadProductoValue,
            precio: precioProductoValue,
        };

        // Realizar la solicitud GET para obtener los datos del usuario
        axios.get(`https://render-delcamp.onrender.com/campesinos/${newUserId}`)
            .then((response) => {
                const userData = response.data;

                userData.producto_disponible = userData.producto_disponible || [];
                userData.producto_disponible.push(producto);

                axios.post(`https://render-delcamp.onrender.com/campesinos/`, userData)
                    .then((response) => {
                        console.log("Datos enviados con éxito:", response.data);
                        alert("Datos enviados con éxito");
                    })
                    .catch((error) => {
                        console.error("Error al enviar los datos:", error);
                        alert("Error al enviar los datos");
                    });
            })
            .catch((error) => {
                console.error("Error al obtener los datos del usuario:", error);
                alert("Error al obtener los datos del usuario");
            });
    } else {
        console.log('Todos los campos deben estar llenos');
        alert('Todos los campos deben estar llenos');
    }
});

