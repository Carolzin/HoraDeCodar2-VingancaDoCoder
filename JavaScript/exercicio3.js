// 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

// Entrada de dados
var num1 = parseFloat(prompt("Informe o primeiro número"));
var num2 = parseFloat(prompt("Informe o segundo número"));
var num3 = parseFloat(prompt("Informe o terceiro número"));

// Condições para encontrar o maior número
if (num1 > num2 && num1 > num3) {
    alert("O maior número é: " + num1);
} else if (num2 > num1 && num2 > num3) {
    alert("O maior número é: " + num2);
} else {
    alert("O maior número é: " + num3);
}
