// 5. Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.

// Entrada de dados
var nota1 = parseInt(prompt("Informe o valor da primeira nota: "), 10);
var nota2 = parseInt(prompt("Informe o valor da segunda nota: "), 10);
var nota3 = parseInt(prompt("Informe o valor da terceira nota: "), 10);
var nota4 = parseInt(prompt("Informe o valor da quarta nota: "), 10);
var nota5 = parseInt(prompt("Informe o valor da quinta nota: "), 10);
var nota6 = parseInt(prompt("Informe o valor da sexta nota: "), 10);

// Processamento de dados
var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;

// Saída de dados
alert("As notas inseridas foram: " + nota1 + ", " + nota2 + ", " + nota3 + ", " + nota4 + ", " + nota5 + ", " + nota6 + ". E a média aritmética é: " + media);
