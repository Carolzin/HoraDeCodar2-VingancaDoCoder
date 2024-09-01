// 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente".

// Entrada de dados
var nota1 = parseInt(prompt("Digite a primeira nota"));
var nota2 = parseInt(prompt("Digite a segunda nota"));
var nota3 = parseInt(prompt("Digite a terceira nota"));
var nota4 = parseInt(prompt("Digite a quarta nota"));

// Verificação se todas as notas estão no intervalo correto
if ((nota1 > 0 && nota1 < 10) && 
    (nota2 > 0 && nota2 < 10) && 
    (nota3 > 0 && nota3 < 10) && 
    (nota4 > 0 && nota4 < 10)) {

    // Processamento de dados
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Saída de dados
    if (media > 5) {
        alert("Você passou no teste!");
    } else {
        alert("Tente novamente!");
    }
} else {
    // Mensagem de erro se alguma nota estiver fora do intervalo
    alert("Todas as notas devem estar entre 0 e 10.");
}
