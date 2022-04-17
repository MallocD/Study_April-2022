import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];// Passando uma Array do tipo Negociacoes

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[] {//É idêntico ao Array, a diferença é que aceita somente leitura/Não aceita ser modificado
        return  this.negociacoes
        // return [...this.negociacoes]//Spread Operator -> Sintaxe de Espalhamento/ Sintaxe do Js

    }
}

const negociacoes = new Negociacoes()

negociacoes.lista().forEach(n=>{
    n.volume

})