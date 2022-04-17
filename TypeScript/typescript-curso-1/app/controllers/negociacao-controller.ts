import { domInjector } from "../decorators/dom-inejctor.js";
import { inspect } from "../decorators/inspect.js";
import { logarTimeExecute } from "../decorators/logar-temp-execute.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    
    @domInjector('#data')
    private inputData: HTMLInputElement
    @domInjector('#quantidade')
    private inputQuantidade : HTMLInputElement
    @domInjector('#valor')
    private inputValor : HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private mensagens: MensagemView = new MensagemView('#mensagemView')
    private negociacoesView : NegociacoesView = new NegociacoesView('#negociacoesView')//Por enquanto o valor passado no parametro tem que ser digtado corretamente, caso contrário haverá erro no console
    constructor(){        
        //Recebendo os valores nos atributos criados por meio dos ID's dos inputs, assim os buscando com querySelector
        this.inputData = document.querySelector('#data') as HTMLInputElement
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    @inspect()
    @logarTimeExecute()//Utilizando um decorator
    public adiciona() : void { //Sempre importante declarar o tipo do retorno
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
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