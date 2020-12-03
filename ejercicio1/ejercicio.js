'use strict';
let dia;
let respuesta;

dia = Number(prompt("Ingrese el dia de la semana en Numeros del 1 al 7"));
document.write(" El dia de la semana es  " + diaSemana(dia));


function diaSemana(dia) {

    switch(dia){
        case 1:
            respuesta="Lunes"
            alert('Hoy es Lunes');
            break;
        case 2:
            respuesta="Martes"
           alert('Hoy es Martes');
            break;
        case 3:
            respuesta="Miercoles"
            alert('Hoy es Miercoles');
            break;
        case 4:
            respuesta="Jueves"
            alert('Hoy es Jueves');
            break;
        case 5:
            respuesta="Viernes"
            alert('Hoy es Viernes');
            break;
        case 6:
            respuesta="Sabado"
            alert('Hoy es Sabado');
            break;
        case 7:
            respuesta="Domingo"
            alert('Hoy es Domingo');
            break;
            default:
                alert('Numero Invalido');
       
    }
    return respuesta;
}