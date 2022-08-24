//Determinar a velocidade máxima e quantos pontos na carteira pelo excesso em JavaScript
// Veloxidade máxima até 70km
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// Caso os pontos sejam maior que 12 => 'Carteira suspensa'


verificarVelocidade(100);

function verificarVelocidade(velocidade){
    if (velocidade <= 70)
        console.log('OK');
    else{
        const pontos = Math.floor(((velocidade - 70) / 5));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos: ', pontos);

    }
}