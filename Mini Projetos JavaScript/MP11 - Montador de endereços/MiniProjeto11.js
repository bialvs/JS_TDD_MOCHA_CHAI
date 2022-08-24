//Montador de endereço
//Criar um objeto endereço que contenha:
//Rua
//Cidade
//CEP

let endereco ={
    rua: 'Tal',
    cidade: 'Cabedelo',
    cep: 'X'
};

exibirEndereco(endereco);

function exibirEndereco(endereco){
    for(let chave in endereco)
        console.log(chave,endereco[chave]);
    
}

