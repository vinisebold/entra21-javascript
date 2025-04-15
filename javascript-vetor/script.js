
//Soma de valores do vetor
function exemploUm() {
    let soma = 0;
    let numeros = [1, 8, 9, 10]

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    console.log(soma)
}

//Solicitar valores, mostrar menor e maior valor, -1 para sair;
function exemploDois() {
    let numeros = [1, 8, 9, 10]
    let maior = -10000
    let menor = 10000
    for (let i = 0; i < numeros.length; i++) {

        if (maior < numeros[i]) {
            maior = numeros[i]
        }
        if (menor > numeros[i]) {
            menor = numeros[i]
        }
    }
    console.log(maior)
    console.log(menor)
}

let numeros = [4, 8, 2, 10, 65];

let maior = Math.max(...numeros); // Retorna maior valor
let menor = Math.min(...numeros); // Retorna menor valor

console.log(menor);
console.log(maior);

