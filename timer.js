let temporizador = setInterval(printer,100);
let x = 0;
let segundos = 0;
let minutos = 0;
let timer = "apagado";


function printer() {
    if (timer == "encendido") {
        x++;
        segundos = x%60;
        if (x%60 == 0) {
            minutos++;
        }
        console.log(x);
        if (segundos<10) {
            console.log(minutos + ":0" + segundos);
            const timertext = document.getElementById("tempo");
            timertext.innerHTML = minutos + ":0" + segundos;
        } else {
            console.log(minutos + ":" + segundos);
            const timertext = document.getElementById("tempo");
            timertext.innerHTML = minutos + ":" + segundos;
        }
        
    } else {
        x = 0;
        segundos = 0;
        minutos = 0;
        const timertext = document.getElementById("tempo");
        timertext.innerHTML = minutos + ":0" + segundos;
    }
}
