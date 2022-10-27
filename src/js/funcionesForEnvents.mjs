
const asideContactUs = document.querySelector('.contact-us');
const containerEmail= document.querySelector('.email');

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

const ViewProyects= ()=>{
    containerAboutMe.classList.add('inactive');
    containerTecnologias.classList.add('inactive');
    continerMain.classList.add('inactive');
    containerProyects.classList.remove('inactive');
}
const onHome=()=>{
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
export{checkViewEmail,viewAsideContactUs, ViewProyects, onHome, onToggleMenuMobile ,actiosItemsMenuMobile,onViewProyects}



// const altura= 8;
// const base= 6
// const calcularArea= (base,altura)=>{
//     return (base*altura)/2;
// }
// const area=calcularArea(base,altura)
// console.log(area);

//  const x= 100/2/3/5;
// const xx= (100/2)/(3/5);
// const xxx= (100/2/3)/5;
// const xxxx= 100/(2/3/5);
// console.log(x,xx,xxx,xxxx);

const x= 2;
const y= 3;


const z = ((x-1)/(y-1) + 5)/((x+3)/(y+1)) + 8;
console.log(z)