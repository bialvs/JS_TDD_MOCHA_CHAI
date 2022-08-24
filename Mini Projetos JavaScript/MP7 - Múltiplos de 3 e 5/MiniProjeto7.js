//Criar uma função que soma todos os múltiplos de 3 e 5 de um determinado valor

somar (17);

function somar(limite){

    let multiploDe3 = 0;
    let multiploDe5 = 0;

for (let i = 0; i <= limite; i++){
    if (i % 3 === 0)
        multiploDe3 += i;
    if (i % 5 === 0)
        multiploDe5 += i;
}
console.log(multiploDe3 + multiploDe5);

}