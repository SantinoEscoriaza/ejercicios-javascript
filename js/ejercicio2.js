
// Ejercicio 2: Uso de for y Cadenas: Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena.

console.log(`EJERCICIO 2`)
// Variables declaradas
let texto = 'este texto tiene sus vocales en minuscula'
let texto2 = ''
let vocales = 'aeiou'

// Texto referencia
console.log(texto)

// Funcion para las letras en mayuscula
for(let i = 0; i<=texto.length; i++){

    let letra = texto.charAt(i)

    if(vocales.includes(letra)){
        texto2 = texto2 + letra.toUpperCase()
    } else {
        texto2 = texto2 + letra
    }

}

// Resultado
console.log(`Texto alterado: ${texto2}`)