const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

crearArchivo(argv.b, argv.l, argv.h)
    .then(msg => {
        console.log(msg.rainbow, 'creado exitosamente!');
    }).catch(err =>{ console.log(err); });
