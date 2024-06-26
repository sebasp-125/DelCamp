let urlParams = new URLSearchParams(window.location.search);
let idProducts = urlParams.getAll('idproduct').flatMap(id => id.split(','));
document.getElementById('Back').addEventListener('click', function () {
  window.history.back();
  localStorage.clear();
})

idProducts.forEach(idP => {
  axios.get(`https://render-delcamp.onrender.com/productos/${idP}`)
    .then((response) => {
      // Almacenar el objeto JSON con una clave única en localStorage
      localStorage.setItem(`ProducSelect_${idP}`, JSON.stringify(response.data));
    })
    .catch((err) => {
      console.error("Error al obtener producto ", err);
    });
});

// Crear el título de la tabla fuera del bucle
document.getElementById('tr_id4').innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Productos</th>
        <th>Cantidades</th>
        <th>Descripción del Producto</th>
        <th>Precio</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody id="table_body"></tbody>
  </table>
`;
// Agregar filas al cuerpo de la tabla
idProducts.forEach(idP => {
  let productData = localStorage.getItem(`ProducSelect_${idP}`);
  if (productData) {
    let product = JSON.parse(productData);
    // Agregar filas al cuerpo de la tabla
    document.getElementById('table_body').innerHTML += `
        <tr>
          <td><img src="${product.foto}" alt="" srcset="" width="500px" heigth="500px"></td>
          <td>${product.nombre_producto}</td>
          <td>${product.descripcion}</td>
          <td>${product.precio}</td>
          <td>
          <button onclick="DeleteProduct(${idP}, event)">Eliminar</button>
          <button>Cancelar</button>
          </td>
        </tr>
      `;
    function updateTotal() {
      let total = 0;
      idProducts.forEach(idP => {
        let productData = localStorage.getItem(`ProducSelect_${idP}`);
        if (productData) {
          let product = JSON.parse(productData);
          total += parseFloat(product.precio);
        }
      });

      document.getElementById('total_a_the_buy').innerHTML = `
          <hr>
          <h1>¡Total a pagar! Productos seleccionados</h1>
          <p>Total: </p>
          <h6>${total}</h6>
          <h4>${total * 0.1}</h4>
          <h3>${total + (total * 0.1)}</h3>
          <hr>
          <h1>Saldo: </h1>
          <h2>${total + (total * 0.1)}</h2>
        `;
    }

  }
});

// Delate product list storange
function DeleteProduct(ProductId , event) {
  event.preventDefault();
  if (confirm("¿Seguro que desea Eliminar este producto?")) {
    let deletedProduct = localStorage.removeItem(`ProducSelect_${ProductId}`);
    console.log(deletedProduct)
    console.log("Producto Elimando Correctamente.... ")
    setTimeout(function(){
      window.location.reload();
    }, 2000)
  }
}