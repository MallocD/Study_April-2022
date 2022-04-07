import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        //Recebendo os valores nos atributos criados por meio dos ID's dos inputs, assim os buscando com querySelector
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparForm(); //Chama o método
    }
    criaNegociacao() {
        const exp = /-/g; //Criando uma expressão regular que verifica tudo que contem "-"  acompanhado do parametro g de global
        const date = new Date(this.inputData.value.replace(exp, ',')); // Utiliza a expressão regular e replace(troca) o "-" por ","
        const quantidade = parseInt(this.inputQuantidade.value); //Converte o valor de string para Integer
        const valor = parseFloat(this.inputValor.value); //Converte o valor de string para Float
        return new Negociacao(date, quantidade, valor);
    }
    //Será utilizado para limpor o formulário após salvar informações inseridas após o click do Incluir
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
