function calculoRank(vitorias, derrotas){
    saldo = vitorias - derrotas;
    if (saldo<=10){
        nivel = "Ferro"
    }else if (saldo<=20){
        nivel = "Bronze"
    }else if (saldo<=50){
        nivel = "Prata"
    }else if (saldo<=80){
        nivel = "Ouro"
    }else if (saldo<=90){
        nivel = "Diamante"
    }else if (saldo<=100){
        nivel = "Lendario"
    }else if (saldo>101){
        nivel = "Imortal"
    }
    return `O Heroi tem de saldo de ${saldo} está no nível de ${nivel}`
}
console.log(calculoRank(98, 10))
console.log(calculoRank(12, 10))
console.log(calculoRank(25, 10))