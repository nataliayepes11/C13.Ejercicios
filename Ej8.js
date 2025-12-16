/* Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura 
en grados Celsius y devuelva la temperatura en Fahrenheit.
Fórmula: Fahrenheit = (Celsius * 9/5) + 32
*/

const convertirCelsiusAFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
};
