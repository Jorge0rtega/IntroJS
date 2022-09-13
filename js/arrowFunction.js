/* arrow function */
const sumar2= (n1, n2)=>console.log(n1+n2);

sumar2(5, 18);
/* cuando son varias lineas usar llaves */
/* cuando son varias parametros usar parentesis */ 
const aprendiendo=tecnologia=>{
    console.log(`Aprediendo ${tecnologia}`);
 }

 aprendiendo("JavaScript");

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
meses.forEach(mes=>{
    if(mes=="marzo"){
        console.log("Marzo si existe")
    }
})


/* si un elemento existe para arreglo de objetos */
/* el return es implicito */
resultado=carrito.some(producto=> producto.nombre =="Celular");
console.log(resultado);

//reduce suma de precios
resultado=carrito.reduce((total, producto)=> total+ producto.precio, 0);/* el valor inicial */
console.log(resultado);

//filter Filtra el contenido de los arreglos
resultado=carrito.filter(producto=> producto.precio>400);
    // producto.nombre=="Celular"
console.log(resultado);
