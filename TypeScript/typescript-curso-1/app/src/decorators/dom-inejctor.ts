export function domInjector(seletor : string){
    return function(target : any, propertyKey: string){
        
        let element : HTMLElement

        const getter = function() {
            if(!element){
                element = <HTMLElement>document.querySelector(seletor)
                console.log(`Buscando elemento DOM com o seletor 
                ${seletor} para injetar em ${propertyKey}`)
            }
            return element;
        }

        Object.defineProperty(
            target, 
            propertyKey,
            {get: getter}
        )
    }
}