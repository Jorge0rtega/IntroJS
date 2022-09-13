//declaracion de funciones 
// sumar();/* se puede poner arriba yaque primero se registran las funciones y*/
/*  luego ya se ejecuta todo el codigo */
function sumar(){
    console.log(10+10);
}
sumar();

//expresion de la funciones
/* mientras que este siempre debe ir abajo ya que lo registra como una variables
por lo que en la primera vuelta no resgistra ninguna funcion, por lo que marcara que no existe*/
const sumar2=function(){
    console.log(3+3);
}

sumar2();

//IIFE /* ellas mismas de llaman */
/* sirven para mantener todo lo que se ponga dentro dentro de el mismo archivo */
(function() {
    console.log("esto es una funcion"); 
})();/* estos ultimos dos parentesis es su llamada */

/* la variables de los demas js se pueden leer en los otros archivos */
 