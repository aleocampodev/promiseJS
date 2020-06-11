let x = 10;
document.write('1. proceso iniciado...');

setTimeout(() => {
    x = x * 3 + 2;
    document.write('2.proceso terminado...')
},5000);

document.write( '3.el resultado es ' +  x )