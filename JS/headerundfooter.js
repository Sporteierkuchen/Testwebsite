
let body=document.querySelector(".body")
let boxmenü=document.getElementsByClassName("boxmenü")
let box=document.getElementsByClassName("box")
let icon=document.getElementById("#icon1")
let mainlinks=document.getElementsByClassName("mainlinks")
let footerlinks=document.getElementsByClassName("footerlinks")
let hauptmenübalken=document.querySelector(".hauptmenübalken")
let mainmenu=document.querySelector(".mainmenu")
let hauptmenü=document.querySelector(".hauptmenü")
let headerbalken=document.querySelector(".headerbalken")
let headermf=document.querySelector(".headermf")
let logolink=document.querySelector(".logolink")
let logo=document.querySelector(".logo")
let suchfeld=document.querySelector(".suchfeld")
let bowlertext=document.querySelector(".bowlertext")
let bowleraudio=document.getElementsByClassName("bowleraudio")


//Mainmenü anpassungen

function mainmenüanpassen() {

if (boxmenü[0]!=null && window.innerWidth>720 &&  box.length==7) {

boxmenü[0].style.height="inherit";
boxmenü[1].style.height="inherit";
boxmenü[2].style.height="inherit ";
boxmenü[3].style.height="inherit";
boxmenü[4].style.height="inherit";
boxmenü[5].style.height="inherit";
boxmenü[6].style.height="inherit";
boxmenü[0].style.borderLeft = "2px solid rgba(255, 102, 0, 0.925)";
box[0].style.borderLeft = "none";  
box[1].style.borderLeft="2px solid white";
box[2].style.borderLeft="2px solid white";
box[3].style.borderLeft="2px solid white";
box[4].style.borderLeft="2px solid white";
box[5].style.borderLeft="2px solid white";
box[6].style.borderLeft="2px solid white";
boxmenü[6].style.borderRight = "2px solid rgba(255, 102, 0, 0.925)";
schriftgrößeanpassen()

} 
else if (boxmenü[0]!=null && window.innerWidth>720 &&  box.length==14) {
  
boxmenü[6].removeChild(box[13])
boxmenü[5].removeChild(box[11])
boxmenü[4].removeChild(box[9])
boxmenü[3].removeChild(box[7])
boxmenü[2].removeChild(box[5])
boxmenü[1].removeChild(box[3])
boxmenü[0].removeChild(box[1])
boxmenü[0].style.height="inherit";
boxmenü[1].style.height="inherit";
boxmenü[2].style.height="inherit ";
boxmenü[3].style.height="inherit";
boxmenü[4].style.height="inherit";
boxmenü[5].style.height="inherit";
boxmenü[6].style.height="inherit";
boxmenü[0].style.borderLeft = "2px solid rgba(255, 102, 0, 0.925)";
box[0].style.borderLeft = "none";  
box[1].style.borderLeft="2px solid white";
box[2].style.borderLeft="2px solid white";
box[3].style.borderLeft="2px solid white";
box[4].style.borderLeft="2px solid white";
box[5].style.borderLeft="2px solid white";
box[6].style.borderLeft="2px solid white";
boxmenü[6].style.borderRight = "2px solid rgba(255, 102, 0, 0.925)";

boxmenü[0].style.justifyContent = "center";
boxmenü[1].style.justifyContent = "center";
boxmenü[2].style.justifyContent = "center";
boxmenü[3].style.justifyContent = "center";
boxmenü[4].style.justifyContent = "center";
boxmenü[5].style.justifyContent = "center";
boxmenü[6].style.justifyContent = "center";

schriftgrößeanpassen();

}

if(window.innerWidth<=720 && box.length==14){

box[0].style.borderLeft="none";
box[1].style.borderLeft="none";
box[2].style.borderLeft="none";
box[3].style.borderLeft="none";
box[4].style.borderLeft="none";
box[5].style.borderLeft="none";
box[6].style.borderLeft="none";
box[7].style.borderLeft="none";
box[8].style.borderLeft="none";
box[9].style.borderLeft="none";
box[10].style.borderLeft="none";
box[11].style.borderLeft="none";
box[12].style.borderLeft="none";
box[13].style.borderLeft="none";
boxmenü[0].style.borderLeft = "none";
boxmenü[6].style.borderRight = "none";

boxmenü[0].style.justifyContent = "space-between";
boxmenü[1].style.justifyContent = "space-between";
boxmenü[2].style.justifyContent = "space-between";
boxmenü[3].style.justifyContent = "space-between";
boxmenü[4].style.justifyContent = "space-between";
boxmenü[5].style.justifyContent = "space-between";
boxmenü[6].style.justifyContent = "space-between";
schriftgrößeanpassen()

}
}

