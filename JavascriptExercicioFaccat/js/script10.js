/*EPS= entrada, processamento, saida.
Exercicio 13 FACCAT
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:*/
function exercicio10(){
    let nota1 = parseInt(prompt("Digite a primeira nota do aluno: "));
    let nota2 = parseInt(prompt("Digite a segunda nota do aluno: "));
    let nota3 = parseInt(prompt("Digite a terceira nota do aluno: "));
    let mediaFinal = ((nota1*2)+(nota2*3)+(nota3*5))/10;
    alert("A media final do aluno é: "+mediaFinal)
}