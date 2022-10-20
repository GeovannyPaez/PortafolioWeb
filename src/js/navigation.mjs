import { onHome, ViewProyects } from "./funcionesForEnvents.mjs"

const locations =()=>{
    if( location.hash.startsWith('#proyectos')){
        ViewProyects();
        console.log('estmos en proyectos')
    }else{
        onHome();
    }
}

export{locations}