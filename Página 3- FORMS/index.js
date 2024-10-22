document.addEventListener('DOMContentLoaded', function () {
    const formValidacion = document.getElementById('myFormulario');
    const mensaje = document.getElementById('mensaje');

    formValidacion.addEventListener('submit', function (event) {
        event.preventDefault();

        mensaje.textContent = ''; // limpiar mensajes

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const equipo = document.getElementById('equipo').value.trim();
        const email = document.getElementById('email').value.trim();

        let valid = true;

        // Expresión regular para validar solo letras y espacios
        const nombrePattern = /^[A-Za-zÀ-ÿ\s]+$/;
        const apellidoPattern = /^[A-Za-zÀ-ÿ\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validación del nombre
        if (!nombre) {
            mensaje.textContent = 'Por favor, ingrese correctamente el nombre';
            mensaje.classList.add('error');
            valid = false;
        } else if (!nombrePattern.test(nombre)) {
            mensaje.textContent = 'El nombre solo puede contener letras y espacios.';
            mensaje.classList.add('error');
            valid = false;
        }

        // Validación del apellido
        if (!apellido) {
            mensaje.textContent = 'Por favor, ingresa correctamente el apellido';
            mensaje.classList.add('error');
            valid = false;
        } else if (!apellidoPattern.test(apellido)) {
            mensaje.textContent = 'El apellido solo puede contener letras y espacios.';
            mensaje.classList.add('error');
            valid = false;
        }

        // Validación del equipo
        if (!equipo) {
            mensaje.textContent = 'Ingresa el nombre del equipo que desea comprar.';
            mensaje.classList.add('error');
            valid = false;
        }

        // Validación del email
        if (!email) {
            mensaje.textContent = 'Por favor, ingresa tu email.';
            mensaje.classList.add('error');
            valid = false;
        } else if (!emailPattern.test(email)) {
            mensaje.textContent = 'Por favor, ingresa un email válido.';
            mensaje.classList.add('error');
            valid = false;
        }

        // Si todas las validaciones son correctas...
        if (valid) {
            console.log('Validación completa:', valid);
            let successMessage = `Felicidades ${nombre} ${apellido}, elegiste el equipo: ${equipo}. Gracias por tu compra. Pronto nos pondremos en contacto al email que nos brindaste: ${email}`;
            mensaje.textContent = successMessage;
            mensaje.classList.remove('error');
            mensaje.classList.add('mensaje-exito');
            formValidacion.reset();
        }
    });
});