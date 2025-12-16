/* Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.
*/

const encontrarMayor = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

let resultado = encontrarMayor(7, 12);
console.log("El número mayor es: " + resultado);
