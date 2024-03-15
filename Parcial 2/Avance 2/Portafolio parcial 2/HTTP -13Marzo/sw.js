// Ciclo de vida del SWZS


self.addEventListener('install', event => {
    console.log("Instalando SW");

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("SW: Instalación finalizada");
            self.skipWaiting();
            resolve();
        }, 100);
    });

    event.waitUntil(instalacion);
});


self.addEventListener('activate', event=>{
    console.log("SW activado");
})