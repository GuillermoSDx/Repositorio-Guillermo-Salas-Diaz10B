var prism = function(l,w,h){
    return l*w*h;
}
console.log(prism(55,66,21));
var prisma = function(l){
    return function (w){
        return function(h){
            return l*w*h
        }
    }
}

console.log(prisma(56)(78)(45));

var foo=(function(){
        console.log("mensaje");
    }()
);

 const bar = (function () {
    return 56;
 }());

 console.log(bar);