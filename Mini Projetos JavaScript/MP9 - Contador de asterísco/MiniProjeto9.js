// Contador de asterisco

exibirAsterisco(7);

function exibirAsterisco(linhas){
    let padrao = ' ';
    for (linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}