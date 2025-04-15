/*1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as
dimensões de um terreno e depois exibir a área do terreno.*/
function terreno() {
    let larguraTerreno = parseFloat(prompt("Qual é a largura do terreno?"));
    let comprimentoTerreno = parseFloat(prompt("Qual é o comprimento do terreno? "));

    let dimensaoTerreno = larguraTerreno * comprimentoTerreno;

    alert("O tamanho do terreno é: " + dimensaoTerreno + "m²");
}


/*2. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os
cavalos comprados para um haras.*/
function cavalos() {
    let quantidadeCavalos = parseInt(prompt("Qual é a quantidade de cavalos? "));
    let Ferraduras = quantidadeCavalos * 4;
    alert("Ferraduras necessárias para equipar todos os cavalos: " + Ferraduras);
}


/* 3. A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a
cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber
quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de
poupança (10% do total arrecadado). */
function padaria() {
    let quantidadePao = parseInt(prompt("Qual a quantidade total de pães?"));
    let quantidadeBroa = parseInt(prompt("Qual a quantidade total de broas?"));
    let totalArrecadado = (quantidadePao * 0.12) + (quantidadeBroa * 1.50);
    let contaPoupanca = totalArrecadado * 0.10;
    alert("Total arrecadado: R$ " + totalArrecadado.toFixed(2) + ". Dinheiro que deve guardar na poupança: R$ " + contaPoupanca.toFixed(2));
}


/* 4. Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida
ela possui. Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoa
com 19 anos possui 6935 dias de vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS */
function diasVida() {
    let nomePessoa = prompt("Qual é seu nome?");
    let idadePessoa = parseInt(prompt("Qual sua idade?"));
    let diasVida = idadePessoa * 365;
    alert(nomePessoa.toUpperCase() + ", VOCÊ JÁ VIVEU " + diasVida + " DIAS");
}

/* 5. Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o
preço do litro da gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no
tanque. */
function gasolina() {
    let precoGasolina = parseFloat(prompt("Qual o preço do litro da gasolina?"));
    let valorPagamento = parseFloat(prompt("Qual o valor do pagamento?"));

    let litroTanque = valorPagamento / precoGasolina;
    alert("Você pode colocar até " + litroTanque.toFixed(2) + "L de gasolina");
}

/* 6. O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo
que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. Assuma que a
balança já desconte o peso do prato. */
function restaurante() {
    let pesoPrato = parseFloat(prompt("Digite o peso do prato (em kg): "));

    let valorAPagar = pesoPrato * 12;
    alert("Valor a pagar: R$ " + valorAPagar.toFixed(2));
}

/* 7. Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do
ano. Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias. */
function quantosDias() {
    let diaMes = parseInt(prompt("Qual o dia do mês? "));
    let mesAno = parseInt(prompt("Qual o mês?"));

    let totalDias = diaMes + ((mesAno - 1) * 30);
    alert("Já se passaram " + totalDias + " dias desde o início do ano.");
}

/* 8. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média
ponderada (as notas tem pesos respectivos de 1, 2 e 3). */
function mediaAluno() {
    let nota1 = parseFloat(prompt("Digite a sua PRIMEIRA nota:"));
    let nota2 = parseFloat(prompt("Digite a sua SEGUNDA nota:"));
    let nota3 = parseFloat(prompt("Digite a sua TERCEIRA nota:"));

    let mediaPonderada = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / 6;
    alert("Resultado de sua média: " + mediaPonderada.toFixed(2));
}

/* 9. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo
vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a
quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina
informe quanto será o valor arrecadado. */
function fabricaCamiseta() {
    let camisetaPequena = parseInt(prompt("Informe a quantidade de camisetas pequenas: "));
    let camisetaMedias = parseInt(prompt("Informe a quantidade de camisetas médias: "));
    let camisetaGrandes = parseInt(prompt("Informe a quantidade de camisetas grandes: "));

    let totalCamisetas = (camisetaPequena * 10) + (camisetaMedias * 12) + (camisetaGrandes * 15);
    alert("Valor arrecadado: R$ " + totalCamisetas.toFixed(2));
}

