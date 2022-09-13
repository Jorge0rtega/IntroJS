/* objetos */
const producto={
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
console.log(producto)
console.log(producto.precio)
/* otra forma */
console.log(producto["precio"])

/* agregar nuevas propiedades */
producto.imagen="imagen.jpg"

/* eliminar propiedades */
delete producto.disponible
console.log(producto)
