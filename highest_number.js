/**Escribe un programa que pida 10 números. 
 * Utilizando operadores lógicos y cualquier otra función/estructura de JavaScript que hayas visto antes, determina y muestra el número más alto de esos números.
 */
// Solicitar al usuario que ingrese 10 números
let numbers = [];
for (let i = 0; i < 10; i++) {
    let number = parseFloat(prompt(`Ingresa el número ${i + 1}:`)); //parseFloat() es una función que convierte una cadena (string) que representa un número en un número de punto flotante (decimal).
    numbers.push(number); 
}

// Math.max() es una función que se utiliza para encontrar el valor máximo entre dos o más números, se debe utilizar el operador de propagación (...) para expandir los elementos del array como argumentos de la función Math.max()
let highestNumber = Math.max(...numbers);

// Mostrar el número más alto
console.log("El número más alto es:", highestNumber);
