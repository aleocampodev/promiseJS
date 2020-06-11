const list = document.querySelector("#list");
let x = 10;
//document.write('1. proceso iniciado...');

//funcion asincrona
/*setTimeout(() => {
    x = x * 3 + 2;
    document.write('2.proceso terminado...')
},5000);

document.write( '3.el resultado es ' +  x )*/

//convertirlo a promesas
const promesa = new Promise((resolve,reject) => {
    setTimeout(() => {
        x = x * 3 + 2;
        list.innerHTML += `<li>2.Proceso terminado...</li>`
        resolve(x);
    },5000);

})

list.innerHTML += `<li>1.Proceso iniciado...</li>`;

promesa.then(res => {
    list.innerHTML += `<li>3.El resultado es: ${res}</li>`
})

