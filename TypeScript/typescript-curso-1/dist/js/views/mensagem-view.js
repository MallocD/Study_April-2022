import { Views } from "./views.js";
//Forma Declarativa
export class MensagemView extends Views {
    template(model) {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }
}
