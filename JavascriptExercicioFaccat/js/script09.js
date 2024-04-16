/*EPS= entrada, processamento, saida.
Exercicio 12 FACCAT
transformar temperatura em Fahrenheit para graus Celsius*/
function exercico9(){
    let fahrenheit = parseInt(prompt("Digite o valor da temperatura em fahrenheit: "));
    let celsius = (fahrenheit - 32)/1.8;
    alert("A temperatura em graus Celsius é: "+celsius)
}