function AddProduct(callback) {
    let input = document.getElementById('AddProduc-Input');
    let ImageProfile = document.getElementById('ProducNew');
    let guardarBtn = document.getElementById('btn_guardar');

    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            ImageProfile.src = e.target.result;
            let imageURL = ImageProfile.src;
            callback(imageURL);
        };
        reader.readAsDataURL(input.files[0]);
    }
    guardarBtn.innerHTML = 'Editar';
    guardarBtn.onclick = function() {
        window.location.reload();
    };

    // Ocultar elementos después de cargar la imagen
    let card_1 = document.getElementById('card_1');
    if (card_1) {
        card_1.style.display = 'none';
    }
    if (input) {
        input.style.display = 'none';
    }
}


const EnviarALL = document.getElementById('EnviarALL').addEventListener('click', function (event) {
    let names = document.getElementById('NombreProducto').value;
    let description = document.getElementById('DescripcionProducto').value;
    let category = document.getElementById('floatingSelect').value;
    let price = document.getElementById('PrecioProducto').value;
    let discount = document.getElementById('DescuentoProducto').value;
    let imageURL;
    event.preventDefault();

    AddProduct(function (imageURL) {
        const campos = {
            id: Math.floor(Math.random() * 100) + 1,
            nombre_producto: names,
            descripcion: description,
            category: category,
            precio: price,
            descuento: discount,
            foto: imageURL
        };
        const todosLosParametrosValidos = Object.values(campos).every(parametro => !!parametro);
        if (todosLosParametrosValidos) {
            axios.post('https://render-delcamp.onrender.com/productos', campos)
                .then((POSTdatos) => {
                    console.warn("Yes. Data up to de State: " + POSTdatos);
                    window.location.href = '../../Components/leanding_page.html'
                })
                .catch((Error) => {
                    console.error("Error the up data base: " + Error);
                })

        } else {
            document.getElementById('ReloadPOST').innerHTML = `
            <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
            </div>`;
        }
    });
});