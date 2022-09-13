// function sumar(n1, n2){
//     return n1+n2;
// }
// const resultado=sumar(3,2);
// console.log(resultado);

let total=0;
function agragarCarrito(precio){
    return total+=precio;
}
function calcularImpuesto(total){
    return 1.16*total;
}
total=agragarCarrito(200);
total=agragarCarrito(300);
total=agragarCarrito(1000);
console.log(total);
let totalAPagar=calcularImpuesto(total);
console.log(`El total a pagar con impuesto es de: $${totalAPagar}`); 