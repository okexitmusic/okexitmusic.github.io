let nombre = "juan"

nombre.toUpperCase()
nombre = nombre.toUpperCase()

//

function cuento(personaje) {

let historia = (`Daniel se divertía dentro del coche con su hermano menor, 
Carlos. Iban de paseo con sus padres al Lago Rosado. Allí irían a nadar en sus tibias aguas y 
elevarían sus nuevas cometas. Sería un paseo inolvidable. De pronto el coche se detuvo con un brusco frenazo. 
Daniel oyó a su padre exclamar con voz ronca: – “¡Oh, mi Dios, lo he atropellado!” – “¿A quién, a quién?”, 
le preguntó Daniel. – “No se preocupen”, respondió su padre-. “No es nada”. 
El auto inició su marcha de nuevo y la madre de los chicos encendió la radio, empezó a sonar una canción de moda en 
los altavoces. – “Cantemos esta canción”, dijo mirando a los niños en el asiento de atrás`)

historia = historia.replace(/Daniel/g, personaje)
console.log(historia)

}
cuento('Roberto')


//
let direccion = {
    calle: "Av. Ignacio L. Vallarta",
    numero: "3300",
    ciudad: "Guadalajara",
    estado: "Jalisco",
    pais: "Mexico"
    
}

console.log(direccion.calle, "#"+ direccion.numero, "\n" ,direccion.ciudad, direccion.estado, direccion.pais)

