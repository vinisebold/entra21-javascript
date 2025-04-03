/*1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as
dimensões de um terreno e depois exibir a área do terreno.*/
function terreno() {
    let larguraTerreno = prompt("Qual é a largura do terreno?");
    let comprimentoTerreno = prompt("Qual é o comprimento do terreno? ");

    let dimensaoTerreno = larguraTerreno * comprimentoTerreno;

    alert("O tamanho do terreno é: " + dimensaoTerreno + "m²");
}


/*2. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os
cavalos comprados para um haras.*/
function cavalos() {
    let quantidadeCavalos = prompt("Qual é a quantidade de cavalos? ");
    let Ferraduras = quantidadeCavalos * 4;
    alert("Ferraduras necessárias para equipar todos os cavalos: " + Ferraduras);
}


/* 3. A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a
cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber
quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de
poupança (10% do total arrecadado). */
function padaria() {
    let quantidadePao = prompt("Qual a quantidade total de pães?");
    let quantidadeBroa = prompt("Qual a quantidade total de broas?");
    let totalArrecadado = (quantidadePao * 0.12) + (quantidadeBroa * 1.50);
    let contaPoupanca = totalArrecadado * 0.10;
    alert("Total arrecadado: " + totalArrecadado + "R$. Dinheiro que deve guardar na poupança: " + contaPoupanca + "R$");
}


/* 4. Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida
ela possui. Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoa
com 19 anos possui 6935 dias de vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS */
function diasVida() {
    let nomePessoa = prompt("Qual é seu nome?");
    let idadePessoa = prompt("Qual sua idade?");
    let diasVida = idadePessoa * 365;
    alert(nomePessoa + ", você já viveu " + diasVida);
}

/* 5. Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o
preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no
tanque. */
function gasolina() {
    let precoGasolina = prompt("Qual o preço do litro da gasolina?");
    let valorPagamento = prompt("Qual o valor do pagamento?");

    let litroTanque = valorPagamento / precoGasolina;
    alert("Você pode colocar até " + litroTanque + "L de gasolina");
}

/* 6. O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo
que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a
balança já desconte o peso do prato. */
function restaurante() {
    let pesoPrato = prompt("Digite o peso do prato (em kg): ");

    let valorAPagar = pesoPrato * 12;
    alert("Valor a pagar: " + valorAPagar + "R$");
}

/* 7. Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do
ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias. */
function quantosDias() {
    let diaMes = prompt("Qual o dia do mês? ");
    let mesAno = prompt("Qual o mês?");

    let totalDias = (diaMes - 30) + (mesAno * 30);
    alert("Já se passaram " + totalDias + "desde o início do ano.");
}

/* 8. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média
ponderada (as notas tem pesos respectivos de 1, 2 e 3). */
function mediaAluno() {
    let nota1 = prompt("Digite a sua PRIMEIRA nota:");
    let nota2 = prompt("Digite a sua SEGUNDA nota:");
    let nota3 = prompt("Digite a sua TERCEIRA nota:");

    let mediaPonderada = (nota1 * 1) + (nota2 * 2) + (nota3 * 3) / 6;
    alert("Resultado de sua média: " + mediaPonderada);
}

/* 9. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo
vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a
quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina
informe quanto será o valor arrecadado. */
function fabricaCamiseta() {
    let camisetaPequena = prompt("Informe a quantidade de camisetas pequenas: ");
    let camisetaMedias = prompt("Informe a quantidade de camisetas medias: ");
    let camisetaGrandes = prompt("Informe a quantidade de camisetas grandes: ");

    let totalCamisetas = (camisetaPequena * 10) + (camisetaMedias * 12) + (camisetaGrandes * 15);
    alert("Valor arrecadado: " + totalCamisetas);
}

/* 10. Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada
ponto é um par ordenado (x,y). */
function planoCartesiano() {
    let
}

/* 11. Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um
algoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre
30 dias. */
function tempoTrabalho() {
    let qntdDias = prompt("Qual a quantidade de dias sem acidentes de trabalho? ");

    let converterMes = converterDias / 30;
    let converterAno = qntdDias / 365;

    if (converterAno < 1) {
        converterAno = 'n/a'
    }

    alert("Tempo em anos: " + converterAno + " tempo em meses: " + converterMes + " tempo em dias: " + qntdDias);
}

/* 12. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento,
desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final. */
function salarioFuncionario() {
    let salarioBruto = prompt("Informe seu salário bruto: ");

    let salarioAumento = salarioBruto * 1.15;
    let salarioDesconto = salarioAumento * 0.92;

    alert("Seu salário inicial é de " + salarioBruto + "R$, porem com o aumento subiu para " + salarioAumento + "R$, entretanto com o desconto foi para " + salarioDesconto + "R$.");
}

/* 13. Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma:
CENTENA = x
DEZENA = x
UNIDADE = x */
function numeroInteiro() {
    let numeroInteiro = prompt("Digite um número inteiro até três dígitos: ");
}

/* 14. Calcule a área de uma pizza que possui um raio R (pi=3.14) */
function areaPizza() {
    let raioR = prompt("Informe o raio: ");

    const pi = 3.14;
    let areaPizza = pi * (raioR ** 2);
    alert("área da pizza é de: " + areaPizza);
}

/* 15. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um
algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que
Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para
Carlos, R$33,00 para André e R$35,53 para Felipe. */
function contaBar() {
    let contaBar = prompt("Qual o valor da conta? ")
    let semSentavos = Math.round(contaBar / 3)
    alert("O valor da conta deu: " + semSentavos)
}
