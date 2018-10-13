let input = document.querySelector('.buscador1')
let busc =  document.querySelector('.busqueda')

function go() {
    let busqueda = input.value
    window.location.href = "https://www.google.com/search?q=" +  busqueda  

}

busc.addEventListener('click', go);



function enter(e) {
    if(e.key == 'Enter'){
    go()
    }
}
input.addEventListener('keyup', enter)
