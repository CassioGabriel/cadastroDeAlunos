var maisVelho = 0;
var maisNovo = 100;
var arr = -1;

//criar um array
class Aluno{
    constructor(){
        this.aluno = [];
    }

    //dados da tela
    tela(){
        let nome = document.getElementById("c1").value;
        let idade = document.getElementById("c2").value;
        return new Pessoa(nome, idade);
    }
    //cadastro de alunos
    cadastro(aluno){
        this.aluno.push(aluno);
    }

    //popular o array
    //button
    telaParaArray(){
        this.cadastro(this.tela());
        document.getElementById("c1").value = "";
        document.getElementById("c2").value = "";
        arr = this.aluno.length;
    }
    //gerenciar os dados array
    //verificar o aluno mais velho
    gerenArrayVelho(){
        let saida = 0;
        for(let i=0; i<this.aluno.length; i++){
            if(parseFloat(this.aluno[i].idade) >= maisVelho){
                maisVelho = parseFloat(this.aluno[i].idade);
                saida = this.aluno[i]
            }
        }
        return saida;
    }
    //verificar o aluno mais novo
    gerenArrayNovo(){
        let saida = 0;
        for(let i=0; i<this.aluno.length; i++){
            if(parseFloat(this.aluno[i].idade) <= maisNovo){
                maisNovo = parseFloat(this.aluno[i].idade);
                saida = this.aluno[i];
            }
        }
        return saida;
    }
    //criar uma saida
    //lista de cadastrados
    //button
    //injetar a saida
    listaDeCadastrados(){
        let listaHTML = "";
        if(this.aluno.length == arr){ 
            for(let i=0; i<this.aluno.length; i++){
                listaHTML += `<div>${this.aluno[i].nome}  ${this.aluno[i].idade}</div>`;
                document.getElementById("c4").innerHTML = listaHTML;
            }
        }
        arr = this.aluno.length + 1;
    }
    //button
    alunoMaisVelho(){
        let velho = this.gerenArrayVelho();
        document.getElementById("c3").innerHTML = `${velho.nome}  ${velho.idade}`;
    }
    //button
    alunoMaisNovo(){
        let novo = this.gerenArrayNovo();
        document.getElementById("c3").innerHTML = `${novo.nome}  ${novo.idade}`;
    }
}
var inp = new Aluno();