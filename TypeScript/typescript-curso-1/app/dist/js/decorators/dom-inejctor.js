export function domInjector(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const element = document.querySelector(seletor);
            return element;
        };
    };
}
