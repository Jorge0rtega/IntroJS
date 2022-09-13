//array methods
const meses= ["enero", "febrero", "marzo", "abirl", "mayo"]
const carrito=[
    {nombre: "monitor de 20 pulgadas", precio:500},
    {nombre: "Television 50 pulgadas", precio:700},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio:200},
    {nombre: "teclado", precio:500},
    {nombre: "Celular", precio:50},
    {nombre: "Bocinas", precio:80},
    {nombre: "Laptop", precio:1000}
]
//forEach (recorrer todo el arreglo)
meses.forEach(function(mes){
    if(mes=="marzo"){
        console.log("Marzo si existe")
    }
})
/* comprobar si un elemento existe (arreglo normal)*/
let resultado=meses.includes("marzo")
console.log(resultado)

/* si un elemento existe para arreglo de objetos */
resultado=carrito.some(function(producto){
    return producto.nombre =="Celular"
})

//reduce suma de precios
resultado=carrito.reduce(function(total, producto){
    return total+ producto.precio
},0)/* el valor inicial */

//filter Filtra el contenido de los arreglos
resultado=carrito.filter(function(producto){
    return producto.precio>400
    // return producto.nombre=="Celular"
})
console.log(resultado)
