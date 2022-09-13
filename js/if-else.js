const puntaje=1000;

/* tres signos de igual compara que sea el valor y el tipo de dato */
/* puntaje===1000
puntaje!==1000
puntaje!=1000 */
if(puntaje==1000){
    console.log("si el puntaje es mil");
}else{
    console.log("no es igual");
}

const efectivo=1000;
const carrito=800;

if(efectivo>carrito){
    console.log("El usuario puede pagar");
}else{
    console.log("Fondos insufiencientes");
}

const rol="editor";
if(rol=="administrador"){
    console.log("acceso a todo el sistema");
}else if(rol=="editor"){
    console.log("Puedes entrar pero no puedes hacer mucho")
}else{
    console.log("no tiene acceso");
}