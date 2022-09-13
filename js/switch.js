const metodoPago='cheque';
switch(metodoPago){
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'cheque':
        console.log('el usuario pagará con cheque, revisaremos los fondos');
        break;
    case 'efectivo':
        console.log('pagaste con efectivo');
        break;
    default:
        console.log('aun no has pagado');
        break;
}

