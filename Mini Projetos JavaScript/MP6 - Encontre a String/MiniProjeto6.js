//Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string

const filme = {
    titulo: 1917,
    ano: 2019,
    diretor: 'Sam Mendes',
    personagem: 'Lance'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for (prop in obj){
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop]);
    }
}