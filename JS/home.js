let pekkabackground=document.querySelector(".pekkabackground")

window.addEventListener("load",pekkabackgroundanpassen)
window.addEventListener("resize",pekkabackgroundanpassen)


function pekkabackgroundanpassen(){

pekkabackground.style.width=body.clientWidth+"px";
pekkabackground.style.height=window.innerHeight*0.9+"px";

}