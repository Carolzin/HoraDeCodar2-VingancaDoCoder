// 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.

// Entrada de dados
var numero = parseFloat(prompt("Informe um número"));

// Condições e saída
if (numero > 0) {
    alert("O número informado é positivo!");
} else if (numero === 0) {
    alert("O número informado é zero!");
} else {
    alert("O número informado é negativo!");
}
