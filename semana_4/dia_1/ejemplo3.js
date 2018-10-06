// 
let importetotal = window.prompt("Ingresar Importe Total De La Cuenta")
if(window.confirm("Desea Agregar Propina?")) {
    propina = importetotal * 1.10
    window.alert(propina)
} else {
    window.alert(importetotal)
}

