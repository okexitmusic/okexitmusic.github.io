let boton = document.querySelector('button')
function password() {
    user = "rh"
    pass = "okpc"
    let input2 = document.querySelector('.tipo2')
    let input1 = document.querySelector('.tipo1')
    if(input1.value == pass){
        input2.value = "Acceso Exitoso"
    } else {
        input2.value = "Acceso Restringido"   
    }  
      
}
boton.addEventListener('click', password);

