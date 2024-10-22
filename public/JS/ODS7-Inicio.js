document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('backgroundVideo');

    // Esperar a que los metadatos del video estén listos
    video.addEventListener('loadedmetadata', function() {
        // Establecer el tiempo de inicio
        video.currentTime = 14; // Comienza en el segundo 14
        video.play(); // Reproduce el video

        // Detener la reproducción en el segundo 50
        setInterval(() => {
            if (video.currentTime >= 120) {
                video.currentTime = 14; // Regresa al segundo 14
            }
        }, 1000); // Verifica cada segundo
    });
});