function mainmenühöheanpassen() {

let überprüfer= headermf.children.length;

if (  (window.scrollY>0 && window.innerWidth>=481 && window.innerWidth<=720 && neuesdiv.parentNode == null && überprüfer==2) || (window.scrollY>0 && window.innerWidth>=200 && window.innerWidth<=480 && neuesdiv.parentNode == null && überprüfer==3) ) {
  
console.log("höhe")
boxmenü[0].style.height="40px ";
boxmenü[1].style.height="40px ";
boxmenü[2].style.height="40px ";
boxmenü[3].style.height="40px ";
boxmenü[4].style.height="40px ";
boxmenü[5].style.height="40px ";
boxmenü[6].style.height="40px ";

mainlinks[0].style.fontSize="0.8em ";
mainlinks[1].style.fontSize="0.8em ";
mainlinks[2].style.fontSize="0.8em ";
mainlinks[3].style.fontSize="0.8em ";
mainlinks[4].style.fontSize="0.8em ";
mainlinks[5].style.fontSize="0.8em ";
mainlinks[6].style.fontSize="0.8em ";

}   
else if ( (window.scrollY==0 && window.innerWidth>=481 && window.innerWidth<=720 && neuesdiv.parentNode == null && headermf.children.length==2) || (window.scrollY==0 && window.innerWidth>=200 && window.innerWidth<=480 && neuesdiv.parentNode == null && headermf.children.length==3)  ) {
  
boxmenü[0].style.height="60px ";
boxmenü[1].style.height="60px ";
boxmenü[2].style.height="60px ";
boxmenü[3].style.height="60px ";
boxmenü[4].style.height="60px ";
boxmenü[5].style.height="60px ";
boxmenü[6].style.height="60px ";
mainlinks[0].style.fontSize="1em ";
mainlinks[1].style.fontSize="1em ";
mainlinks[2].style.fontSize="1em ";
mainlinks[3].style.fontSize="1em ";
mainlinks[4].style.fontSize="1em ";
mainlinks[5].style.fontSize="1em ";
mainlinks[6].style.fontSize="1em ";

}
}

function schriftgrößeanpassen() {
  
if (window.innerWidth>=721 && window.innerWidth<=900&& neuesdiv.parentNode == null ) {
  
  mainlinks[0].style.fontSize="0.6em ";
  mainlinks[1].style.fontSize="0.6em ";
  mainlinks[2].style.fontSize="0.6em ";
  mainlinks[3].style.fontSize="0.6em ";
  mainlinks[4].style.fontSize="0.6em ";
  mainlinks[5].style.fontSize="0.6em ";
  mainlinks[6].style.fontSize="0.6em ";

}

else if (window.innerWidth>=900 && window.innerWidth<=1024) {
  
  mainlinks[0].style.fontSize="0.8em ";
  mainlinks[2].style.fontSize="0.8em ";
  mainlinks[3].style.fontSize="0.8em ";
  mainlinks[4].style.fontSize="0.8em ";
  mainlinks[5].style.fontSize="0.8em ";
  mainlinks[6].style.fontSize="0.8em ";

}
else if (window.innerWidth>1024) {
  
  mainlinks[0].style.fontSize="1em ";
  mainlinks[1].style.fontSize="1em ";
  mainlinks[2].style.fontSize="1em ";
  mainlinks[3].style.fontSize="1em ";
  mainlinks[4].style.fontSize="1em ";
  mainlinks[5].style.fontSize="1em ";
  mainlinks[6].style.fontSize="1em ";

}
}


