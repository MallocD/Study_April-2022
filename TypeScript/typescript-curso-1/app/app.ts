//----------Primeira parte do projeto---------------

// import { Negociacao } from './models/negociacao.js';

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao)

//-----------------Segunda parte do Projeto--------------------

import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController()

const form =  document.querySelector('.form') //Pegando o formulário por meio de uma classe

//Como o form recebe um ELement, é possível adicionar um addEve... 
//assim iremos submetar a página quando ouver um event no button ao evento do controller
if(form)
form.addEventListener('submit', event=>{
    event.preventDefault()
    controller.adiciona();
})
    else
        throw Error("Não foi possível inicializar a aplicação verifique se o formulário foi escrito corretamente")

// const negociacoesView = new NegociacoesView()
// const template = negociacoesView.template()

// console.log(template)