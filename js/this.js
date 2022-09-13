//this
const reservacion={
    nombre: 'Jorge',
    apellido: 'ortega',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`EL cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}

const reservacion2={
    nombre: 'juan',
    apellido: 'Suaréz',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`EL cliente ${this.nombre} reservo y su cantidad a pagar es ${this.total}`);
    }
}
console.log(reservacion);
console.log(reservacion2);