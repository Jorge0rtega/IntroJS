//POO

// object constructor
function Producto(nombre, precio){
    this.nombre=nombre;
    this.precio=precio;
}

function Cliente(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}

Cliente.prototype.formatearCliente=function(){
    return `El Cliente ${this. nombre} ${this.apellido}`;
}

Producto.prototype.formatearProducto=function(){
    return `El producto ${this. nombre} tiene un precio de ${this.precio}`;
}

const p1= new Producto("p1", 500);
const p2= new Producto("p2", 900);
const c1= new Cliente("Jorge", "Ortega");


console.log(p2);
console.log(c1);
console.log(p2.formatearProducto());