//BoxMenü1
boxmenü[0].addEventListener("mouseover",function changeColor(){
if (true) {   
boxmenü[0].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
icon1.style.color = "black";
mainlinks[0].style.color = "black";  
}})
boxmenü[0].addEventListener("mouseout",resetColor1)
function resetColor1() {  
if (true) { 
boxmenü[0].style.backgroundColor = "rgb(66, 61, 61)";
icon1.style.color = "white";
mainlinks[0].style.color = "white";
}}


//BoxMenü2
boxmenü[1].addEventListener("mouseover",function changeColor(){
if (window.innerWidth>720) {     
boxmenü[1].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
box[1].style.borderLeft = "none";
icon2.style.color = "black";
mainlinks[1].style.color = "black";  
}})
boxmenü[1].addEventListener("mouseout",resetColor2)
function resetColor2() { 
if (window.innerWidth>720) {    
box[1].style.borderLeft = "2px solid white";
boxmenü[1].style.backgroundColor = "rgb(66, 61, 61)";
icon2.style.color = "white";
mainlinks[1].style.color = "white";
}}


//BoxMenü3
boxmenü[2].addEventListener("mouseover",function changeColor(){  
if (window.innerWidth>720) { 
boxmenü[2].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
box[2].style.borderLeft = "none";
icon3.style.color = "black";
mainlinks[2].style.color = "black";  
}})
boxmenü[2].addEventListener("mouseout",resetColor3) 
function resetColor3() {
if (window.innerWidth>720) {     
box[2].style.borderLeft = "2px solid white";
boxmenü[2].style.backgroundColor = "rgb(66, 61, 61)";
icon3.style.color = "white";
mainlinks[2].style.color = "white";
}}


//BoxMenü4
boxmenü[3].addEventListener("mouseover",function changeColor(){  
if (window.innerWidth>720) { 
boxmenü[3].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
box[3].style.borderLeft = "none";
icon4.style.color = "black";
mainlinks[3].style.color = "black";  
}})
boxmenü[3].addEventListener("mouseout",resetColor4)  
function resetColor4() { 
if (window.innerWidth>720) {    
box[3].style.borderLeft = "2px solid white";
boxmenü[3].style.backgroundColor = "rgb(66, 61, 61)";
icon4.style.color = "white";
mainlinks[3].style.color = "white";
}}


//BoxMenü5
boxmenü[4].addEventListener("mouseover",function changeColor(){  
if (window.innerWidth>720) { 
boxmenü[4].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
box[4].style.borderLeft = "none";
icon5.style.color = "black";
mainlinks[4].style.color = "black";  
}})
boxmenü[4].addEventListener("mouseout",resetColor5)
function resetColor5() {  
if (window.innerWidth>720) {   
box[4].style.borderLeft = "2px solid white";
boxmenü[4].style.backgroundColor = "rgb(66, 61, 61)";
icon5.style.color = "white";
mainlinks[4].style.color = "white";
}}


//BoxMenü6
boxmenü[5].addEventListener("mouseover",function changeColor(){  
if (window.innerWidth>720) { 
boxmenü[5].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
box[5].style.borderLeft = "none";
icon6.style.color = "black";
mainlinks[5].style.color = "black";  
}})
boxmenü[5].addEventListener("mouseout",resetColor6) 
function resetColor6() {
if (window.innerWidth>720) {     
box[5].style.borderLeft = "2px solid white";
boxmenü[5].style.backgroundColor = "rgb(66, 61, 61)";
icon6.style.color = "white";
mainlinks[5].style.color = "white";
}}


