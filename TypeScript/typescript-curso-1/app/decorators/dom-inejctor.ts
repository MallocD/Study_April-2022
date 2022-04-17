export function domInjector(seletor : string){
    return function(target : any, propertyKey: string){
        
        const getter = function() {
            const element = document.querySelector(seletor);
            return element;
        }

    }
}