const formValidacion = document.getElementById('myFormulario');
const mensajeList = document.getElementById('mensajeList');

formValidacion.addEventListener('submit', function (event) {
    event.preventDefault();

    // limpiar mensajes de error previos
    const errorList = document.getElementById('errorList');
    errorList.innerHTML = '';

    // obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const equipo = document.getElementById('equipo').value;
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
    if (!apellido) {
        const li = document.createElement('li');
        li.textContent = 'es necesario ingresar el dato';
        errorList.appendChild(li);
        valid = false;
    }

    // validar puntuación
    if (!equipo = "") {
        const li = document.createElement('li');
        li.textContent = 'ingrese el nombre del equipo que desea comprar';
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
            mensaje = `Felicidades ${nombre}  ${apellido} elegiste el equipo : ${equipo}. Contacto: ${email}`;

        // agregamos el mensaje a la lista
        const mensajeParaLista = document.createElement('div');
        mensajeParaLista.textContent = mensaje;
        mensajeList.appendChild(mensajeParaLista);

        // para reiniciar el formulario
        formValidacion.reset();
        errorList.innerHTML = ''; // para limpiar la lista de errores
    }
});