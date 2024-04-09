// domManipulation.js
export let borrarCampos = () =>{
    document.getElementById('myForm').reset();
}

export let cambiarColorContenedor = () =>{
    let container = document.getElementById('container');
    let colorActual = container.style.backgroundColor;

    if (colorActual === 'rgb(178, 34, 34)') {
        container.style.backgroundColor = 'rgb(34, 139, 34)';
    } else if(colorActual === 'rgb(34, 139, 34)'){
        container.style.backgroundColor = 'wheat';
    } else {
        container.style.backgroundColor = 'rgb(178, 34, 34)';
    }
}
