import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburger.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import scrollTopBtn from "./dom/scroll_boton.js";
import { moveBall } from "./dom/teclado.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
   hamburgerMenu(".panel-btn",".panel",".menu a");
   digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
   alarm("assets/alarma.mp3", "#activar-alarma","#desactivar-alarma");
   countdown("countdown","Feb 17, 2024 12:30:00","Feliz cumpleaños¡!");
   scrollTopBtn(".scroll-top-btn")
});

d.addEventListener("keydown", (e) =>{
   moveBall(e, ".ball", ".stage");
})
