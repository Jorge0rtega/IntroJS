/* for loop */
for(let i=0; i<10; i++){
     console.log(i);
}

for(let i=0; i<10; i++){
    if(i%2 ==0){
        console.log(`El numero ${i} es par` )
    }
}

const carrito=[
    {nombre: "monitor de 20 pulgadas", precio:500},
    {nombre: "Television 50 pulgadas", precio:700},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio:200},
    {nombre: "teclado", precio:500},
    {nombre: "Celular", precio:50},
    {nombre: "Bocinas", precio:80},
    {nombre: "Laptop", precio:1000}
];
 for(let i=0; i<carrito.length; i++){
    console.log(carrito[i])
 }


/* while loop */

let i=0;
while(i<10){
     console.log(i)
     i++;
}
i=0;
while(i<10){
    if(i%2==0){
        console.log(`El numero ${i} es par`);
    }
    i++;
}
/* do while loop */
i=0;
do{
    console.log(i);
    i++
}while(i<10);
