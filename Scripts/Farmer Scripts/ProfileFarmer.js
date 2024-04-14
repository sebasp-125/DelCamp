try {
    const contentProfile_Farmer = document.querySelector('.contentProfile_Farmer');

    let urlParameters = new URLSearchParams(window.location.search);
    const ValidacionId = urlParameters.get('id');
    axios.get(`https://render-delcamp.onrender.com/campesinos/${ValidacionId}`)
        .then((ParametersId) => {
            console.log(ParametersId.data);
            contentProfile_Farmer.innerHTML += `
            <h1>${ParametersId.data.correo}</h1>
            <h1>Nombre de la Finca: ${ParametersId.data.nombre_finca}</h1>
            <img src="https://orienteseperiodismodeopinion.com/id-cms/wp-content/uploads/2021/07/Campesino.jpg" alt="das" with="200px" />
            `;

        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });
} catch (error) {
    console.error("Error al recibir la id ", error);
}
