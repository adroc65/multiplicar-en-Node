// Requireds

const fs = require('fs');
const colors = require('colors');

const listarTabla = ( base, limite = 10 ) =>{
    return new Promise((resolve, reject)=>{
        //Se chequea que la base sea un número.
        if (!Number( base && limite )){
            reject ('Los valores introducidos deben ser Numéricos');
            return; // Sale de la promesa.
        }
        console.log('================='.blue);
        console.log(`== Tabla del ${ base } ==`.cyan);
        console.log('================='.blue);
        for (let i = 1; i <= limite; i++) {

            resolve( console.log(`${base} * ${i} = ${ base * i }`) );
        };
       
    });

}
const crearArchivo = ( base, limite = 10 ) =>{

    return new Promise((resolve, reject)=>{
        //Se chequea que la base sea un número.
        if (!Number( base & limite )){
            reject ('Los valores introducidos deben ser Numéricos');
            return; // Sale de la promesa.
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data +=`${base} * ${i} = ${ base * i }\n`;
        };
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
          if (err) 
                reject (err)
          else
                resolve(`tablas/tabla-${ base }.txt`);
        });
        
    });
}

module.exports ={
    crearArchivo,
    listarTabla
}