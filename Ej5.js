/* Ejercicio 5: Concatenar nombres (función expresada)
Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) 
como parámetros y devuelva el nombre completo concatenado.
*/

const concatenarNombres = function(nombre, apellido) {
  let nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
};

let resultado = concatenarNombres("Natalia", "Yepes");
console.log(resultado);
