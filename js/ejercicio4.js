
// Ejercicio 4: Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo.

console.log(`EJERCICIO 4`)

// Variables declaradas
let rectangulo = document.querySelector('.rectangulo')
let largo = rectangulo.clientWidth;
let ancho = rectangulo.clientHeight;
let perimetro = 0
let area = 0

// Funcion para calcular perimetro y area
function calcularPerimetroYArea() {
    perimetro = largo * 2 + ancho * 2
    area = ancho * largo
}

// Resultado
calcularPerimetroYArea()
console.log(`El perimetro del rectangulo en pantalla es de ${perimetro}px, y su area es de ${area}px²`)

