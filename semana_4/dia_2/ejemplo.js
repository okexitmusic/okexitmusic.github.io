
let boton = document.querySelector('button')
function nombre() {
    let nombre = window.prompt("Ingrese su nombre")
    window.alert(nombre);
}
boton.addEventListener('click', nombre);


