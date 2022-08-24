//Montador de postagem de blog
//Crie um objeto de postagem de blog com as seguintes propriedades:
/*postagem
título
mensagem
autor
visualizações
cometários
está ao vivo*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 25,
    cometarios: [
        {autor: 'a',mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);