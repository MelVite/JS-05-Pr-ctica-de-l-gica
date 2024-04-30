/**
 * Palíndromo
 * Escribe un programa que solicite una palabra o frase (puede estar en mayúsculas, tener espacios y puntuación). Descubre si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras en mayúscula.
 */
// Solicitar al usuario la palabra o frase
const frase = prompt("Ingresa una palabra o frase para verificar si es un palíndromo:");

function esPalindromo(frase) {
    // Convertir la frase a minúsculas y eliminar los espacios y la puntuación
    /**
     * toLowerCase() -> convierte una cadena de texto a minúsculas
     * replace()  -> es un método que se utiliza para buscar una cadena dentro de otra cadena y reemplazar todas las coincidencias encontradas con una nueva cadena o valor. Este método devuelve una nueva cadena donde se han realizado los reemplazos, pero no modifica la cadena original.
     * /[\W_]/g en JavaScript se utiliza para encontrar todos los caracteres que no son letras, números o guiones bajos () en una cadena de texto. Esta expresión regular busca cualquier caracter que no sea una palabra (\W) o un guión bajo ().
     *  Descomposición de la expresión regular:
     *  []: Indica un conjunto de caracteres.
     *  \W: Representa cualquier caracter que no sea una palabra (letra, número o guión bajo).
     *  _: Añade también el guión bajo como caracter a buscar.
     *  /g: Es el modificador global que indica que la búsqueda debe ser global, es decir, no se detiene después de encontrar la primera coincidencia, sino que busca todas las coincidencias en toda la cadena.
     * Entonces, cuando aplicas esta expresión regular a una cadena usando métodos como replace() o match(), se eliminarán todos los caracteres que no son letras, números o guiones bajos.
     */
    const fraseLimpia = frase.toLowerCase().replace(/[\W_]/g, '');
    
    // Comparar la frase original con la versión invertida
    /**
     * split('') -> divide la cadena en un array de caracteres individuales.
     * reverse() -> invierte el orden de los elementos en el array
     * join('') ->  une todos los elementos del array en una sola cadena de texto.
     */
    return fraseLimpia === fraseLimpia.split('').reverse().join('');
}

// Verificar si la palabra o frase es un palíndromo e imprimir el resultado
if (esPalindromo(frase)) {
    console.log(`¡La palabra o frase "${frase}" es un palíndromo!`);
} else {
    console.log(`La palabra o frase "${frase}" no es un palíndromo.`);
}
