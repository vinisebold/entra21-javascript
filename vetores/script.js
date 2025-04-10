function aprendendo() {
    // Criando vetor com 5 elementos
    let numeros = [10, 20, 30, 40, 50];

    // Imprimindo os valores do vetor
    for (let i = 0; i < numeros.length; i++) {
        console.log(`Elemento na posição [${i}] é: ${numeros[i]}`);
    }
}


//Notas aluno
//Solicita as 4 notas do aluno
function notas() {
    let notas = [];
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
        notas.push(nota);
    }

    let soma = 0;
    for (let i = 0; i < 4; i++) {
        console.log(`A nota ${i + 1} foi: ${notas[i]}`);
        soma = soma + notas[i]
    }

    consol.log(`A média foi: ${soma / 4}`)
}


//EXERCICIOS
function exercicioUm() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (let i = 0; i < numeros.length; i++) {
        console.log(`${numeros[i]}`)
    }
    //document.getElementById(`${i}`).innerHTML = `Test ${numeros[i]}`


}

function exercicioDois() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

    for (let i = 0; i < 20; i++) {
        if (numeros[i] % 2 == 0) {
            console.log(`${numeros[i]}`)
        }

    }
}

function exercicioTres() {

    let numero = 0;
    let maior = 0;

    while (numero != -1) {
        numero = parseInt(prompt("Informe um número\n Se desejar sair digite -1: "))
        if (maior < numero) {
            maior = numero
        }
    }
    document.writeln("O maior número foi " + maior)

}

function exercicioQuatro() {
    let numero = parseFloat(prompt(`Digite o número desejado: `));
    let resultado = "";

    for (let i = 0; i < 11; i++) {
        let multi = i * numero;
        resultado += `${i} x ${numero} = ${multi}\n`;
    }

    alert(resultado);
}

function exercicioCinco() {

    let soma = 0

    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soma += i;
        }
    }
    document.getElementById("div").innerHTML = "<p class=\"bomDia\">" + soma + "</p>";

}

function exercicioSeis() {

    let sequenciaNumero = [];
    let numero = 0;

    do {
        numero = parseInt(prompt("Digite o número desejado: "));

        if (numero % 2 == 0) {
            sequenciaNumero.push(numero);
        }
    } while (numero != -1);

    for (let i = 0; i < sequenciaNumero.length; i++) {
        console.log(sequenciaNumero[i])
    }
}

function exercicioSete() {

}

