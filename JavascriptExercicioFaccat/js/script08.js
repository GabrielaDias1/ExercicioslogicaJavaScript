//EPS = entra , processamento, saida
//Exercicio 11 FACCAT
/* Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor*/
function exercicio8(){
    let carrosVendidos = parseInt(prompt("Digite o numero de carros vendidos: "));
    let valorTotalVendas = parseInt(prompt("Digite o valor total por vendas:  "));
    let salarioFixo = parseInt(prompt("Digite o valor do salario fixo: "));
    let valorCarroVendido= parseInt(prompt("Digite o valor por carro vendido: "));
    let comissaoFixa = carrosVendidos+valorCarroVendido
    let comissao = valorTotalVendas*0.5
    let salarioFinal = salarioFixo+comissaoFixa+comissao
    alert("O salario final do vendedor é: "+salarioFinal)
}
