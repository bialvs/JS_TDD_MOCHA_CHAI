//Par ou impar
//Receber uma quantidade de valores para avaliar
//Função exibe se cada valor é par ou ímpar

exibirTipo(7);

function exibirTipo(limite){
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log('Par');
        else
            console.log('Ímpar');
    
    console.log(i);
    }
    
}