
// Ejercicio 5: Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto.

console.log(`EJERCICIO 5`)
// Objeto con notas
let notas = {
    Juan: 8,
    Maria: 9,
    Pedro: 7,
    Alejo: 5
}

// Funcion promedio
function promedio(valores){
    let contador = 0
    let sumatoria = 0
    let promedio = 0

    // For para contar cuantas notas hay y sumarlas
    for(let nota of Object.values(notas)){
        contador++
        sumatoria = sumatoria + nota
    }

    // Promedio
    promedio = sumatoria / contador
    return promedio
}

console.log(`Para las siguientes notas: ${Object.values(notas)}. El promedio es ${promedio(notas)}`)