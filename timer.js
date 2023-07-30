let temporizador = setInterval(printer,1000);
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
        if (segundos<10) {
            const timertext = document.getElementById("tempo");
            timertext.innerHTML = minutos + ":0" + segundos;
        } else {
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
