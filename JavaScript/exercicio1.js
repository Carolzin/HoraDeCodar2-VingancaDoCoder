// 1. Escreva um programa em que o usuário informe dois números. Então escreva em tela o maior deles.

// Entrada de dados
var num1 = parseFloat(prompt("Digite o primeiro número: "));
var num2 = parseFloat(prompt("Digite o segundo número: "));

// Condições e saída
if (num1 > num2) {
    alert("O maior número entre os dois números informados é: " + num1);
} else if (num2 > num1) {
    alert("O maior número entre os dois números informados é: " + num2);
} else {
    alert("Os dois números são iguais.");
}
