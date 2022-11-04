

const renderProyects= (proyects,container)=>{
    const templatesOfProjects= [];
    proyects.forEach(proyect => {
        const Listtechnologies= proyect.technologies;
        const list= [];
        Listtechnologies.forEach(i=>{
            const item= `<div><p>${i}</p></div>`
            list.push(item);
        });
        const technologies= list.join(' ');
        const template = 
                        `<div class="cards-container">
                            <div class="card-catainer--item">
                                <div class="card-img">
                                    <img src="${proyect.img}" alt="imagen proyecto">
                                </div>
                                <div class="card-info">
                                    <h3 class="card-info--title">${proyect.title}</h3>
                                    <p class="card-info-description">${proyect.description}</p>
                                    <div class="card-info-tecnologias">
                                        ${technologies}
                                    </div>
                                    <div class="card-info--buttons"> 
                                        <a href="${proyect.demo}" class="button-viewDemo">View Demo</a>
                                        <a href="${proyect.repository}" class="button-viewRepo">View Repository</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
        templatesOfProjects.push(template);
    });
    const joinTemplates= templatesOfProjects.join(' ')
    container.innerHTML=joinTemplates;
}
export {renderProyects}