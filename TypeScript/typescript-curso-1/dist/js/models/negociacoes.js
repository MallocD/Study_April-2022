export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Passando uma Array do tipo Negociacoes
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
        // return [...this.negociacoes]//Spread Operator -> Sintaxe de Espalhamento/ Sintaxe do Js
    }
}
const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    n.volume;
});