//BoxMenü7
boxmenü[6].addEventListener("mouseover",function changeColor(){  
if (window.innerWidth>720) { 
boxmenü[6].style.backgroundColor = "rgba(255, 102, 0, 0.925)";
box[6].style.borderLeft = "none";
icon7.style.color = "black";
mainlinks[6].style.color = "black";  
}})
boxmenü[6].addEventListener("mouseout", resetColor7)  
function resetColor7() { 
if (window.innerWidth>720) {    
box[6].style.borderLeft = "2px solid white";
boxmenü[6].style.backgroundColor = "rgb(66, 61, 61)";
icon7.style.color = "white";
mainlinks[6].style.color = "white";
}}
//Ende Hauptmenü Farbe wechseln der Boxen, Icons und der Schriften

//Setzt die Farbe der Mainmenüboxen nach anklicken zurück
boxmenü[0].addEventListener("click",resetColor1)
boxmenü[1].addEventListener("click",resetColor2)
boxmenü[2].addEventListener("click",resetColor3)
boxmenü[3].addEventListener("click",resetColor4)
boxmenü[4].addEventListener("click",resetColor5)
boxmenü[5].addEventListener("click",resetColor6)
boxmenü[6].addEventListener("click",resetColor7)


// Passt die Höhe des Headers an
function headeranpassen() {
     
  if (window.scrollY>0 && window.innerWidth>=900 && neuesdiv.parentNode == null ) {
   
   headermf.style.height="80px ";
   logolink.style.width="40%";
   suchfeld.style.height="100%";
   logo.style.width="20%";

   }
    
  else if (window.scrollY==0 && window.innerWidth>=900 && neuesdiv.parentNode == null  ) {
   
   headermf.style.height="120px ";
   logolink.style.width="60%";
   suchfeld.style.height="100%";
   logo.style.width="20%";

  }

   if (window.scrollY>0 && window.innerWidth>720 && window.innerWidth<900 && neuesdiv.parentNode == null ) {
   
    headermf.style.height="70px ";
    logolink.style.width="50%";
    suchfeld.style.height="100%";
    logo.style.width="20%";

    }
  else if (window.scrollY==0 && window.innerWidth>720 && window.innerWidth<900 && neuesdiv.parentNode == null  ) {
    
    headermf.style.height="100px ";
    logolink.style.width="70%";
    suchfeld.style.height="100%";
    logo.style.width="20%";

  }

  if (  window.scrollY>0 && window.innerWidth>=481 && window.innerWidth<=720 && neuesdiv.parentNode == null ) {
   
      headermf.style.height="auto";
      menüleiste.style.height="70px ";
      logolink.style.width="50%";
      newmenü.className="fas fa-bars fa-3x";
      suchfeld.style.height="100%";
      logo.style.width="40%";
     
  }   
  else if (window.scrollY==0 && window.innerWidth>=481 && window.innerWidth<=720 && neuesdiv.parentNode == null ) {
      
      headermf.style.height="auto";
      menüleiste.style.height="120px ";
      logolink.style.width="70%";
      newmenü.className="fas fa-bars fa-5x";
      suchfeld.style.height="100%";
      logo.style.width="40%";
      
  }

  if (  window.scrollY>0 && window.innerWidth>=200 && window.innerWidth<=480 && neuesdiv.parentNode == null ) {
   
    headermf.style.height="auto";
    menüleiste.style.height="70px ";
    logolink.style.width="100%";
    logo.style.width="25%";
    newmenü.className="fas fa-bars fa-3x";
    suchfeld.style.height="50px";
    
}   
else if (window.scrollY==0 && window.innerWidth>=200 && window.innerWidth<=480 && neuesdiv.parentNode == null ) {
    
    headermf.style.height="auto";
    menüleiste.style.height="120px ";
    logolink.style.width="100%";
    newmenü.className="fas fa-bars fa-5x";
    logo.style.width="40%";
    suchfeld.style.height="60px";
    
}
}


//Hier wird das Hauptmenü mit dem Menüicon ab einer bestimmten Bildschirmbreite ersetzt

let oldMainmenü=mainmenu;
let newmenü=document.createElement("i")
newmenü.className="fas fa-bars fa-5x";
newmenü.id="menüid"
let menübox=document.createElement("div");
menübox.className="menübox";
menübox.appendChild(newmenü)

