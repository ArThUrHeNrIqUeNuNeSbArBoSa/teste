//[ ] Escreva um programa onde, você chame uma função enviando um número, 
//a função deve imprime na tela os número de 1 até o número que você enviou.
/*
const contador = () => {
    for(number = 0; number <=10; number++){
        console.log(number);
    }
}
contador();
*/

//[ ] Escreva um programa onde, você chame uma função enviando um número
// (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

/*
const table = (number) => {
    if(number > 10 || number <1){
        console.log("erro");
        return;
    }
    for(let cal = 1; cal <=10; cal++){
        console.log(`${cal} X ${number} = ${cal * number}`);
    }
}
table(1);
*/

//[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
/*
const time = () => {
    console.log(new Date().toLocaleTimeString('pt-BR'));
    console.log(new Date().getFullYear()+1);
    console.log(new Date().getMonth()+1);
    console.log(new Date().getUTCDate());
}
time();
*/

//  [ ] Escreva um programa onde, você chame uma função mandando dois argumentos,
//  2 números, e a função responde qual número é maior.
/*
const numberUpDown = (number1, number2) => {
    if(number1 > number2){
        console.log(number1 + " e o maior!");
    }else{
        console.log(number2 + " e o maior");
    }

}
numberUpDown(7,5);
*/

//[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
// A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - 
//O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!