
let okbutton=document.querySelector(".okbutton")
okbutton.addEventListener("click", zurseitezurück )
let videoschwein=document.querySelector(".videoschwein")
videoschwein.addEventListener("click",seitenichtverfügbarvideostarten  )
let neuesdiv=document.querySelector(".nichtverfügbar") 


function seitenichtverfügbarvideostarten () {
  
videoschwein.play();
  
}
   

  function nichtverfügbarEntfernen() {
   
    if (neuesdiv.parentNode != null) {
      
      oldnichtVerfügbarFeld= neuesdiv.parentNode.removeChild(neuesdiv);
    
    }
   }

  function nichtverfügbarWiederherstellen() {
   
      let output=document.querySelector(".body");
      output.appendChild(oldnichtVerfügbarFeld)
      
  }

  function contentdeleter() {
      
  let headerlöschen =document.querySelector(".headermf");
  oldHeader=headerlöschen.parentNode.removeChild(headerlöschen);
  let maincontentlöschen =document.querySelector(".maincontent");
  oldMaincontent=maincontentlöschen.parentNode.removeChild(maincontentlöschen);
  let footerlöschen =document.querySelector(".footer");
  oldFooter=footerlöschen.parentNode.removeChild(footerlöschen);

  }
  
  
  function contentWiederherstellen() {
   
    let headeroutput=document.querySelector("body");
    headeroutput.appendChild(oldHeader)
    let maincontentoutput=document.querySelector("body");
    maincontentoutput.appendChild(oldMaincontent)
    let footeroutput=document.querySelector("body");
    footeroutput.appendChild(oldFooter)

  }

  function seitenichtverfügbarAuslöser() {
    
    contentdeleter()
    nichtverfügbarWiederherstellen()
    seitenichtverfügbarvideostarten ()
    nichtverfügbaranpassen()

  }

  function zurseitezurück() {
    
    
    nichtverfügbarEntfernen() 
    nichtverfügbaranpassen()
    contentWiederherstellen()
    headeranpassen()
    mainmenüanpassen()
    mainmenühöheanpassen()
    
  }

function nichtverfügbaranpassen() {
  
if (neuesdiv.parentNode != null && window.innerWidth>720) {
  
 body.style.height=window.innerHeight+"px";
 body.style.display = "flex";
 body.style.margin = "0%";
 
neuesdiv.style.removeProperty('height');
neuesdiv.style.removeProperty('width');

}

if (neuesdiv.parentNode != null && window.innerWidth<=720) {
 
  body.style.height=window.innerHeight+"px";
  body.style.display = "flex";
  body.style.margin = "0%";
  
 neuesdiv.style.height="auto"; 
 neuesdiv.style.width="auto";  

}

if (neuesdiv.parentNode == null) {

  body.style.removeProperty('height');
  body.style.removeProperty('display');
  body.style.removeProperty('margin');
  body.style.removeProperty('overflow');

}
}
  
window.addEventListener('load', nichtverfügbaranpassen);
window.addEventListener('resize', nichtverfügbaranpassen); 



