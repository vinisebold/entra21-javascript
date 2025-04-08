function encontreAssasino() {
    var contador = 0;

    var opcao = prompt("Telefonou para a vítima?\n1 - Sim \n 2- Não")
    if (opcao == 1) {
        contador++
    }

    var opcao = prompt("Esteve no local do crime?\n1 - Sim \n 2- Não")
    if (opcao == 1) {
        contador++
    }

    var opcao = prompt("Mora perto da vítima?\n1 - Sim \n 2- Não")
    if (opcao == 1) {
        contador++
    }

    var opcao = prompt("Devia para a vítima?\n1 - Sim \n 2- Não")
    if (opcao == 1) {
        contador++
    }

    var opcao = prompt("Já trabalhou com a vítima?\n1 - Sim \n 2- Não")
    if (opcao = 1) {
        contador++
    }

    if (contador < 2) {
        alert("Você é inocente!");
    }
    else if (contador == 2) {
        alert("Você é suspeito!");
    }
    else if (contador >= 3 && contador <= 4) {
        alert("Você é cúmplice!");
    }
    else {
        alert("Você é o ASSASSINO!");
    }
}

function estoque() {

    //Entrada de dados
    var estoqueAtual = Number(document.getElementById('estoqueAtual').value);
    var quantidadeMinima = Number(document.getElementById('quantidadeMinima').value);
    var quantidadeMaxima = Number(document.getElementById('quantidadeMaxima').value);

    //Calculos
    var estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;

    if (estoqueAtual < quantidadeMinima) {
        alert("O estoque está abaixo do minimo!")
    }

    else if (estoqueAtual > quantidadeMaxima) {
        alert("O estoque está acima do máximo")
    }
    else {
        alert("O estoque dentro do padrão")
    }

    alert("Quantidade Media:" + estoqueMedio)
}

function qualTurno() {
    var seuTurno = document.getElementById('turno').value;
    var seuTurno2 = seuTurno.toUpperCase();

    if (seuTurno2 == 'M') {
        alert("Bom Dia!")
        document.getElementById("resultado").innerHTML = "<p class=\"bomDia\">Bom Dia! 🌄</p>"
    }
    else if (seuTurno2 == 'V') {
        alert("Boa Tarde!")
        document.getElementById("resultado").innerHTML = "<p class=\"boaTarde\">Boa Tarde! 🌇</p>"
    }
    else if (seuTurno2 == 'N') {
        alert("Boa Noite!")
        document.getElementById("resultado").innerHTML = "<p class=\"boaNoite\">Boa Noite! 🌃</p>"
    }
    else {
        document.getElementById("resultado").innerHTML = "<p class=\"teste\">Valor Inválio, tente novamente!</p>"
    }
}