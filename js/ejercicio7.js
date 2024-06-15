
// Ejercicio 7: Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays.

console.log(`EJERCICIO 7`)

// Variables
let array1 = ['A', 'B', 'C', 'D', 'E']
let array2 = [1, 2, 3, 4, 5]
let array3 = [2, 2, 7, 10, -1]


// Posible resolucion: combinar los elementos
function agregar(conjunto1, conjunto2){
    let array4 = new Array
    
    // Almacenar la cantidad de elementos de cada array
    let longitud1 = conjunto1.length
    let longitud2 = conjunto2.length

    // Comprobar que tengan la misma cantidad de elementos y actuar
    if(longitud1 == longitud2){
        for(let i = 0; i<longitud1; i++){
            array4.push(String(conjunto1[i]) + String(conjunto2[i]))
        }
        return array4
    }
    else{
        console.log(`Los conjuntos no tienen la misma cantidad de elementos`)
    }
}

// Posible resolucion: sumar los elementos (solo para conjuntos numericos)
function sumar(conjunto1, conjunto2){
    let array4 = new Array

    // Almacenar la cantidad de elementos de cada array
    let longitud1 = conjunto1.length
    let longitud2 = conjunto2.length
    
    // Comprobar que tengan la misma cantidad de elementos y actuar
    if(longitud1 == longitud2){
        for(let i = 0; i<longitud1; i++){
            array4.push((conjunto1[i]) + (conjunto2[i]))
        }
        return array4
    }
    else{
        console.log(`Los conjuntos no tienen la misma cantidad de elementos`)
    }
}

// Resultados

console.log(`Para los conjuntos: "${array1}", "${array2}", la combinacion de sus elementos es ${agregar(array1, array2)}`)
console.log(`Para los conjuntos numericos: "${array2}", "${array3}", la suma de sus elementos es ${sumar(array2, array3)}`)