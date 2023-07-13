const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() =>{
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            dias = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            horas = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
            minutos = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60))).slice(-2),
            segundos = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos</h3>`
    
        if(limitTime < 0){
            clearInterval(countdownTempo);
        }
    
    }, 1000)
}