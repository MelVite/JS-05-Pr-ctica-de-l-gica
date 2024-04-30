/**
 * Alarma
 * Escribe un programa que pregunte al usuario por la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que esos segundos hayan pasado en tiempo real.
 * Ejemplo de resultado: "Hora de dormir después de 10 segundos"."
 */
// Solicitar al usuario la cantidad de segundos para la alarma
//parseInt() es una función que analiza una cadena y devuelve un número entero basado en la representación numérica encontrada en esa cadena.
const segundos = parseInt(prompt("Ingresa la cantidad de segundos en los que se ejecutará la alarma:"));

// Función para mostrar el mensaje de la alarma
function activarAlarma(segundos) {
    //setTimeout es una función que se utiliza para ejecutar una función después de que haya transcurrido un cierto período de tiempo, expresado en milisegundos. Es útil para realizar tareas que deben ejecutarse después de un retraso específico, como animaciones, actualizaciones de in5terfaz de usuario, o cualquier otra tarea que no necesite ejecutarse inmediatamente.
    setTimeout(function() {
        console.log(`¡Hora de dormir después de ${segundos} segundos!`);
    }, segundos * 1000); // Convertir segundos a milisegundos
}
activarAlarma(segundos);
