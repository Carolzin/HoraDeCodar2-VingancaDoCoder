// 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

// Entrada de dados
var ano = parseInt(prompt("Insira o ano que você nasceu: "));

// Processamento de dados
var idade = 2024 - ano;

// Saída
if (idade >= 16) {
    alert("Você poderá votar esse ano!");
} else {
    alert("Você não poderá votar esse ano!");
}
