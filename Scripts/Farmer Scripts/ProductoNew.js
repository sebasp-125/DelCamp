
console.log('--------------');
// Message the warning cancel operation the register
document.getElementById('CancellUp_Profile').addEventListener('click', function () {
    let warningElement = document.createElement('p');
    warningElement.textContent = 'Cancelaste el Registro de tu cuenta...';
    warningElement.classList.add('WarningOperation');

    let confirmCancelElement = document.getElementById('ConfirmCancel');
    confirmCancelElement.innerHTML = '';
    confirmCancelElement.appendChild(warningElement);

    setTimeout(function () {
        window.location.href = '../../Components/LoginRegister-Farmer/Register-Farmer.html';
    }, 3000);
});

//Remove second filter
progressOne.style.display = 'flex';

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
document.getElementById('myForm').addEventListener('click', function (event) {
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
            alert("Id inavlid")
            return;
        }
        axios.get(`https://render-delcamp.onrender.com/campesinos/${newUserId}`)
            .then((EmpaqueUser_Id) => {
                axios.post(`https://render-delcamp.onrender.com/campesinos/${newUserId}`, {
                    ...EmpaqueUser_Id.data,
                    producto_disponible:
                        [
                            {
                                nombre_producto: nombreProductoValue,
                                descripcion: descripcionProductoValue,  
                                calidad_producto: calidadProductoValue,
                                precio: precioProductoValue,
                            }
                        ]
                }).then((SendData) => {
                    console.log("Send Data Satisfactorily", SendData.data);
                }).catch((ErrorSend) => {
                    console.error("Error in the Sentd Data ", ErrorSend.message)
                })
            })
            .catch((ErrorEmpaque) => {
                console.error("Error al desenpacar el contenido del Usuario con la id: " + newUserId + ": " + ErrorEmpaque.message);
            })

    } else {
        console.log('Todos los campos deben estar llenos');
    }
});

