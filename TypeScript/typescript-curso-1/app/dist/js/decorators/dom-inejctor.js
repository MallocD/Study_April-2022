export function domInjector(seletor) {
    return function (target, propertyKey) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(seletor);
                console.log(`Buscando elemento DOM com o seletor 
                ${seletor} para injetar em ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
