

export	abstract class Views<T>{

    protected element: HTMLElement 

    constructor(seletor:string){
        const element = document.querySelector(seletor)
        if(element){

            this.element = element as HTMLElement
        }else {
            throw Error(`Selector ${seletor} não existe no DOM`)
        }
        
    }

    protected abstract template(model: T) : string;

  
    update(model: T): void  {
        let template = this.template(model)
        
        this.element.innerHTML = template

    }
}  