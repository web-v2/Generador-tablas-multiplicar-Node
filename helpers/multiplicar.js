const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base, listar, hasta) =>{
    try{    
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`;
        }
        if(listar){
            console.log('============================='.green);
            console.log('Tabla del '.green,colors.blue(base),'del', '1'.blue, 'Hasta el'.green,colors.blue(hasta));
            console.log('============================='.green);
            console.log(consola);
        }
        const nomb = `tabla-${base}.txt`;
        fs.writeFileSync('./salida/'+nomb, salida);
        return nomb;
    }catch(err){
        throw err;
    }
}

module.exports = {crearArchivo}