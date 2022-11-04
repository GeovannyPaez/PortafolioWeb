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
};
const marketPlace= new Proyects ({
    title:'Market Place, with fake API by Platzi',
    img:'https://camo.githubusercontent.com/33d12b763361e8eb134db6b8660fbba18e5980d6ee97ccb8dd7963da3c8254d9/68747470733a2f2f692e6962622e636f2f70524b3646525a2f496d6167656e312e706e67',
    description: 'It is a responsive landing page, which is using reference data from a fake API that Platzi has developed to test, which is consumed by this API and the data that this API offers us is represented graphically and designed.',
    technologies:['HTML','CSS','JavaScript',],
    demo: 'https://geovannypaez.github.io/Landing_Page-De-Market-Place/src/index.html',
    repository: 'https://github.com/GeovannyPaez/Landing_Page-De-Market-Place'
});
 const todoMachine= new Proyects({
    title:'App To-do',
    description: 'In collaboration with platzi courses, this app was made to save our daily to-do lists. Each task has the options to complete, edit, and delete.',
    technologies: ['React Js','React Router','CSS'],
    demo:'https://practice-react-app-todo.netlify.app/#/',
    repository:'https://github.com/GeovannyPaez/intro_react-app-todo',
    img:'https://i.ibb.co/b72cVwp/Todos-demo.png'
 })
const proyects = [marketPlace,todoMachine]
export {proyects};