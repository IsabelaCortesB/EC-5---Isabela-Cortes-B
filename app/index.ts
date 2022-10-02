import  { getCharacters } from "./services/characters.js"
import { Character } from "./types/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }


    async connectedCallback(){
        const characters = await getCharacters();
        this.render(characters);
    }

    render(characters: Array<Character>){
        if(!this.shadowRoot) return;

        const personajes = characters.map(({gender,id,image,name,species,status,}) => `<article>
        <link rel="stylesheet" type="text/css" href="/public/services/style.css">

        <div class="mainContainer">

            <h1 id="InfoTittle">Character Information </h1>
            <h1 id="Gender">Gender: ${gender}</h1>
            <h1 id="Specie">Specie: ${species}</h1>
            <h3 id="Id"> Id: ${id}</h3>
            <h1 id="Name">${name}</h1>
            <h1 id="Status">Status: ${status}</h1>
            

        <div class="container2">
            
            
            <img id="Image"src="${image}">
        </div>

        </div>


            
        
        </article>`)
        this.shadowRoot.innerHTML = `

        

            <section>
            ${personajes.join("")}
            
            </section>`;        
            
            
        }
    }
 

customElements.define("app-container",AppContainer);

