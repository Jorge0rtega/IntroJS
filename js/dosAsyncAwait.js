function descargarNuevosClientes(){
    return new Promise((resolve)=>{
        console.log("Descargando clientes... espere...")
        setTimeout(()=>{
            resolve("Los clientes fueron descargados");
        },5000);//espera 5 segundos
    });
}

function descargarUtimosPedidos(){
    return new Promise((resolve)=>{
        console.log("Descargando utimos Pedidos... espere...")
        setTimeout(()=>{
            resolve("Los pedidos fueron Desargados");
        }, 7000);//espera 7 segundos
    })
}

async function app(){
    try{
        //aqui tardan 12 segundos uno depende del otro
        /* const pedidos=await descargarUtimosPedidos();
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
        console.log(pedidos); */ 
        //tarda 7 segundos
        const resultado= await Promise.all([descargarNuevosClientes(), descargarUtimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    }catch(error){
        console.log(error)
    }
}

app();
