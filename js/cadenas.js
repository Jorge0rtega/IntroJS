
/* String como cadenas de texto */
const producto="Monitor de 20\" para toda la familia";/* la mas utilizada */
const producto2=String("Monitor HD");
//const producto3= new String("Monitor de 40 pulgadas");/* aqui se crea en objeto */

console.log(producto);
console.log(producto2);
//console.log(producto3);

console.log(typeof producto)/* tipo de dato */
//console.log(typeof producto3)

console.log("Cáracteres en producto "+producto.length);/* tamaño de la cadena */

console.log(producto.indexOf("la"));/* regresa la posicion donde se encuentra la palabra o cracter*/
/* cuando refresa negativo es que no se encuentra*/

console.log(producto.includes("la")); /* retorna un valor booleano si esta la palabra*/

