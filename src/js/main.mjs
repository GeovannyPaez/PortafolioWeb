
import { viewAsideContactUs,checkViewEmail, onToggleMenuMobile, actiosItemsMenuMobile, onViewProyects } from "./funcionesForEnvents.mjs";
import { locations } from "./navigation.mjs";
import { proyects } from "./proyects.mjs";
import { renderProyects } from "./templateProyect.js";
import { containeCardsProjects } from "./funcionesForEnvents.mjs";
// buttons
const btnViewEmail= document.querySelector('.checkViewEmail');
const buttonDeplearContactUs=document.querySelector('.contact-us-desplegable');
const buttonsViewProyects= [...document.querySelectorAll('.buttonsViewProyects')]; 
const buttonMenuMobile = document.querySelector('.bx-menu');
const menueContainer= document.querySelector('.menu-container');
const headerLogo= document.querySelector('.header__logo');

// confi particles

// eventos

document.addEventListener('DOMContentLoaded',()=>{
    const elementosCarousel= document.querySelectorAll('.carousel');
    const containerCarosel = document.querySelector('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 150,
        numVisible:4,
        indicators:true,
        cancelable:false
    });
    var instance= M.Carousel.getInstance(containerCarosel);
    setInterval(()=>instance.next(),2000);
});




buttonDeplearContactUs.addEventListener('click',viewAsideContactUs);
btnViewEmail.addEventListener('click',checkViewEmail);
buttonMenuMobile.addEventListener('click',onToggleMenuMobile);
menueContainer.addEventListener('click', actiosItemsMenuMobile);
headerLogo.addEventListener('click',()=>{
    location.hash= '#';
})
buttonsViewProyects.map(btn=> btn.addEventListener('click', ()=>{
    onViewProyects();
    // console.log(location.hash);
    
}));
renderProyects(proyects,containeCardsProjects);
window.addEventListener('hashchange',locations);



