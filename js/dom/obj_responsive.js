const d = document,
w = window;

export default function responsiveMedia(id, mq, mobilecontent, desktopcontent){
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopcontent;
        } else{
            d.getElementById(id).innerHTML = mobilecontent
        }
    }

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint)
}