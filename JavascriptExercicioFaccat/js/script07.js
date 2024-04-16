//EPS = entra , processamento, saida
//Exercicio 10 FACCAT
/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor. */
function exercicio7(){
    let custoFabrica = parseInt(prompt("Digite o custo de fabrica de um carro : "));
    let custoDistribuidor = custoFabrica*0.28
    let custoImposto = custoFabrica*0.45
    let custoFinal = custoFabrica+custoDistribuidor+custoImposto
    alert("O custo final de um carro ao consumidor é : "+custoFinal)

}
