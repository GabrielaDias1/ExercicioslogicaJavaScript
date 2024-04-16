//EPS = entra , processamento, saida
//Exercicio 9 FACCAT
/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. */
function exercicio6(){
    let salarioAtual = parseInt(prompt("Digite o valor do salario atual : "));
let percentualReajuste = parseInt(prompt("Digite o valor do reajuste : "));
valorReajuste = percentualReajuste*salarioAtual/100
novoSalario = salarioAtual+valorReajuste
alert("O novo valor do funcionario é : "+novoSalario)
}
