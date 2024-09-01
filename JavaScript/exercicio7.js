// 7. Faça um programa que leia 6 valores informados pelo usuário e some somente aqueles que forem menores que 72.

// Entrada de dados
var num1 = parseInt(prompt("Informe o primeiro valor: "));
var num2 = parseInt(prompt("Informe o segundo valor: "));
var num3 = parseInt(prompt("Informe o terceiro valor: "));
var num4 = parseInt(prompt("Informe o quarto valor: "));
var num5 = parseInt(prompt("Informe o quinto valor: "));
var num6 = parseInt(prompt("Informe o sexto valor: "));

var soma = 0; 

// Processamento de dados
if (num1 < 72) {
    soma += num1;
}
if (num2 < 72) {
    soma += num2;
}
if (num3 < 72) {
    soma += num3;
}
if (num4 < 72) {
    soma += num4;
}
if (num5 < 72) {
    soma += num5;
}
if (num6 < 72) {
    soma += num6;
}
    
// Saída
alert("Os números informados foram: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6 + ". E a soma dos números menores que 72 é: " + soma);
