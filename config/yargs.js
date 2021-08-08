const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de Multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de Multiplicar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: 'Hasta donde se va a ejecutar el ciclo de la multiplicación'
    })
    .check((argv, options) => {
        if (isNaN(argv.b || argv.h)) {
            throw 'La base o hasta tienen que ser Numerico!'
        }
        return true;
    }).argv;

module.exports = argv;    