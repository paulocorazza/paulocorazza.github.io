var nome = 'Paulo Corazza';
var profissao = 'Programador';

function idade(ano_aniversario, mes_aniversario, dia_aniversario) {

    var nome = 'Paulo Corazza';
    var profissao = 'Programador';
    var d = new Date,
    
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = 1992;
        mes_aniversario = 09;
        dia_aniversario = 23;

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}

alert ("Oi eu sou o " + nome + "tenho " + d + "anos e sou um " + profissao);

console.log(d);
