const d = document,
w = window,
ls = localStorage;

export default function modoOscuro(btn, atributo) {

    const $boton = d.querySelector(btn),
    $selectores = d.querySelectorAll("[data-oscuro]");

    let luna = "🌙",
    sol = "☀";

    function darkmode(){
        $selectores.forEach((el) => el.classList.add("modo-oscuro"));
        $boton.textContent = sol;
        ls.setItem("theme","dark")
    }
    function lightmode() {
        $selectores.forEach((el) => el.classList.remove("modo-oscuro"));
        $boton.textContent = luna;
        ls.setItem("theme","light")
    }

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            if ($boton.textContent === luna) {
                darkmode();
            } else{
               lightmode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e) =>{
        if (ls.getItem("theme") === null || ls.getItem("theme") === "light") {
            lightmode()
        } else if (ls.getItem("theme") === "dark"){
            darkmode()
        }
    })
};