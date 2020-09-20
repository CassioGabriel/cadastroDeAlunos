class Pessoa{
    constructor(){
        let nome = document.getElementById("c1").value;
        let idade = document.getElementById("c2").value;
        this.nome = nome;
        this.idade = idade;
    }
}
var arrAlunos = [];
var arrlength = 0;
var listaMaior = "";
var listaMenor = "";
class Arr{
    arrCadastro(){
        arrAlunos.push(new Pessoa())
        document.getElementById("c1").value = "";
        document.getElementById("c2").value = "";
    }
}
class ListMaior{
    list1(){
        for(let i =0; i<arrAlunos.length; i++){
            if(arrAlunos[i].idade >  18){
                listaMaior = listaMaior + `<div>${arrAlunos[i].nome} ${arrAlunos[i].idade}</div>`
            }
        }
        document.getElementById("c3").innerHTML = listaMaior;
        arrlength = arrAlunos.length + 1;
    }
}
class ListMenor{
    list2(){
        for(let i =0; i<arrAlunos.length; i++){
            if(arrAlunos[i].idade <  18){
                listaMenor = listaMenor + `<div>${arrAlunos[i].nome} ${arrAlunos[i].idade}</div>`
            }
        }
        document.getElementById("c3").innerHTML = listaMenor;
    }
}
var cadastro = new Arr();
var maior = new ListMaior();
var menor = new ListMenor();