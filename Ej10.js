/* Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
Fórmula del factorial: n! = n * (n - 1) * ... * 1
*/

const calcularFactorial = function(numero) {
  let resultado = 1;

  for (let i = numero; i >= 1; i--) {
    resultado = resultado * i;
  }

  return resultado;
};
