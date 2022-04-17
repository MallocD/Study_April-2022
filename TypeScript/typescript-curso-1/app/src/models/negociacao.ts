export class Negociacao {
    

    constructor(private _data : Date,
                private _quantidade : number,
                private _valor: number) {
    }

    get data() : Date {
        const data = new Date(this._data.getTime()) //Fazendo uma cópia da data para que não possa ser alterado o valor original
        return this._data;
    }

    get quantidade() : number {
        return this._quantidade;
    }

    get valor() : number {
        return this._valor;
    }

    get volume() : number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString : string, valorString : string) : Negociacao{
        const exp = /-/g; //Criando uma expressão regular que verifica tudo que contem "-"  acompanhado do parametro g de global
        const date = new Date(dataString.replace(exp,',')) // Utiliza a expressão regular e replace(troca) o "-" por ","
        const quantidade = parseInt(quantidadeString)//Converte o valor de string para Integer
        const valor = parseFloat(valorString)//Converte o valor de string para Float
        return new Negociacao(date,quantidade,valor)
    }

   
}