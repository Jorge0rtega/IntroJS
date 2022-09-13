//herencia
class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene como precio ${this.precio}`;
    }
    obtenerPrecio(){
        return this.precio;
    }
}

const p1= new Producto('p1', 300);
const p2= new Producto('p2', 500);

console.log(p1);
console.log(p2.formatearProducto());

class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn=isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    
    obtenerPrecio(){
        return `El precio es ${super.obtenerPrecio()}`
    }
}

const l1= new Libro('l1', 300,'123456789');
console.log(l1.formatearProducto());
console.log(l1.obtenerPrecio());
