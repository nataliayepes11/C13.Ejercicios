/* Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas 
como parámetro y devuelva el total en minutos.
*/

function convertirHorasAMinutos(horas) {
  let minutos = horas * 60;
  return minutos;
}

let resultado = convertirHorasAMinutos(8);
console.log("El total en minutos es: " + resultado);
