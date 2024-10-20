const formValidacion = document.getElementById('myFormulario');
const mensajeList = document.getElementById('mensajeList');

formValidacion.addEventListener('submit', function (event) {
    event.preventDefault();

    // limpiar mensajes de error previos
    const errorList = document.getElementById('errorList');
    errorList.innerHTML = '';

    // obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value.trim();
    const peli = document.getElementById('peli').value.trim();
    const punto = document.getElementById('punto').value;
    const email = document.getElementById('Email').value.trim();

    // validación
    let valid = true;

    // validar nombre
    if (!nombre) {
        const li = document.createElement('li');
        li.textContent = 'Por favor, ingresa tu nombre.';
        errorList.appendChild(li);
        valid = false;
    }

    // validar título de la película
    if (!peli) {
        const li = document.createElement('li');
        li.textContent = 'Por favor, ingresa el título de la película.';
        errorList.appendChild(li);
        valid = false;
    } else if (peli.length > 200) {
        const li = document.createElement('li');
        li.textContent = 'El título de la película no puede exceder los 200 caracteres.';
        errorList.appendChild(li);
        valid = false;
    }

    // validar puntuación
    if (!punto || punto < 1 || punto > 10) {
        const li = document.createElement('li');
        li.textContent = 'La puntuación debe estar entre 1 y 10.';
        errorList.appendChild(li);
        valid = false;
    }

    // validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailPattern.test(email)) {
        const li = document.createElement('li');
        li.textContent = 'Por favor, ingresa un email válido.';
        errorList.appendChild(li);
        valid = false;
    }

    // si todas las validaciones son correctas...
    if (valid) {
        // para crear el mensaje
        let mensaje;
        if (email) {
            mensaje = `${nombre} dice que ${peli} tiene una puntuación de ${punto}. Contacto: ${email}`;
        } else {
            mensaje = `${nombre} dice que ${peli} tiene una puntuación de ${punto}.`;
        }

        // agregamos el mensaje a la lista
        const mensajeParaLista = document.createElement('div');
        mensajeParaLista.textContent = mensaje;
        mensajeList.appendChild(mensajeParaLista);

        // para reiniciar el formulario
        formValidacion.reset();
        errorList.innerHTML = ''; // para limpiar la lista de errores
    }
});