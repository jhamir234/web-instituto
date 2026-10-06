// ==========================================
// FORMULARIO DE SUSCRIPCIÓN
// ==========================================

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {

    // Evita que la página se recargue
    event.preventDefault();

    // Obtener los datos
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const carrera = document.getElementById("carrera").value;

    // Comprobar que los campos tengan información
    if (
        nombre === "" ||
        correo === "" ||
        telefono === "" ||
        carrera === ""
    ) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Mensaje de confirmación
    alert(
        "¡Gracias, " + nombre + "!\n\n" +
        "Tu solicitud fue registrada correctamente.\n\n" +
        "Nos comunicaremos contigo al número " +
        telefono +
        " para brindarte información sobre la carrera seleccionada."
    );

    // Limpiar formulario
    formulario.reset();

});


// ==========================================
// ANIMACIÓN AL HACER SCROLL
// ==========================================

const elementos = document.querySelectorAll(
    ".tarjeta, .carrera, .nosotros-card, .contacto-item"
);

const mostrarElementos = () => {

    elementos.forEach(elemento => {

        const posicion =
            elemento.getBoundingClientRect().top;

        const alturaVentana =
            window.innerHeight;

        if (posicion < alturaVentana - 80) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";

        }

    });

};


// Estado inicial de los elementos

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(30px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


// Ejecutar al cargar

window.addEventListener("load", mostrarElementos);


// Ejecutar al hacer scroll

window.addEventListener("scroll", mostrarElementos);
