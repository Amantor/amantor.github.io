// script.js
import { borrarCampos, cambiarColorContenedor } from './dom.js';
import { enviarDatos } from './ajax.js';

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('enviar').addEventListener('click', function(event) {
        event.preventDefault(); // Previene el envío del formulario
        validarEdad();
    });

    document.getElementById('borrar').addEventListener('click', function() {
        borrarCampos();
    });

    document.getElementById('cambiarColorBtn').addEventListener('click', function() {
        cambiarColorContenedor();
    });
});

let validarEdad = () =>{
    let edad = document.getElementById('edad').value;
    let error = document.getElementById('error');
    error.style.color = 'red';
    if (isNaN(edad) || parseInt(edad) <= 18) {
        let container = document.getElementById('container');
        container.style.border = '2px solid red';

        error.textContent = 'La edad debe ser un número mayor a 18.';
    } else {
        // Si la edad es válida, envía los datos
        let container = document.getElementById('container');
        container.style.border = '1px solid #ccc';

        error.textContent = '';

        enviarDatos();
    }
};
