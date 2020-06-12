const setText = data => {
    myContent.textContent = data
}

const getData = callback => {
    setText('Solicitando autorizacion')
    setTimeout(() => {
        callback(true) 
    },2000)
}

const getDataAsync = () => {
    return new Promise((resolve,reject) => {
        setText('Solicitando autorizacion')
        setTimeout(() => {
            resolve(true)
        },2000)
    })
}

const showData = callback => {
    setText('Esperando a mostrar la informacion')
    setTimeout(() => {
        callback({
            name:'Alejandra'
        }) 
    },2000)
}

const showDataAsync = () => {
    return new Promise((resolve,reject) =>{
        setText('Esperando a mostrar la informacion')
        setTimeout(() => {
            resolve({
                name:'Alejandra'
            }) 
        },2000)  
    })
}

btn.addEventListener('click', () => {
    getDataAsync().then(authorization => {
        authorization && showDataAsync().then(user => setText(user.name))
    })
    
    /*getData( authorization => {
       authorization && showData(user => setText(user.name))
         
    })*/
})