/**
 * Factorial
 * Escribe un programa que solicite un número entero n, donde 1 <= n. Resuelve esto utilizando recursión.
 */
/**
 * La recursión en JavaScript (y en la programación en general) es un concepto en el que una función se llama a sí misma directa o indirectamente para resolver un problema.
 * Cuando una función se llama a sí misma dentro de su propio cuerpo, esto se conoce como una llamada recursiva. La recursión generalmente implica dividir un problema en subproblemas más pequeños que son más fáciles de resolver, y luego combinar las soluciones de los subproblemas para obtener la solución al problema original.
 */


// solicitar número
const numUser = prompt("Ingresa un número entero igual o mayor a 1:");

function factorialNum(numUser) {
    //Caso 1: cuando n = 1 debe regresar 1
    if (numUser === 1) {
        return 1;
    }
    //Caso 2: para n != 1, se debe realizar el factorial N! = n (n -1)
    else {
        return numUser * factorialNum(numUser - 1);
    }
}

console.log(factorialNum(numUser));
