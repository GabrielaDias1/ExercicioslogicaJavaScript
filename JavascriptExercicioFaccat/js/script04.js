/*exercicio 7 FACCAT
EPS = entra , processamento, saida
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, 
meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.*/

function exercicio4(){
    alert("Digite as informaçoes para saber sua idade em dias");
    let anos = parseInt(prompt("quantos anos ? "));
    let meses =parseInt(prompt("Digite quantos meses?"));
    let dias = parseInt(prompt("Digite quantos dias?"));
    let idadeEmDias = (anos*365)+(meses*30)+dias;
    alert("Sua idade em dias, é :"+idadeEmDias)
}
    
    

