// 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)

// Entrada de dados 
var num1 = parseInt(prompt("Informe o primeiro número"));
var num2 = parseInt(prompt("Informe o segundo número"));
var num3 = parseInt(prompt("Informe o terceiro número"));
var num4 = parseInt(prompt("Informe o quarto número"));

// Processamento de dados e saída
if (num1 > num2 && num1 > num3 && num1 > num4) {
    alert("O primeiro número inserido foi o " + num1 + ", o último número inserido foi o " + num4 + " e o maior entre todos é o " + num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4) {
    alert("O primeiro número inserido foi o " + num1 + ", o último número inserido foi o " + num4 + " e o maior entre todos é o " + num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4) {
    alert("O primeiro número inserido foi o " + num1 + ", o último número inserido foi o " + num4 + " e o maior entre todos é o " + num3);
} else {
    alert("O primeiro número inserido foi o " + num1 + ", o último número inserido foi o " + num4 + " e o maior entre todos é o " + num4);
}
