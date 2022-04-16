import { Views } from "./views.js"


//Forma Declarativa
export class MensagemView extends Views<string>{

    protected template(model: string) : string {
        return `
        <p class="alert alert-info">${model}</p>
        `
    }

}