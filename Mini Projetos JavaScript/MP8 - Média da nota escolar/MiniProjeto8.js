//Média da nota escolar em JavaScript
//Obter a média a partir de um array

const array = [50,90,30];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas)

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return "A";
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma/(array.length)
}


