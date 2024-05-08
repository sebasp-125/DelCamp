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

let mostrarModal = true;

document.getElementById('closeModal').addEventListener('click', function () {
  console.warn("Thanks to ");
  setTimeout(() => {
    window.location.reload();
    mostrarModal = false;
  }, 3000);
})

function activarModal() {
  if (mostrarModal) {
      jQuery('#exampleModal').modal('show');
  }
}

jQuery(document).ready(function(){
  activarModal()
});


// Crear el título de la tabla fuera del bucle
document.getElementById('tr_id4').innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Productos</th>
        <th>Cantidades</th>
        <th>Descripción del Producto</th>
        <th>Total a Pagar</th>
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
          <td><img src="${product.foto}" alt="" srcset=""></td>
          <td>${product.nombre_producto}</td>
          <td>${product.descripcion}</td>
          <td>${product.id}</td>
          <td>
          <button>Eliminar</button>
          <button>Cancelar</button>
          </td>
        </tr>
      `;
  }
});
