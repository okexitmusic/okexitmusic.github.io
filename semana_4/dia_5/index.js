    let button = document.querySelector('button');
    let peso = document.querySelector('.peso');
    let altura = document.querySelector('.altura');
    let resultado = document.querySelector('h3');

    function calcular() {
        let pesoEnKg = parseFloat(peso.value);
        let alturaEnM = parseFloat(altura.value);

        let imc = pesoEnKg / alturaEnM ** 2

        // Redondeo
        imc = imc.toFixed(2);

        if(imc > 30) { // Obesidad
            document.body.style.background = '#c70505';
        } else if (imc > 25) { // Sobrepeso
            document.body.style.background = '#ff7800';
        } else if (imc > 18.5) { // Normal
            document.body.style.background = '#a5ff63';
        } else { // Peso demasiado bajo
            document.body.style.background = '#e24be4';
        }

        resultado.innerText = `Tu indice de masa corporal es de ${imc}`
    
    }

    button.addEventListener('click', calcular);