import countdown from "./dom/cuenta_regresiva.js";
import networkstatus from "./dom/deteccion_red.js";
import infoUrl from "./dom/fetch_git.js";
import searchFilters from "./dom/filtro_busquedas.js";
import hamburgerMenu from "./dom/menu_hamburger.js";
import modoOscuro from "./dom/modo_oscuro.js";
import responsiveMedia from "./dom/obj_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import {digitalClock, alarm} from "./dom/reloj.js";
import scrollTopBtn from "./dom/scroll_boton.js";
import { moveBall } from "./dom/teclado.js";
import crearItem from "./dom/todo_list.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
   hamburgerMenu(".panel-btn",".panel",".menu a");
   digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
   alarm("assets/alarma.mp3", "#activar-alarma","#desactivar-alarma");
   countdown("countdown","Feb 17, 2024 12:30:00","Feliz cumpleaños¡!");
   scrollTopBtn(".scroll-top-btn");
   responsiveMedia(
      "youtube",
      "(min-width: 1024px)",
      `<a href="https://youtu.be/2SetvwBV-SU">Ver video</a>`,
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
   responsiveMedia(
      "gmaps",
      "(min-width: 1024px)",
      `<a href="https://goo.gl/maps/T8btMqNkedpBzLiu9">Ver mapa</a>`,
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.170878873525!2d-60.67391790361198!3d-32.9270844228931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b654abc3ab1d5f%3A0x2f90ce97db2c5a6!2sAlto%20Rosario%20Shopping!5e0!3m2!1ses-419!2sar!4v1689619022317!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
   responsiveTester("resp-test");
   infoUrl("Gitname");
   searchFilters(".card-filter",".card");
});
modoOscuro(".tema-oscuro-btn","modo-oscuro");
crearItem();
networkstatus();

d.addEventListener("keydown", (e) =>{
   moveBall(e, ".ball", ".stage");
})



