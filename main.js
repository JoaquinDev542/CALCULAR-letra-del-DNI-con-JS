//EJERCICIO
// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.

// El array de letras es:

// var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:

// Almacene en una variable el número de DNI indicado por el usuario.
// En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
// Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
// Se ejecuta un alert aclarando que su DNI tiene la letra correspondiente.

let numDni = prompt("Colocar el número del DNI para saber cual es su letra correspondiente");
let division = 23;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (numDni < 0 || numDni > 99999999) {
        alert("El número proporcionado no es válido");
    } else {
      let resultadoResto =  numDni % division;
        switch(resultadoResto) {
            case 0: 
            alert(`su DNI tiene la letra ${letras[0]}`);
            break;

            case 1: 
            alert(`su DNI tiene la letra ${letras[1]}`);
            break;

            case 2: 
            alert(`su DNI tiene la letra ${letras[2]}`);
            break;

            case 3: 
            alert(`su DNI tiene la letra ${letras[3]}`);
            break;

            case 4: 
            alert(`su DNI tiene la letra ${letras[4]}`);
            break;

            case 5: 
            alert(`su DNI tiene la letra ${letras[5]}`);
            break;

            case 6: 
            alert(`su DNI tiene la letra ${letras[6]}`);
            break;

            case 7: 
            alert(`su DNI tiene la letra ${letras[7]}`);
            break;

            case 8: 
            alert(`su DNI tiene la letra ${letras[8]}`);
            break;

            case 9: 
            alert(`su DNI tiene la letra ${letras[9]}`);
            break;

            case 10:
            alert(`su DNI tiene la letra ${letras[10]}`);
            break;

            case 11:
                alert(`su DNI tiene la letra ${letras[11]}`);
            break;

            case 12:
                alert(`su DNI tiene la letra ${letras[12]}`);
            break;

            case 13:
                alert(`su DNI tiene la letra ${letras[13]}`);
            break;

            case 14:
                alert(`su DNI tiene la letra ${letras[14]}`);
            break;

            case 15:
                alert(`su DNI tiene la letra ${letras[15]}`);
            break;

            case 16:
                alert(`su DNI tiene la letra ${letras[16]}`);
            break;

            case 17:
                alert(`su DNI tiene la letra ${letras[17]}`);
            break;

            case 18:
                alert(`su DNI tiene la letra ${letras[18]}`);
            break;

            case 19:
                alert(`su DNI tiene la letra ${letras[19]}`);
            break;

            case 20:
                alert(`su DNI tiene la letra ${letras[20]}`);
            break;

            case 21:
                alert(`su DNI tiene la letra ${letras[21]}`);
            break;

            case 22:
                alert(`su DNI tiene la letra ${letras[22]}`);
            break;

            case 23:
                alert(`su DNI tiene la letra ${letras[23]}`);
            break;
        }
    }