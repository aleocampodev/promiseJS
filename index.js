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

//Promesas con array de objetos
let usuarios = [{
    id:1,
    nombre: 'Marcos'
},
{
    id:2,
    nombre:'Lena'
}];

let telefonos = [{
    id:1,
    telefono: 12345678
},{
    id:2,
    telefono: 87654321
}];

const obtenerUsuario = id => {
    //Para obtener el usuario
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario => usuario.id === id)){
             document.write('El usuario existe');
             resolve(obtenerTelefono(2))
        }else {
            reject('El usuario no existe')
        }
    })
};

const obtenerTelefono = id => {
    return new Promise((resolve,reject)=>{
        if(telefonos.find( telefono => telefono.id === id)){
            resolve(`<div>El telefono existe</div>`)
        }else {
            reject(`<div>El telefono no existe</div>`)
        }
    })
};

obtenerUsuario(1)
.then(res => {
    return res 
})
.then(mensaje => {
    document.write(mensaje)
})
.catch(error => {
    console.error(error)
});