/* 10. Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada
ponto é um par ordenado (x,y). */
function planoCartesiano() {
    let x1 = parseFloat(prompt("Digite o valor de x do primeiro ponto:"));
    let y1 = parseFloat(prompt("Digite o valor de y do primeiro ponto:"));
    let x2 = parseFloat(prompt("Digite o valor de x do segundo ponto:"));
    let y2 = parseFloat(prompt("Digite o valor de y do segundo ponto:"));
    
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    
    alert("A distância entre os pontos (" + x1 + "," + y1 + ") e (" + x2 + "," + y2 + ") é: " + distancia.toFixed(2));
}

/* 11. Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um
algoritmo para converter este tempo em anos, meses e dias. Assuma que cada mês possui sempre
30 dias. */
function tempoTrabalho() {
    let totalDias = parseInt(prompt("Qual a quantidade de dias sem acidentes de trabalho? "));

    let totalAnos = Math.floor(totalDias / 360);
    let restoAnos = totalDias % 360;

    let totalMeses = Math.floor(restoAnos / 30);
    let restoMeses = restoAnos % 30;

    let totalEmDias = restoMeses;

    alert("A quantidade de anos foi: " + totalAnos + "\nA quantidade de meses foi: " + totalMeses + "\nA quantidade de dias foi: " + totalEmDias);
}

/* 12. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento,
desconte 8% de impostos. Imprima o salário inicial, o salário com o aumento e o salário final. */
function salarioFuncionario() {
    let salarioBruto = parseFloat(prompt("Informe seu salário bruto: "));

    let salarioAumento = salarioBruto * 1.15;
    let salarioDesconto = salarioAumento * 0.92;

    alert("Seu salário inicial é de R$ " + salarioBruto.toFixed(2) + ", porém com o aumento subiu para R$ " + salarioAumento.toFixed(2) + ", entretanto com o desconto foi para R$ " + salarioDesconto.toFixed(2) + ".");
}

/* 13. Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma:
CENTENA = x
DEZENA = x
UNIDADE = x */
function numeroInteiro() {
    let numeroInteiro = parseInt(prompt("Digite um número inteiro até três dígitos: "));
    
    let centena = Math.floor(numeroInteiro / 100);
    let dezena = Math.floor((numeroInteiro % 100) / 10);
    let unidade = numeroInteiro % 10;
    
    alert("CENTENA = " + centena + "\nDEZENA = " + dezena + "\nUNIDADE = " + unidade);
}

/* 14. Calcule a área de uma pizza que possui um raio R (pi=3.14) */
function areaPizza() {
    let raioR = parseFloat(prompt("Informe o raio da pizza: "));

    const pi = 3.14;
    let areaPizza = pi * (raioR ** 2);
    alert("A área da pizza é de: " + areaPizza.toFixed(2) + " unidades quadradas");
}

/* 15. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um
algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que
Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para
Carlos, R$33,00 para André e R$35,53 para Felipe. */
function contaBar() {
    let contaBar = parseFloat(prompt("Qual o valor da conta? "));
    let valorDividido = contaBar / 3;
    let valorSemCentavos = Math.floor(valorDividido);
    let felipe = contaBar - (valorSemCentavos * 2);
    
    alert("Uma conta de R$ " + contaBar.toFixed(2) + " resulta em R$ " + valorSemCentavos.toFixed(2) + " para Carlos, R$ " + valorSemCentavos.toFixed(2) + " para André e R$ " + felipe.toFixed(2) + " para Felipe.");
}

