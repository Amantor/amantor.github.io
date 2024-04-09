// ajaxOperations.js
export let enviarDatos = async () => {
    let nombre = $('#nombre').val();
    let edad = $('#edad').val();

    console.log('Nombre introducido:', nombre); 
    console.log('Edad introducido:', edad); 

    try {
        let response = await $.ajax({
            url: 'datos.json',
            dataType: 'json'
        });

        mostrarContenido(response);
        let nombres = response.map(({ nombre }) => nombre);
        filtrarNombresPorLetra(nombres, nombre.charAt(0));
        
    } catch (error) {
        console.error('Error al cargar datos: ' + error);
    }
};

//Apartado 9
let filtrarNombresPorLetra = (nombres, letra) => {
    let nombresFiltrados = nombres.filter(nombre => nombre.startsWith(letra));
    console.log('Nombres que comienzan con la letra ' + letra + ':', nombresFiltrados);
};

let mostrarContenido = (data) => {
    let contenidoDiv = $('#contenido');
    contenidoDiv.empty(); // Limpiamos el contenido existente

    // Recorremos los datos obtenidos y los agregamos dinámicamente al HTML
    $.each(data, function(index, persona) {
        // Desestructuración de objetos
        const { nombre, edad, email } = persona;

        // Crear elementos HTML para mostrar la información
        let personaHTML = $('<div>').addClass('persona');
        personaHTML.append($('<p>').text('Nombre: ' + nombre));
        personaHTML.append($('<p>').text('Edad: ' + edad));
        personaHTML.append($('<p>').text('Email: ' + email));
        contenidoDiv.append(personaHTML);
    });
};