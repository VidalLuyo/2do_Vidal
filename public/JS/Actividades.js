// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos con la clase 'nav-item dropdown'
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(function(dropdown) {
        // Agregar evento mouseover para mostrar el menú desplegable
        dropdown.addEventListener('mouseover', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            var dropdownToggle = this.querySelector('.dropdown-toggle');

            // Añadir la clase 'show' para mostrar el menú
            dropdownMenu.classList.add('show');
            dropdownToggle.setAttribute('aria-expanded', 'true');
        });

        // Agregar evento mouseout para ocultar el menú desplegable
        dropdown.addEventListener('mouseout', function() {
            var dropdownMenu = this.querySelector('.dropdown-menu');
            var dropdownToggle = this.querySelector('.dropdown-toggle');

            // Remover la clase 'show' para ocultar el menú
            dropdownMenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        });

        // Manejar clic en el enlace desplegable para dispositivos táctiles
        var dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        dropdownToggle.addEventListener('click', function(e) {
            // Prevenir la acción predeterminada solo si el menú no está ya abierto
            if (!this.classList.contains('show')) {
                e.preventDefault();
                this.parentElement.querySelector('.dropdown-menu').classList.toggle('show');
                this.setAttribute('aria-expanded', this.classList.contains('show'));
            }
        });
    });
});