/* 16. A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de
queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou
presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em
que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em
quilos) de queijo, presunto e carne necessários para compra. */
function lanchonete() {
    let quantidadeSanduiches = parseInt(prompt("Qual a quantidade de sanduíches a fazer?"));
    let queijoGramas = (2 * 50 * quantidadeSanduiches) / 1000;
    let presuntoGramas = (50 * quantidadeSanduiches) / 1000;
    let rodelaCarne = (100 * quantidadeSanduiches) / 1000;
    alert(queijoGramas + "kg de queijo, " + presuntoGramas + "kg de presunto, e " + rodelaCarne + "kg de hambúrguer.");
}

/* 17. Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um
algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este
tipo de conversão).*/
function temperatura() {
    let celsius = parseFloat(prompt("Qual a temperatura em °C?"));
    let fahrenheit = (celsius * 1.8) + 32;

    alert("Temperatura convertida para Fahrenheit: " + fahrenheit.toFixed(1) + "°F");
}

/* 18. A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra.
Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado
funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de
impostos. */
function salarioHoras() {
    let horasNormais = parseInt(prompt("Quantas horas normais trabalhadas? "));
    let horasExtras = parseInt(prompt("Quantas horas extras trabalhadas? "));
    
    let salarioBruto = (horasNormais * 10) + (horasExtras * 15);
    let salarioLiquido = salarioBruto * 0.90;
    
    alert("Salário Bruto: R$ " + salarioBruto.toFixed(2) + "\nSalário Líquido: R$ " + salarioLiquido.toFixed(2));
}

/* 19. A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé
direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para
indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o
anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar
todos os seus frangos. */
function granjaFrango(){
    let quantidadeFrangos = parseInt(prompt("Qual a quantidade de frangos na granja?"));

    let custoAnelChip = quantidadeFrangos * 4;
    let custoAnelAlimento = quantidadeFrangos * (3.50 * 2);
    let totalGranja = custoAnelChip + custoAnelAlimento;
    
    alert("O total gasto da granja para marcar todos os seus frangos foi: R$ " + totalGranja.toFixed(2));
}

/* 20. Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos.
Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa.*/
function novelosLa(){
    let quantidadeNovelos = parseInt(prompt("Digite a quantidade total de novelos: "));
    let quantidadeBlusa = parseInt(prompt("Qual a quantidade de blusas produzidas? "));

    let novelosPorBlusa = quantidadeNovelos / quantidadeBlusa;
    alert(`São necessários ${novelosPorBlusa.toFixed(2)} novelos por blusa.`);
}

/* 21. A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml,
garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade
de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. */
function refrigerantes() {
    let latas350ml = parseInt(prompt("Quantas latas de 350ml?"));
    let garrafas600ml = parseInt(prompt("Quantas garrafas de 600ml?"));
    let garrafas2L = parseInt(prompt("Quantas garrafas de 2 litros?"));
    
    let totalLitros = (latas350ml * 0.35) + (garrafas600ml * 0.6) + (garrafas2L * 2);
    
    alert("Total de litros comprados: " + totalLitros.toFixed(2) + " litros");
}

/* 22. Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu
poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor
total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, 
e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero. */
function cofrinho() {
    let moeda1cent = parseInt(prompt("Quantidade de moedas de 1 centavo:"));
    let moeda5cent = parseInt(prompt("Quantidade de moedas de 5 centavos:"));
    let moeda10cent = parseInt(prompt("Quantidade de moedas de 10 centavos:"));
    let moeda25cent = parseInt(prompt("Quantidade de moedas de 25 centavos:"));
    let moeda50cent = parseInt(prompt("Quantidade de moedas de 50 centavos:"));
    let moeda1real = parseInt(prompt("Quantidade de moedas de 1 real:"));
    
    let totalCentavos = (moeda1cent * 1) + (moeda5cent * 5) + (moeda10cent * 10) + 
                        (moeda25cent * 25) + (moeda50cent * 50) + (moeda1real * 100);
    
    let totalReais = totalCentavos / 100;
    
    alert("Valor total economizado: R$ " + totalReais.toFixed(2));
}

