
const asideContactUs = document.querySelector('.contact-us');
const containerEmail= document.querySelector('.email');
const containeCardsProjects= document.querySelector('.proyects-cards');
const continerMain = document.querySelector('.container-main');
const containerTecnologias= document.querySelector('.container--technologies');
const containerAboutMe= document.querySelector('.container-aboutMe');
const containerProyects = document.querySelector('.container-proyects');

const containerAsideMenuMobile= document.querySelector('.menu_mobile');
// functions
const checkViewEmail= ()=>{
    containerEmail.classList.toggle('email-inactive');
    const arrowRihth = document.querySelector('.bx-chevron-right');
    // console.log(e)
    arrowRihth.classList.toggle('rotate-45deg');
}
const viewAsideContactUs=()=>{
    asideContactUs.classList.toggle('inactive-contac-Us');
}
const toggleCardsProjects=(option)=>{
    const cardOfProject=document.querySelectorAll('.cards-container');
    const listCardsProjects= [...cardOfProject];
    option
    ?listCardsProjects.forEach(p=>p.classList.remove('inactive-cardsProjects'))
    :setTimeout(()=>listCardsProjects.forEach(p=>p.classList.add('inactive-cardsProjects')),300);
    
}
const ViewProyects= ()=>{
    toggleCardsProjects(false);
    containerAboutMe.classList.add('inactive');
    containerTecnologias.classList.add('inactive');
    continerMain.classList.add('inactive');
    containerProyects.classList.remove('inactive');
    
}
const onHome=()=>{
    toggleCardsProjects(true);
    containerAboutMe.classList.remove('inactive');
    containerTecnologias.classList.remove('inactive');
    continerMain.classList.remove('inactive');
    containerProyects.classList.add('inactive');
}
const onToggleMenuMobile= ()=>{
    containerAsideMenuMobile.classList.toggle('toggle-menu');
}
const onViewProyects =()=>{
    location.hash='proyectos';
    document.documentElement.scrollTo(0,0);
}
const actiosItemsMenuMobile= (e)=>{
    if(e.target === document.querySelector('.item-home')){
        onToggleMenuMobile();
    }if (e.target=== document.querySelector('.item-proyect')) {
        onToggleMenuMobile();
        onViewProyects();
    } else {
        return;
    }
}
export{checkViewEmail,viewAsideContactUs, ViewProyects, onHome, onToggleMenuMobile ,actiosItemsMenuMobile,onViewProyects,containeCardsProjects}
