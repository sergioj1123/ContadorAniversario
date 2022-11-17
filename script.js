const diasC = document.getElementById("days");
const horasC = document.getElementById("horas");
const minutosC = document.getElementById("minutos");
const segundosC = document.getElementById("segundos");

//data que deseja marcar
const data = "17 Jan 2023"

function contador(){
    const dataAniversario = new Date(data);
    const dataAtual = new Date();

    const totalSegundos = (dataAniversario - dataAtual) /1000;

    const dias = Math.floor(totalSegundos /  3600 /24);
    const horas = Math.floor(totalSegundos /  3600) % 24;
    const minutos = Math.floor(totalSegundos /60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasC.innerHTML = dias;
    horasC.innerHTML = formatarHora(horas);
    minutosC.innerHTML = formatarHora(minutos);
    segundosC.innerHTML = formatarHora(segundos);
}

//Funcao para aparecer o segundo 0 no timer, para nao travar no 1 segundo
function formatarHora(hora){
    return hora < 10 ? `0${hora}` : hora;
}

//Inicia Contador
contador();

setInterval(contador, 1000);



