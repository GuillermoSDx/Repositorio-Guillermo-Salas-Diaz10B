// Detectar si podemos usar el Service Workers
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
}