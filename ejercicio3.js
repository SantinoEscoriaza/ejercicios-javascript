
// Ejercicio 3: Uso de Math para Cálculos: Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. Utiliza métodos de Math.

console.log(`EJERCICIO 3`)
// Variables declaradas
let numero = -4
let numero2 = 9

// Funciones
// -- Cuadrado --
function cuadrado(valor1){
    let elevado = Math.pow(valor1,2)
    console.log(`   Su potencia al cuadrado es ${elevado}`)
}

// -- Raiz cuadrada --
function raizcuadrada(valor1){
    if(valor1<0){
        console.log(`   No se puede calcular la raiz cuadrada de un numero negativo`)
    }else{
        numRaizCuadrada = Math.sqrt(valor1)
        console.log(`   Su raiz cuadrada es ${numRaizCuadrada}`)
    }
}

// -- Valor absoluto --
function valorabsoluto(valor1){
    numAbs = Math.abs(valor1)
    console.log(`   Su valor absoluto es ${numAbs}`)
}

// Resultados
console.log(`Para el numero ${numero}`)
cuadrado(numero)
raizcuadrada(numero)
valorabsoluto(numero)

console.log(`Para el numero ${numero2}`)
cuadrado(numero2)
raizcuadrada(numero2)
valorabsoluto(numero2)