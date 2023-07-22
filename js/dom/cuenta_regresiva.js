const d = document;

export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() =>{
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            segundos = 1000,
            minutos = segundos * 60,
            horas = minutos * 60,
            dias = horas * 24,
            diasRestantes = Math.floor(limitTime / dias),
            horasRestantes = Math.floor((limitTime % dias) / horas),
            minutosRestantes = Math.floor((limitTime % horas) / minutos),
            segundosRestantes = Math.floor((limitTime % minutos) / segundos);
        $countdown.innerHTML = `<h3>Faltan: ${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos, ${segundosRestantes} segundos</h3>`
    
        if(limitTime < 0){
            clearInterval(countdownTempo);
        }
    
    }, 1000)
}
