/* arreglos */
const numeros=[10,20,30,40,50]
/* para su mejor visualizacion con table */
console.table(numeros)
const meses=["Enero","febrero", "marzo","abril","mayo"]
console.table(meses)
/* no solo guarda un solo tipo de dato */
const arreglo=["hola", 10, true, null, {nombre:"juan", trabajo:"programador"}, [1,2,30]]
console.log(arreglo)
/* acceder al arreglo */
console.log(meses[3])

/* tamaño del arreglo */
console.log(meses.length)

/* iterar por todos los elementos */
numeros.forEach(function(numeros){ 
    console.log(numeros)
})


// agregar nuevos elementos al final
numeros[5]=1
numeros.push(2,3,4,5) 
console.log(numeros)
// agragar datos al inicio
numeros.unshift(-1,-2,-3)

//eliminar el ultimo elemento
numeros.pop()
console.log(numeros)

//eliminar el primer elemento
numeros.shift()
console.log(numeros)

// ir al lugar y elementos a eliminar
// ir al lugar dos y eliminar solo un elemento
meses.splice(2,1)
console.log(meses)

// creando un nuevo arreglo y haciendo push y unshift
const nuevoArreglo=["diciembre",...meses,"noviembre"]
console.log(nuevoArreglo)