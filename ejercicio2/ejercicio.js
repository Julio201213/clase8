let numero;
let respuesta;
let dia;

numero = parseInt(prompt('Ingrese el Numero de la placa'));
dia = pico_Placa(numero)
document.write(" El pico y Placa de su vehiculo es el dia  " + dia)

function pico_Placa(num) {

    switch (numero) {
        case 0:
        case 1:
            respuesta = "lunes"
            break;
        case 2:
        case 7:
            respuesta = "Martes"
            break;
        case 9:
        case 4:
            respuesta = "Miercoles"
            break;
        case 5:
        case 3:
            respuesta = "Jueves"
            break;
        case 6:
        case 8:
            respuesta = "Viernes"
            break;
            default:
            alert("error, ingrese un numero del 0 al 9");
    } 
    return respuesta;
}
