document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const celularInput = document.getElementById('celular');
    const mensajeInput = document.getElementById('mensaje');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío del formulario
        let isValid = true;

        // Limpiar mensajes de error anteriores
        clearErrorMessages();

        // Validar cada campo
        if (!validarNombre(nombreInput.value)) {
            showError(nombreInput, 'Por favor, introduce un nombre válido (solo letras).');
            isValid = false;
        }
        if (!validarNombre(apellidoInput.value)) {
            showError(apellidoInput, 'Por favor, introduce un apellido válido (solo letras).');
            isValid = false;
        }
        if (!validarEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, introduce una dirección de correo electrónico válida.');
            isValid = false;
        }
        if (!validarCelular(celularInput.value)) {
            showError(celularInput, 'Por favor, introduce un número de celular válido (9 dígitos).');
            isValid = false;
        }
        if (!validarMensaje(mensajeInput.value)) {
            showError(mensajeInput, 'Por favor, introduce un mensaje válido (máximo 250 caracteres).');
            isValid = false;
        }

        // Si todas las validaciones son correctas, enviar el formulario
        if (isValid) {
            alert('Formulario enviado con éxito.');
            form.submit();
        }
    });

    // Función para validar nombres (solo letras y espacios)
    function validarNombre(nombre) {
        const regex = /^[a-zA-ZÀ-ÿ\s]+$/; // Solo letras y espacios
        return regex.test(nombre);
    }

    // Función para validar correos electrónicos
    function validarEmail(email) {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        return regex.test(email);
    }

    // Función para validar números de celular (9 dígitos)
    function validarCelular(celular) {
        const regex = /^\d{9}$/; // Números exactos de 9 dígitos
        return regex.test(celular);
    }

    // Función para validar el mensaje (máximo 250 caracteres)
    function validarMensaje(mensaje) {
        return mensaje.length > 0 && mensaje.length <= 250;
    }

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        input.parentNode.appendChild(errorElement);
        input.classList.add('error-input');
    }

    // Función para limpiar los mensajes de error
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function (error) {
            error.remove();
        });

        const errorInputs = document.querySelectorAll('.error-input');
        errorInputs.forEach(function (input) {
            input.classList.remove('error-input');
        });
    }
}); 