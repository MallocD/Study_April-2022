import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    private inputData: HTMLInputElement
    private inputQuantidade : HTMLInputElement
    private inputValor : HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private mensagens: MensagemView = new MensagemView('#mensagemView')
    private negociacoesView : NegociacoesView = new NegociacoesView('#negociacoesView')//Por enquando o valor passado no parametro tem que ser digtado corretamente, caso contrário haverá erro no console
    constructor(){        
        //Recebendo os valores nos atributos criados por meio dos ID's dos inputs, assim os buscando com querySelector
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes)
    }

    public adiciona() : void { //Sempre importante declarar o tipo do retorno
        
        const negociacao = this.criaNegociacao()
        if(!this.ehDiaUtil(negociacao.data)) {

            this.mensagens
            .update('Apenas negociações em dias úties são aceitas')
            return;
        }

        this.negociacoes.adiciona(negociacao)
        this.limparForm()//Chama o método
        this.atualizaView()
        
    }

    //Método para validar se é dia útil ou não 
    private ehDiaUtil(date : Date) {
        return date.getDay() > DiaDaSemana.DOMINGO && date.getDay() < DiaDaSemana.SABADO
    }

    private criaNegociacao() : Negociacao{
        const exp = /-/g; //Criando uma expressão regular que verifica tudo que contem "-"  acompanhado do parametro g de global
        const date = new Date(this.inputData.value.replace(exp,',')) // Utiliza a expressão regular e replace(troca) o "-" por ","
        const quantidade = parseInt(this.inputQuantidade.value)//Converte o valor de string para Integer
        const valor = parseFloat(this.inputValor.value)//Converte o valor de string para Float
        return new Negociacao(date,quantidade,valor)
    }

    //Será utilizado para limpor o formulário após salvar informações inseridas após o click do Incluir
    private limparForm() : void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    } 

    private atualizaView() :void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagens.update('Negociação adicionada com sucesso')
    }
    
}