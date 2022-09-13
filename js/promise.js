const usuarioAuntenticado= new Promise((resolve, reject) => {
    const auth=true;
    if(auth==true){
        resolve("Usuario Auntentificiado");
    }else{
        reject("No se pudo iniciar sesion");
    }
});

usuarioAuntenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

//En los promise existen tres valores
//pendding: no se ha cumplido pero tampoco se ha rechazado
//fulfilled: ya se cumplido
//rejected: se ha rechazado o no se pudo cumplir