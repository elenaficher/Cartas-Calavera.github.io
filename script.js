let newCards = [].concat(cards);

function btnStart(){
    let arrCard = [];
    timer = "encendido";

    if (newCards.length>0) {
        for (let i=0; i<4 ; i++) {
            let rndcard = Math.floor(Math.random() * (newCards.length-1));
            arrCard.push(newCards[rndcard]);
            newCards.splice(rndcard,1);
        }
        const cont = document.getElementById("cont-card");
        cont.innerHTML = newCards.length;
        
        const nc1 = document.getElementById("num1-card");
        nc1.innerHTML = arrCard[0].número;
        const nc2 = document.getElementById("num2-card");
        nc2.innerHTML = arrCard[1].número;
        const nc3 = document.getElementById("num3-card");
        nc3.innerHTML = arrCard[2].número;
        const nc4 = document.getElementById("num4-card");
        nc4.innerHTML = arrCard[3].número;
    
        const ex1 = document.getElementById("exe1");
        ex1.innerHTML = arrCard[0].valor + " " + arrCard[0].ejercicio;
        const ex2 = document.getElementById("exe2");
        ex2.innerHTML = arrCard[1].valor + " " + arrCard[1].ejercicio;
        const ex3 = document.getElementById("exe3");
        ex3.innerHTML = arrCard[2].valor + " " + arrCard[2].ejercicio;
        const ex4 = document.getElementById("exe4");
        ex4.innerHTML = arrCard[3].valor + " " + arrCard[3].ejercicio;

        const pa1 = document.getElementById("palo1");
        pa1.src = arrCard[0].iconCard;
        const pa2 = document.getElementById("palo2");
        pa2.src = arrCard[1].iconCard;
        const pa3 = document.getElementById("palo3");
        pa3.src = arrCard[2].iconCard;
        const pa4 = document.getElementById("palo4");
        pa4.src = arrCard[3].iconCard;

        if (newCards.length==0) {
            const buttonFinish = document.getElementById("text-start");
            buttonFinish.innerHTML = "FINALIZAR";
        }
        
    } else {
        btnStop();
        timer = "apagado";
    }
}

function btnStop(){
    newCards = [].concat(cards);
    const cont = document.getElementById("cont-card");
    cont.innerHTML = newCards.length;

    const nc1 = document.getElementById("num1-card");
    nc1.innerHTML = "-";
    const nc2 = document.getElementById("num2-card");
    nc2.innerHTML = "-";
    const nc3 = document.getElementById("num3-card");
    nc3.innerHTML = "-";
    const nc4 = document.getElementById("num4-card");
    nc4.innerHTML = "-";

    const ex1 = document.getElementById("exe1");
    ex1.innerHTML = "---";
    const ex2 = document.getElementById("exe2");
    ex2.innerHTML = "---";
    const ex3 = document.getElementById("exe3");
    ex3.innerHTML = "---";
    const ex4 = document.getElementById("exe4");
    ex4.innerHTML = "---";

    const pa1 = document.getElementById("palo1");
    pa1.src = "img/icons/icon-diamond.svg";
    const pa2 = document.getElementById("palo2");
    pa2.src = "img/icons/icon-pica.svg";
    const pa3 = document.getElementById("palo3");
    pa3.src = "img/icons/icon-heart.svg";
    const pa4 = document.getElementById("palo4");
    pa4.src = "img/icons/icon-trebol.svg";

    const buttonFinish = document.getElementById("text-start");
    buttonFinish.innerHTML = "COMENZAR";

    timer = "apagado";
}