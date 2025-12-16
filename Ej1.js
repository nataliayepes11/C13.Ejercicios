/* Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.
Pista: Usa la fórmula: área = (base * altura)/2
*/

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

let resultado = calcularAreaTriangulo(3, 8);
console.log("El área del triángulo es: " + resultado);
