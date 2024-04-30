// Pedir al usuario su información: nombre de usuario, edad y una lista de sus películas favoritas. Almacenar la información y luego mostrarla en la consola. Ten en cuenta que la salida para las películas debería agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.

//Definimos las variables
let userName = prompt("Ingresa tu nombre de usuario:");
let ageUser = prompt("Ingresa tu edad:");
let moviesUser = prompt("Ingresa tus películas favoritas:");

//mostrar el consola con console.log()
console.log(userName);
console.log(ageUser);
console.log(`La película ${moviesUser} es una de mis favoritas.`);