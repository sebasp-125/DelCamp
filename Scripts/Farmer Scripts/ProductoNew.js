function AddProduct(callback) {
    let input = document.getElementById('AddProduc-Input');
    let ImageProfile = document.getElementById('ProducNew');

    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            ImageProfile.src = e.target.result;
            imageURL = ImageProfile.src;
            callback(imageURL);
        }
        reader.readAsDataURL(input.files[0]);
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
            id_producto: Math.floor(Math.random() * 100) + 1,
            nombre_producto: names,
            descripcion: description,
            category: category,
            precio: price,
            discount: discount,
            foto: imageURL
        };
        const todosLosParametrosValidos = Object.values(campos).every(parametro => !!parametro);
        if (todosLosParametrosValidos) {
            axios.post('https://render-delcamp.onrender.com/productos', campos)
                .then((POSTdatos) => {
                    console.warn("Yes. Data up to de State: " + POSTdatos);
                })
                .catch((Error) => {
                    console.error("Error the up data base: " + Error);
                })
                .finally((final) => {
                    console.log("--Thank you-- ", final);
                })
        } else {
            document.getElementById('ReloadPOST').innerHTML = `
            <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
            </div>`;
        }
    });
});