import { inspect } from "../decorators/inspect.js"
import { logarTimeExecute } from "../decorators/logar-temp-execute.js"

export	abstract class Views<T>{

    protected element: HTMLElement 
    private escapar = false

    constructor(seletor:string, escapar? : boolean){
        const element = document.querySelector(seletor)
        if(element){

            this.element = element as HTMLElement
        }else {
            throw Error(`Selector ${seletor} não existe no DOM`)
        }
        
        if(escapar){
            this.escapar = escapar
        }
    }

    protected abstract template(model: T) : string;

    @inspect()
    @logarTimeExecute(true)
    update(model: T): void  {
        let template = this.template(model)
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'')
        }
        this.element.innerHTML = template

    }
}  