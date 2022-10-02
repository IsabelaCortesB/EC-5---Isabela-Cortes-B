var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./services/characters.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = yield getCharacters();
            this.render(characters);
        });
    }
    render(characters) {
        if (!this.shadowRoot)
            return;
        const personajes = characters.map(({ gender, id, image, name, species, status, }) => `<article>
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


            
        
        </article>`);
        this.shadowRoot.innerHTML = `

        

            <section>
            ${personajes.join("")}
            
            </section>`;
    }
}
customElements.define("app-container", AppContainer);
