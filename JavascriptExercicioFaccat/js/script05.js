//exercicio 8 FACCAT
//EPS = entra , processamento, saida
/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

function exercicio5(){
    
    let totalEleitores = parseInt(prompt("Digite os numeros de participantes: "));
    let votosBrancos = parseInt(prompt("Digite os numeros totais de votos branco: "));
    let votosNulos = parseInt(prompt("Digite os numeros totais de votos nulos: "));
    let votosValidos = parseInt(prompt("Digite os numeros totais de votos validos: "));
    let percentualVotosBrancos = (votosBrancos / totalEleitores) * 100
    let percentualNulos = (votosNulos / totalEleitores) * 100
    let percentualValidos = (votosValidos / totalEleitores) * 100
    alert("O percentual de votos brancos em relação ao total de eleitores é  : "+percentualVotosBrancos)
    alert("O percentual de votos nulos em relação ao total de eleitores é : "+percentualNulos)
    alert("O percentual de votos válidos em relação ao total de eleitores é: "+percentualValidos)
}