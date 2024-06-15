<h1>TPO: Ejercicios de aplicacion de Javascript</h1>

**Descripcion:** el proyecto consiste en resolver una serie de ejercicios usando las herramientas de JS aprendidas en clase, o investigando en caso de ser necesario / conveniente

<h2>Enunciados de cada ejercicio</h2>
<h3 align="left">Ejercicio 1</h3>
Uso de for...of y Arrays: Escribe una función que reciba un array de números y retorne un nuevo array con cada número elevado al cuadrado. Utiliza un bucle for...of para iterar sobre los elementos del array.
<h3 align="left">Ejercicio 2</h3>
Uso de for y Cadenas: Crea una función que reciba una cadena y devuelva una nueva cadena con las vocales en mayúsculas. Utiliza un bucle for para iterar sobre los caracteres de la cadena.
<h3 align="left">Ejercicio 3</h3>
Uso de Math para Cálculos: Escribe una función que reciba un número y devuelva un objeto con sus propiedades matemáticas: el cuadrado, la raíz cuadrada y el valor absoluto. Utiliza métodos de Math.
<h3 align="left">Ejercicio 4</h3>
Clases y Métodos: Define una clase Rectangle que tenga dos propiedades width y height. Incluye métodos para calcular el área y el perímetro del rectángulo.
<h3 align="left">Ejercicio 5</h3>
Uso de for...of con Objetos: Escribe una función que reciba un objeto con propiedades de alumnos y sus notas (por ejemplo, {Juan: 8, Maria: 9, Pedro: 7}) y devuelva el promedio de las notas. Utiliza un bucle for...of para iterar sobre los valores del objeto.
<h3 align="left">Ejercicio 6</h3>
Manipulación de Strings: Crea una función que reciba una cadena y devuelva la misma cadena con las palabras en orden inverso. Utiliza métodos de manipulación de cadenas y arrays.
<h3 align="left">Ejercicio 7</h3>
Uso de for y Arrays: Escribe una función que reciba dos arrays de la misma longitud y devuelva un nuevo array con la suma de los elementos correspondientes. Utiliza un bucle for para iterar sobre los índices de los arrays.

<h2>Detalles a tener en cuenta</h2>
<h3 align="left">Ejercicio 3</h3>
- Se tuvo en consideracion el ingreso de numeros negativos para la raiz cuadrada, por lo que para este caso se uso un if que compruebe el signo del numero. Para evidenciar esto, el ejercicio esta planteado para un numero positivo y uno negativo, que tambien nos permite ver el uso del valor absoluto
<h3 align="left">Ejercicio 4</h3>
- Mi interpretacion del ejercicio fue la de calcular perimetro y area apartir de una clase del html, lo que tendria mas sentido a fines practicos. Investigue sobre como hacerlo, llamando a la clase '.rectangulo' y a las propiedades de su estilo. El procedimiento para cualquier otro caso seria muy similar, reemplazando las propiedades del rectangulo por lo que necesitemos, ya sean propiedades de un objeto de js, o elementos de un array
<h3 align="left">Ejercicio 5</h3>
- Investigue un poco sobre como usar objetos de JavaScript ya que no vimos esto en clase, pero no me consta que la metodologia usada sea la mas correcta. Es un codigo que deberia ser revisado.
<h3 align="left">Ejercicio 6</h3>
- Mi interpretacion del ejercicio fue colocar literalmente las palabras en orden inverso en la oracion, pero tambien pense en la posibilidad de que lo que se pide sea que cada palabra este escrita alreves, es decir con las letras en orden invertido. Esto seria algo mas complejo de programar, asique me quede con lo que supongo que pide el enunciado
<h3 align="left">Ejercicio 7</h3>
Interprete que el ejercicio podria pedir tanto: 
1. Que los elementos de cada array se junten de forma literal, para ocupar el mismo espacio que ocupaban por separado. 
2. Que los elementos de cada array sean numeros, y estos se sumen de forma correspondiente, dejando el resultado en el espacio que cada elemento ocupaba.
Ambas posibilidades fueron planteadas por separado, usando un array alfanumerico con uno numerico, y para la segunda posibilidad usando dos arrays numericos.