var qg = prompt("digite a qtd de gols");
var qc = prompt("digite a quantidade de passes certos");
var qe = prompt("digite a quantidade de passes errados");

var pontos = (qg *50) + (qe * 10) + (qc * -5)

if(pontos <50){
    
    alert("péssima partida");
    
}else if(pontos >= 50 && pontos < 100){
    
    alert("ruim");
 
}else if(pontos >= 100 && pontos < 150){
    alert("basico");
    
}else if(pontos >= 150 && pontos < 200){ 
   alert("foi bem");

}else if(pontos >=200){
    alert("jogou de mais");
}