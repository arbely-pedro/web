function subirPagina() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector('.btn-enviar').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert('Solicitud enviada'); // Muestra la alerta
});