/* 23. Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente
longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre
da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio. */
function alturaPredioPorSombra() {
    let suaAltura = parseFloat(prompt("Qual é a sua altura em metros?"));
    let suaSombra = parseFloat(prompt("Qual é o comprimento da sua sombra em metros?"));
    let sombraPredio = parseFloat(prompt("Qual é o comprimento da sombra do prédio em metros?"));
    
    // Regra de três: suaAltura/suaSombra = alturaPredio/sombraPredio
    let alturaPredio = (suaAltura * sombraPredio) / suaSombra;
    
    alert("A altura do prédio é de aproximadamente " + alturaPredio.toFixed(2) + " metros.");
}

/* 24. Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá.
Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X
litros de refresco (informados pelo usuário). */
function refresco() {
    let litrosRefresco = parseFloat(prompt("Quantos litros de refresco deseja fazer?"));
    
    // O refresco é composto por 8 partes de água e 2 partes de suco (total: 10 partes)
    let litrosAgua = (litrosRefresco * 8) / 10;
    let litrosSuco = (litrosRefresco * 2) / 10;
    
    alert("Para fazer " + litrosRefresco + " litros de refresco, são necessários:\n" +
          litrosAgua.toFixed(2) + " litros de água\n" +
          litrosSuco.toFixed(2) + " litros de suco de maracujá");
}

/* 25. Calcule o volume de uma caixa d'água cilíndrica. */
function caixaDagua() {
    let raio = parseFloat(prompt("Qual é o raio da caixa d'água em metros?"));
    let altura = parseFloat(prompt("Qual é a altura da caixa d'água em metros?"));
    
    const pi = 3.14;
    let volume = pi * raio * raio * altura;
    
    alert("O volume da caixa d'água é " + volume.toFixed(2) + " metros cúbicos ou " + 
          (volume * 1000).toFixed(2) + " litros.");
}

/* 26. Faça um algoritmo que receba três números, calcule e mostre a multiplicação desses números. */
function multiplicacaoTresNumeros() {
    let num1 = parseFloat(prompt("Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let num3 = parseFloat(prompt("Digite o terceiro número:"));
    
    let resultado = num1 * num2 * num3;
    
    alert("A multiplicação dos três números é: " + resultado);
}

/* 27. Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número
pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se
preocupar com validações. */
function divisao() {
    let num1 = parseFloat(prompt("Digite o primeiro número (dividendo):"));
    let num2 = parseFloat(prompt("Digite o segundo número (divisor):"));
    
    let resultado = num1 / num2;
    
    alert("A divisão de " + num1 + " por " + num2 + " é: " + resultado.toFixed(2));
}

/* 28. Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas,
considerando peso 2 para a primeira nota e peso 3 para a segunda nota. */
function mediaPonderadaDuasNotas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    
    let mediaPonderada = ((nota1 * 2) + (nota2 * 3)) / 5;
    
    alert("A média ponderada das notas é: " + mediaPonderada.toFixed(2));
}

/* 29. Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço,
sabendo-se que este sofreu um desconto de 10%. */
function descontoProduto() {
    let precoProduto = parseFloat(prompt("Digite o preço do produto:"));
    
    let novoPreco = precoProduto * 0.9; // aplicando 10% de desconto
    
    alert("Preço original: R$ " + precoProduto.toFixed(2) + 
          "\nPreço com desconto de 10%: R$ " + novoPreco.toFixed(2));
}

/* 30. Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um
algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a
comissão e o salário final do funcionário. */
function salarioComissao() {
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do funcionário:"));
    let valorVendas = parseFloat(prompt("Digite o valor total das vendas:"));
    
    let comissao = valorVendas * 0.04;
    let salarioFinal = salarioFixo + comissao;
    
    alert("Comissão sobre vendas: R$ " + comissao.toFixed(2) + 
          "\nSalário final: R$ " + salarioFinal.toFixed(2));
}