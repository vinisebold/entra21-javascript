//////////////////////////////////////////////////////////////////////////
// Adicionar um novo nome à lista
let nomes = ["Ana", "Bruno", "Carlos"];

// Adiciona um nome  ao final da lista
nomes.push("Fernanda");

console.log("Lista atualizada:", nomes);
//push() é usado para adicionar elementos ao final da lista em JavaScript.

//////////////////////////////////////////////////////////////////////////

let frutas = ["Maça", "Banana", "Laranja", "Uva"];

//Remove o primeiro elemento com shift()
frutas.shift();

//Remove o último elemento com o pop()
frutas.pop();

//////////////////////////////////////////////////////////////////////////

//Ordernar a lista de números em ordem crescente
numeros = [42, 10, 7, 99, 19];

//Função sort() com comparação numérica
numeros.sort(function (a, b) {
    return a - b; //Para ordernar em ordem crescente 
});

console.log("Lista ordernada:", numeros);

//////////////////////////////////////////////////////////////////////////

//Criar uma matriz 3x3 e imprimir todos os elementos
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Percorre linhas
for (let i = 0; i < matriz.length; i++) {
    //Percorre colunas
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
    }
}

//////////////////////////////////////////////////////////////////////////

let mat = [
    [1, 2],
    [3, 4],
    [5, 6]
];
let total = 0;

for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        total += mat[i][j];
    }
}
console.log("Soma da matriz:", total)

// "editor.fontLigatures": "'ss07', 'feat','ures','ss02','liga','ss06', 'ss11', 'ss01', 'zero', ''"