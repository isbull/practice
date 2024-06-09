/*Crea un pequeño script que, dependiendo de la variable de entorno MODE, mostrará un mensaje indicando si el sistema está en modo de desarrollo o producción.

Crea un archivo nuevo llamado env.js. 

En este archivo utilizarás process.env para acceder a la variable de entorno MODE. 

Implementa una lógica de control para mostrar uno de los siguientes mensajes en consola:

Si MODE es igual a 'development', muestra: "El modo activado es el de desarrollo".

Si MODE es igual a 'production', muestra: "El modo activado es el de producción" .

Si MODE no está establecida o tiene un valor diferente, muestra: "Por favor, establece la variable de entorno MODE a 'development' o 'production'". 

Ejecuta tu script en la terminal, asegurándote de establecer la variable de entorno MODE antes de hacerlo. Deberías ver el mensaje correspondiente según el valor de MODE. */

const {MODE} = process.env;

if (MODE === 'development') {
    console.log('El modo activado es el de desarrollo');
}else if (MODE === 'production') {
    console.log('El modo activo es el produccion');
}else{
    console.log("Por favor, establece la variable de entorno MODE a 'developer' o  'production'");
};

console.log(MODE);

