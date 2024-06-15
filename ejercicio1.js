
// Ejercicio 1: Uso de for...of y Arrays: Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.

// Variables declaradas declarados
let numeros = [1,2,3,4,5,6,7,8,9,10]
let potencia = 2
let cuadrados = []

// Funcion for...of
console.log(`Para el conjunto de numeros ${numeros}`)

for(let numero of numeros){
    let cuadrado = Math.pow(numero,potencia)
    cuadrados.push(cuadrado)
}

console.log(`Los cuadrados de estos numeros son ${cuadrados}`)