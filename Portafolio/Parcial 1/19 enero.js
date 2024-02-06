var namedSum = function sum (a,b) {
    return a+b;
}

var anonSum = function (a,b) {
    return a+b; 
}



var say = function say(times){
    if (times>0){
        say=undefined;
        console.log("Hello!" + times);
        say(times-1);
    }
}

var saysay= say;
say="Oops!";

// saysay(10)

function logSomeThings() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        
    }
    
}
// logSomeThings("Hello", "World");

function personLogsSomeThings(p, ...msj) {

    msj.forEach(arg =>{
        console.log(p + " say:" + arg);
    })
    
}
personLogsSomeThings("foo", "Hello", "World", "JS", "React")
