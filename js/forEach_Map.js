const carrito=[
    {nombre: "monitor de 20 pulgadas", precio:500},
    {nombre: "Television 50 pulgadas", precio:700},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio:200},
    {nombre: "teclado", precio:500},
    {nombre: "Celular", precio:50},
    {nombre: "Bocinas", precio:80},
    {nombre: "Laptop", precio:1000}
];

//for each
carrito.forEach(producto =>console.log(producto.nombre));

//map
const arreglo2= carrito.map(producto =>`${producto.nombre} - ${producto.precio}`);
console.log(arreglo2);