let newmenüexistiert=false;
let suchfeldunten=false;
let menüleiste =document.createElement("div");
menüleiste.className="menüleiste";

let pfeil1=document.createElement("p");
pfeil1.className="pfeil";
pfeil1.innerHTML=">"
let pfeil2=document.createElement("p");
pfeil2.className="pfeil";
pfeil2.innerHTML=">"
let pfeil3=document.createElement("p");
pfeil3.className="pfeil";
pfeil3.innerHTML=">"
let pfeil4=document.createElement("p");
pfeil4.className="pfeil";
pfeil4.innerHTML=">"
let pfeil5=document.createElement("p");
pfeil5.className="pfeil";
pfeil5.innerHTML=">"
let pfeil6=document.createElement("p");
pfeil6.className="pfeil";
pfeil6.innerHTML=">"
let pfeil7=document.createElement("p");
pfeil7.className="pfeil";
pfeil7.innerHTML=">"

let pfeilbox1=document.createElement("span");
pfeilbox1.className="box";
pfeilbox1.appendChild(pfeil1)
let pfeilbox2=document.createElement("span");
pfeilbox2.className="box";
pfeilbox2.appendChild(pfeil2)
let pfeilbox3=document.createElement("span");
pfeilbox3.className="box";
pfeilbox3.appendChild(pfeil3)
let pfeilbox4=document.createElement("span");
pfeilbox4.className="box";
pfeilbox4.appendChild(pfeil4)
let pfeilbox5=document.createElement("span");
pfeilbox5.className="box";
pfeilbox5.appendChild(pfeil5)
let pfeilbox6=document.createElement("span");
pfeilbox6.className="box";
pfeilbox6.appendChild(pfeil6)
let pfeilbox7=document.createElement("span");
pfeilbox7.className="box";
pfeilbox7.appendChild(pfeil7)

function reportWindowSize(){
  
if (window.innerWidth>=200 && window.innerWidth<=720 && newmenüexistiert==false) {
 
hauptmenübalken.replaceChild(menübox,mainmenu )
headermf.removeChild(hauptmenü);
headermf.removeChild(headerbalken);
headermf.appendChild(menüleiste)
menüleiste.appendChild(headerbalken)
menüleiste.appendChild(hauptmenü)
newmenüexistiert=true;
    
}
else if ( window.innerWidth>720 && newmenüexistiert==true ) {

headermf.removeChild(menüleiste);
headermf.appendChild(headerbalken)
headermf.appendChild(hauptmenü)
hauptmenübalken.replaceChild(oldMainmenü,menübox)
newmenüexistiert=false;
schriftgrößeanpassen()
}

if (window.innerWidth>=200 && window.innerWidth<=480 && neuesdiv.parentNode == null && hauptmenübalken.children.length==3 && suchfeldunten==false) {
  
hauptmenübalken.removeChild(suchfeld)
headermf.appendChild(suchfeld)
suchfeldunten=true;
  
}
else if (window.innerWidth>=481 && suchfeldunten==true ) {
  
headermf.removeChild(suchfeld) 
hauptmenübalken.appendChild(suchfeld)
suchfeldunten=false;

}
}

//--------------------------------------------------------------------------------------------

