export class Views {
    constructor(seletor) {
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${seletor} não existe no DOM`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
