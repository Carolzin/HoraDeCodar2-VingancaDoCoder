// Entrada de dados
var num1 = parseInt(prompt("Informe o primeiro valor inteiro:"));
var num2 = parseInt(prompt("Informe o segundo valor inteiro:"));
var operacao = parseInt(prompt("Escolha a operação:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));
var resultado;

// Processamento de dados e cálculo
if (operacao === 1) {
    resultado = num1 + num2;
    alert("Resultado da adição: " + resultado);
} else if (operacao === 2) {
    resultado = num1 - num2;
    alert("Resultado da subtração: " + resultado);
} else if (operacao === 3) {
    resultado = num1 / num2;
    alert("Resultado da divisão: " + resultado);
} else if (operacao === 4) {
    resultado = num1 * num2;
    alert("Resultado da multiplicação: " + resultado);
} else {
    alert("Operação inválida! Escolha um número entre 1 e 4.");
}
