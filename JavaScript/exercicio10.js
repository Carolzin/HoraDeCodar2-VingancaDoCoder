// 10. Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas.

// Entrada de dados
var altura = parseFloat(prompt("Insira sua altura em metros"));
var genero = parseInt(prompt("Digite o número 1 para gênero feminino e 2 para gênero masculino"));

var peso;

if (genero === 1) {
    peso = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é: " + peso + " kg");
} else if (genero === 2) {
    peso = (72.7 * altura) - 58;
    alert("Seu peso ideal é: " + peso + " kg");
} else {
    alert("Gênero inválido! Por favor, insira 1 para feminino ou 2 para masculino.");
}
