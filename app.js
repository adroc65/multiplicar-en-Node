


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');
const argv = require( './config/yargs' ).argv; // Se requiere una variable no un método.
const colors = require('colors');


// Recibir ordenes por la linea de comando:
let comando = argv._[0]; //Ya que YARG crea el arreglo "_" donde guarda los comandos dados.

//console.log('Base: ' + argv.base);
//console.log('Limite: ' + argv.limite);
//console.log('Comando: ' + comando);

switch (comando) {
    case 'listar':
	listarTabla(argv.base, argv.limite)
	    .then (archivo => console.log(`Listando la tabla del ${argv.base} del 1 al ${argv.limite}`))
            .catch (err => console.log(err));
        break;

    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then (archivo => console.log(`Archivo Creado: ./${ archivo.yellow }`))
            .catch (err => console.log(err)); // Se maneja el error devuelto por la promesa.
        break;

    default:
        console.log('Comando No Encontrado !');
        
        break;
}


