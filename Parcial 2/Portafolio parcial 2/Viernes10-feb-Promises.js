function sumaruno(numero){

    var prom = new Promise(function(resolve, reject) {
        if(numero >= 7){
            reject("Numero muy grande!")
        }
        setTimeout(function(){
            resolve(numero + 1)
        });
    })
    return prom;
}

sumaruno(5)
    .then(sumaruno)
    .then(sumaruno)
    .then(nuevovalor=>{
    console.log(nuevovalor)
}).catch(err =>{
    console.log(err)
} )