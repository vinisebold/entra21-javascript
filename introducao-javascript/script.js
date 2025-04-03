var nome = "Maria"
let valor = 2.3
let idade = 15
var casado = false
let pessoa = { nome: "Lucia", idade: 12 }
let cores = ["amarelo", "vermelho", "verde"]

document.writeln(nome + "<br>")//Adiciona uma quebra de linha apos
document.writeln(valor + "<br>")
document.writeln(idade + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>")// Para exibir o objeto de forma legivel]
document.writeln(cores + "<br><br>") // Para exibir o array de forma legivel

document.writeln("<hr>" + "<br>" + "<h2>Operadores Aritméticos </h2>")
document.writeln(3 + 2 + "<br> 3+2 <br>")
document.writeln(8 * 2, '<br>')
document.writeln(10 / 4, '<br>')
document.writeln(9 - 5, '<br>')
document.writeln('<br>' + "9", '5 <br><br>')

document.writeln("<hr>" + "<br>" + "<h2>Operadores Aritméticos </h2>")
var count = 0;
document.writeln(count + "<br>")

count++;
document.writeln(count + "<br>")

count--;
document.writeln(count + "<br>")

count += 2;
document.writeln(count + "<br>")

count *= 3;
document.writeln(count + "<br>")

count
document.writeln(count + "<br>")


//Prompt para perguntar nome:
var nome = prompt("Qual é o seu nome?");
alert("Olá " + nome);

//INFORMACOES
var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso

(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. && é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y) // => verdadeiro: ! inverte um valor booleano
