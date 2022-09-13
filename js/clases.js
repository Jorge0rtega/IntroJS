class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene como precio ${this.precio}`;
    }
}

const p1= new Producto('p1', 300);
const p2= new Producto('p2', 500);

console.log(p1);
console.log(p2.formatearProducto());
