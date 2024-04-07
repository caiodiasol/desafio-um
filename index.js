// Crie uma variavel para armazenar o nome e a quantidade de experiência (XP) de um héroi,
// depois utilize uma ESTRUTURA DE DECISÃO para armazenar algumas das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro 
//Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

let nomeHeroi = "O Super Heroi";
let quantidadeXP = 7.200;

let nivelHeroi;

if (quantidadeXP < 1.000){
    nivelHeroi = "Ferro"
}
else if (quantidadeXP >= 1.001 && quantidadeXP <= 2.000){
    nivelHeroi = "Bronze"
}
else if (quantidadeXP >= 2.001 && quantidadeXP <= 5.000){
    nivelHeroi = "Prata"
}
else if (quantidadeXP >= 5.001 && quantidadeXP <= 7.000){
    nivelHeroi = "Ouro"
}
else if (quantidadeXP >= 7.001 && quantidadeXP <= 8.000){
    nivelHeroi = "Platina"
}
else if (quantidadeXP >= 8.001 && quantidadeXP <= 9.000){
    nivelHeroi = "Ascendente"
}
else if (quantidadeXP >= 9.001 && quantidadeXP <= 10.000){
    nivelHeroi = "Imortal"
}
else nivelHeroi = "Radiante"

console.log(nomeHeroi + " esta no nível " + nivelHeroi);