//Das Menüfeld erscheit beim klicken des Menüicons und beim erneuten klicken verschwindet es wieder
newmenü.addEventListener('click', menüanzeigen);
let gescrollt=null;
function menüanzeigen() {
  
if (headermf.children.length==1 && window.innerWidth>=481 && window.innerWidth<=720 ) {
  
 headermf.appendChild(oldMainmenü)
 boxmenü[0].appendChild(pfeilbox1)
 boxmenü[1].appendChild(pfeilbox2)
 boxmenü[2].appendChild(pfeilbox3)
 boxmenü[3].appendChild(pfeilbox4)
 boxmenü[4].appendChild(pfeilbox5)
 boxmenü[5].appendChild(pfeilbox6)
 boxmenü[6].appendChild(pfeilbox7)

 mainmenühöheanpassen();
 mainmenüanpassen();

gescrollt=window.scrollY;
 
}
else if (headermf.children.length==2 && window.innerWidth>=481 && window.innerWidth<=720 ) {
  
console.log("gemolken")
gescrollt=null;
headermf.removeChild(oldMainmenü)
  
}

if (headermf.children.length==2 && window.innerWidth>=200 && window.innerWidth<=480) {
  
  headermf.appendChild(oldMainmenü)
  boxmenü[0].appendChild(pfeilbox1)
  boxmenü[1].appendChild(pfeilbox2)
  boxmenü[2].appendChild(pfeilbox3)
  boxmenü[3].appendChild(pfeilbox4)
  boxmenü[4].appendChild(pfeilbox5)
  boxmenü[5].appendChild(pfeilbox6)
  boxmenü[6].appendChild(pfeilbox7)
 
  mainmenühöheanpassen();
  mainmenüanpassen();
 
 gescrollt=window.scrollY;  

}
else if (headermf.children.length==3 && window.innerWidth>=200 && window.innerWidth<=480) {
  
console.log("bowling")
gescrollt=null;
headermf.removeChild(oldMainmenü)

}
 window.addEventListener("scroll",mainmenülöschen )
}

function mainmenülöschen() {
  
if (gescrollt!=window.scrollY && gescrollt!=null && neuesdiv.parentNode == null && window.innerWidth<=720) {
    
headermf.removeChild(oldMainmenü)
gescrollt=null;
  
}
}

//Erzeugt eine Zufallszahl in einem bestimmten Intervall
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Spielt eine zufällig ausgewählte Bowleraudio nach klicken des Bowler Textes ab
bowlertext.addEventListener("click",bowleraudioabspielen)

function bowleraudioabspielen() {

  switch (getRandomIntInclusive(1,7) ) {
  case 1: 
  bowleraudio[0].play();
  break;
  case 2:  
  bowleraudio[1].play();
  break;
  case 3:
  bowleraudio[2].play();
  break;
  case 4:
  bowleraudio[3].play();
  break;
  case 5:
  bowleraudio[4].play();
  break;
  case 6: 
  bowleraudio[5].play();
  break;
  case 7: 
  bowleraudio[6].play();
  break;
  default:
  console.log("Es konnte keine Bowleraudio abgespielt werden!")
  break;
}
}


//melk melk
window.addEventListener('load', reportWindowSize);
window.addEventListener('resize', reportWindowSize);
window.addEventListener('resize',mainmenüanpassen);
window.addEventListener('load',mainmenüanpassen);
window.addEventListener('scroll',mainmenühöheanpassen);
window.addEventListener("scroll",headeranpassen )
window.addEventListener("resize",headeranpassen )
window.addEventListener("load",headeranpassen )


//Hier die Elemente hinzufügen bei denen das "Nicht-Verfügbar"-Feld über ein Event auslösen soll


//Header und Footer
boxmenü[2].addEventListener("click", seitenichtverfügbarAuslöser )
boxmenü[3].addEventListener("click", seitenichtverfügbarAuslöser )
boxmenü[4].addEventListener("click", seitenichtverfügbarAuslöser )
boxmenü[5].addEventListener("click", seitenichtverfügbarAuslöser )
boxmenü[6].addEventListener("click", seitenichtverfügbarAuslöser )

footerlinks[2].addEventListener("click", seitenichtverfügbarAuslöser )
footerlinks[3].addEventListener("click", seitenichtverfügbarAuslöser )
footerlinks[4].addEventListener("click", seitenichtverfügbarAuslöser )
footerlinks[5].addEventListener("click", seitenichtverfügbarAuslöser )
footerlinks[6].addEventListener("click", seitenichtverfügbarAuslöser )

//Maincontent
let pekkabutton=document.querySelector(".pekkabutton")
pekkabutton.addEventListener("click", seitenichtverfügbarAuslöser )

//-----------------------------------------------------------------------------------------------
  









  
  


