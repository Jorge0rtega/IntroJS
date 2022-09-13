/* objetos */
const producto={
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

/* forma anterior */
const precioProducto = producto.precio
const nombreProducto1 = producto.nombreProducto
console.log(precioProducto)
console.log(nombreProducto1)

/* destructuring */
/* const {precio}=producto */
const {precio, nombreProducto}=producto

console.log(precio)
console.log(nombreProducto)