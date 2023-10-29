document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("solicitud-form");
    const enviarBoton = document.getElementById("enviar");
    const cancelarBoton = document.getElementById("cancelar");
    const resultados = document.getElementById("resultados");

    enviarBoton.addEventListener("click", function () {
        // Recopilar los datos del formulario
        const nombres = document.getElementById("nombres").value;
        const correo = document.getElementById("correo").value;
        const celular = document.getElementById("celular").value;
        const servicio = document.getElementById("servicio").value;

        // Mostrar los resultados en una tabla
        const tablaResultados = `
            <h3>Información de la solicitud:</h3>
            <table>
                <tr>
                    <td><strong>Nombres y Apellidos:</strong></td>
                    <td>${nombres}</td>
                </tr>
                <tr>
                    <td><strong>Correo Electrónico:</strong></td>
                    <td>${correo}</td>
                </tr>
                <tr>
                    <td><strong>Número de Celular:</strong></td>
                    <td>${celular}</td>
                </tr>
                <tr>
                    <td><strong>Servicio Solicitado:</strong></td>
                    <td>${servicio}</td>
                </tr>
            </table>
        `;

        resultados.innerHTML = tablaResultados;
    });

    cancelarBoton.addEventListener("click", function () {
        // Redirigir a la página de inicio
        window.location.href = "index.html";
    });
});
