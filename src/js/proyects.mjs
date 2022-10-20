class Proyects{
    constructor({
        title,
        img,
        description,
        technologies,
        demo,
        repository
    }){
        this.title= title;
        this.img= img;
        this.description= description;
        this.technologies= technologies,
        this.demo= demo;
        this.repository= repository;
    }
}
const calculadora= new Proyects ({
    title:'Calculadora',
    img:'https://owmdowmdow',
    description: 'Calculadora programada para hacer calculo matematicos basicos',
});
