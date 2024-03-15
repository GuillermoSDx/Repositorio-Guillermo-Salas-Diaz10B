function sumaruno(numero, callback){
    setTimeout(function(){
        callback(numero + 1)
        //return numero + 1;
    },800)
}
sumaruno(1, function (nuevovalor){
    console.log(nuevovalor)
    sumaruno(nuevovalor, function(nuevovalor2){
        console.log(nuevovalor2);
        sumaruno(nuevovalor2, function(nuevovalor3){
            console.log(nuevovalor3)
        });
    });
})