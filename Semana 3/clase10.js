// Funcion de propina

function cuentatotal (cuenta){
    if (cuenta > 2000){
    return cuenta *1.15
    }
    else{ 
    return cuenta *1.10
    }
}
let propina = cuentatotal(2000) 
console.log(propina) 

// Funcion sin else

function cuentatotal (cuenta){
    if (cuenta > 2000){
        return cuenta *1.15
    } 
    return cuenta *1.10
    }
let propina = cuentatotal(2000) 
console.log(propina)

// funcion con ampersand && AND
//funcion con || OR

//if (cuenta > 2000 && cuenta || 5000)