function rango (num1, num2) {
    for(var i = num1; i <= num2; i +=1) {
        console.log(i)
    }
}

rango(10, 15)


function rango (num1, num2) {
    for(var i = num2; i >= num1; i -=1) {
        console.log(i)
    }
}

rango(5, 10)




// Incorrecto
function rango (num1, num2) {
    for(var i = num1; i <= num2; i +=1) {
        console.log(i)
    }
}

rango(8,20)