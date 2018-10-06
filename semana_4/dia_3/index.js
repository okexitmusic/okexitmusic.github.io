// Ejercicio para el día 3 Calculadora

// Utilizar css para darle una
// mejor presentación al html

// Generar funciones para las acciones
// de sumar, restar, multiplicar y dividir
// (Aún no se escribirá la funcionalidad)

// Generar variables que obtengan la
// referencia a los elementos de html
// (3 inputs y 4 botones)

// Asignar eventos a los botones para que
// ejecuten las funciones correspondientes

// Escribir la funcionalidad de las 4
// posibles operaciones de la calculadora


let input1 = document.querySelector('.num1')
let input2 = document.querySelector('.num2')
let result = document.querySelector('.resultado')
let mas = document.querySelector('.botonMas')
let menos = document.querySelector('.botonMenos')
let por = document.querySelector('.botonPor')
let entre = document.querySelector('.botonEntre')
let clear = document.querySelector('.botonClear')

function suma() {
    result.value = parseFloat(input1.value) + parseFloat(input2.value)
}
mas.addEventListener('click', suma)


function resta() {
   result.value = input1.value - input2.value
}
menos.addEventListener('click', resta)


function multi() {
    result.value = input1.value * input2.value
}
por.addEventListener('click', multi)


function div() {
    result.value = input1.value / input2.value
}
entre.addEventListener('click', div)

function cl() {
    input1.value = " "
    input2.value = " "
    result.value = " "

}
clear.addEventListener('click', cl)

function detectarEnter(e) {
    if(e.key == 'Enter'){
      suma()
    }
}
input1.addEventListener('keyup', detectarEnter)
input2.addEventListener('keyup', detectarEnter)