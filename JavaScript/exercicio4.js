// 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

// Entrada de dados
var valor1 = parseInt(prompt("Digite o primeiro valor"), 10);
var valor2 = parseInt(prompt("Digite o segundo valor"), 10);
var valor3 = parseInt(prompt("Digite o terceiro valor"), 10);

// Encontrar o menor valor e somar os dois maiores
if (valor1 < valor2 && valor1 < valor3) {
    // valor1 é o menor
    var valorSomado = valor2 + valor3;
    alert(`O segundo e terceiro número foram os maiores informados. A soma deles é ${valorSomado}`);
} else if (valor2 < valor1 && valor2 < valor3) {
    // valor2 é o menor
    var valorSomado = valor1 + valor3;
    alert(`O primeiro e terceiro número foram os maiores informados. A soma deles é ${valorSomado}`);
} else {
    // valor3 é o menor
    var valorSomado = valor1 + valor2;
    alert(`O primeiro e segundo número foram os maiores informados. A soma deles é ${valorSomado}`);
}
