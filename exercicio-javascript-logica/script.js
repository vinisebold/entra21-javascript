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




/* 11. Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um
algoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre
30 dias. */
function tempoTrabalho() {
    let totalDias = prompt("Qual a quantidade de dias sem acidentes de trabalho? ");

    let totalAnos = parseInt(totalDias / 360)
    let restoAnos = parseInt(totalDias % 360)

    let totalMeses = parseInt(restoAnos / 30)
    let restoMeses = parseInt(restoAnos % 30)

    let totalEmDias = parseInt(restoMeses)

    alert("A quantidade  de anos foi: " + parseInt(totalAnos) + "\nA quantidade de emses foi: " + parseInt(totalMeses) + "\nA quantidade de dias foi: " + parseInt(totalDias))
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

    alert("CENTENA = " + numeroInteiro.substring(0,3))
    alert("DEZENA = " + numeroInteiro.substring(0,2))
    alert("UNIDADE = " + numeroInteiro.substring(0,1))
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
    let semCentavos = Math.round(contaBar / 3)
    let comCentavos = contaBar / 3;
    alert("uma conta de " + contaBar + "resulta em R$" + semCentavos + "para Carlos, R$" +semCentavos + "para André e R$" + comCentavos + "para Felipe.")
}

/* 16. A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de
queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou
presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em
que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em
quilos) de queijo, presunto e carne necessários para compra. */
function lanchonete() {
    let quantiadadeHamburguer = prompt("Qual a quantidade de hamburguer?");
    let queijoGramas = (2 * 50 * quantiadadeHamburguer) / 1000;
    let presuntoGramas = (50 * quantiadadeHamburguer) / 1000;
    let rodelaCarne = (100 * quantiadadeHamburguer) / 1000;
    alert (queijoGramas + "kg de queijo, já de presunto deu " + presuntoGramas + "kg, e de rodela de hamburguer deu " + rodelaCarne + "kg");
}

/* 17. Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um
algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este
tipo de conversão).*/
function temperatura(){
    let celsius = prompt("Qual a temperatura em °C?");
    let fahrenheit = (celsius * 1.8) + 32;

    alert("Temperatura convertida para Fahrenheit: " + fahrenheit + "°F");
}

/* 18. A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra.
Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado
funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de
impostos. */
function salarioHoras(){
    let horasTrabalho = prompt("Quantas horas trabalhadas? ");
    let salarioBruto = horasTrabalho * 10;
    let salarioLiquido = salarioBruto * 0.90;
    alert("Salário Bruto: " + salarioBruto + "R$ Salário Líquido: " + salarioLiquido + "R$");
}

/* 19. A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé
direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para
indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o
anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar
todos os seus frangos. */

