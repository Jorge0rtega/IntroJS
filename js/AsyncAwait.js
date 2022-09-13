function descargarNuevosClientes(){
    return new Promise((resolve)=>{
        console.log("Descargando clientes... espere...")
        setTimeout(()=>{
            resolve("Los clientes fueron descargados");
        },5000);//espera 5 segundos
    });
}

async function app(){
    try{
        const resultado= await descargarNuevosClientes();
        console.log(resultado);
        console.log("adios");
    }catch(error){
        console.log(error)
    }
}

app();
console.log("hola")