"use strict"/* correr JS de forma estricta */
/* objetos */
const producto={
    nombreProducto: "monitor 2o pulgadas",
    precio: 300,
    disponible: true
}
/* no deja modificar el objeto en nada no elimina no agraga y no modifica */
Object.freeze(producto)
console.log(Object.isFrozen(producto))

/* deja modificar el objeto pero no elimina no agraga*/
Object.seal(producto)
console.log(Object.isSealed(producto))