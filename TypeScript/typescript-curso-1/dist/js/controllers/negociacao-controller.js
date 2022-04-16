import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.mensagens = new MensagemView('#mensagemView');
        this.negociacoesView = new NegociacoesView('#negociacoesView'); //Por enquando o valor passado no parametro tem que ser digtado corretamente, caso contrário haverá erro no console
        //Recebendo os valores nos atributos criados por meio dos ID's dos inputs, assim os buscando com querySelector
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagens
                .update('Apenas negociações em dias úties são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparForm(); //Chama o método
        this.atualizaView();
    }
    //Método para validar se é dia útil ou não 
    ehDiaUtil(date) {
        return date.getDay() > DiaDaSemana.DOMINGO && date.getDay() < DiaDaSemana.SABADO;
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
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagens.update('Negociação adicionada com sucesso');
    }
}
