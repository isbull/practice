/*Crea un nuevo archivo llamado arguments.js. El programa debe aceptar un argumento y según el argumento que sea debe realizar una de las siguientes opciones:

--dirname: imprime por consola la ruta absoluta al directorio donde se encuentra el archivo arguments.js.

--filename: imprime por consola el nombre archivo actual.

--time: imprime en consola la fecha y hora actuales.

--log: guarda en un archivo info.txt en la misma ruta que el archivo principal con los datos anteriores con el siguiente formato:

[02/11/2023, 11:43] - [/home/myUser/documents/hackaboss/proyect] - [argumentos.js]
--delete: elimina el archivo info.txt creado para almacenar los logs.

Al ejecutar el archivo arguments.js con diferentes argumentos se debe ver la salida correspondiente

node arguments.js --dirname  # Mostrará la ruta absoluta al directorio donde se encuentra el archivo.
node arguments.js --filename  # Mostrará el nombre del archivo actual.
node arguments.js --time  # Mostrará la fecha y hora actual.
node arguments.js --log  # Guardará la información en un archivo de texto llamado "info.txt".
node arguments.js --delete # Eliminará el archivo "info.txt" si existe.*/

import { info } from 'console';
import fs from 'fs/promises';
import path from 'path';

// El módulo fs/promise permite guardar información en un txt
// Array con nombre de los arg válidos.

const validArgvs = ['--dirname',
    '--filename', '--tittle', '--time', '--log', '--delete'
];

// Ruta absoluta del directorio que contiene el archivo en ejecución

const dirname = process.cwd();

// Obtenemos el nombre del archivo. Debemos  obtener la ruta absoulta usando un split obteniendo el último  elemento del array con el método pop.

const filename =  path.basename(process.argv[1]);

// Obtenemos los argumentos a partir de la posición 2 del array del argumento

const args = process.argv.slice(2)

// Obtenemos la fecha y formateamos

const date = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
});

// Funcion principal
const main =async () =>{
    try {
        for (const argv of args){
            if (!validArgvs.includes(argv)) {
                throw new Error (`El argumento "${argv}" no es válido.`);
                
            }
        }
        if( args.includes('--log')&& args.includes('--delete'))
            throw new Error (`No es posible combinar el argumento "--log" con "--delete"`);

// --dirname nos da la ruta absoluta del directorio
        if (args.includes('--dirname'))
            {console.log('Directorio: ${dirname}');
    }
// Ruta absoluta del archivo en ejecución
    if (args.includes('--filename')){
        console.log(`Archivo: ${filename}`);
    }

    if (args.includes('--time')){
        console.log(`Hora: ${date}`);
    }

    if (args.includes('--log')){
        await fs.writeFile(
            'info.txt',
            `[${date}] - [${dirname}] - [${filename}], 'utf-8`
        );

        console.log('Fichero actualizado');
    }

    if (process.argv.includes('--delete')){
        await fs.unlink('infor.txt');

        console.log('Fichero eliminado');
    }





    } catch (err) {
        if(err.code=== 'ENOENT'){
            console.log('El archivo no existe');
        }else{
            console.error(err);
        }
        
    }

};

main();