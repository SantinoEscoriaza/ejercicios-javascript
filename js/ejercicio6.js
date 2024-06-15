
// Ejercicio 6: Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays.

console.log(`EJERCICIO 6`)
// Variables declaradas
let cadena = 'Esto es un texto de referencia con las palabras en orden'

// Funcion para poner las palabras alreves
function invertir(texto){
    // Array que contiene a las palabras
    let contenedor = texto.split(" ")
    
    // Array con las palabras colocadas hacia atras
    let reverse = contenedor.reverse()

    // Variable que une a las palabras en una cadena
    let resultado = reverse.join(" ")
    return resultado
}

// Resultado
console.log(cadena)
console.log(`Texto alterado: ${invertir(cadena)}`)