function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosBeatriz = ['Caio', 'Lúcio', 'Ledo', 'Madalena']
    if (ConvidadosBeatriz.includes(NomeConvidado)){
        document.gotElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    }
    else{
        document.gotElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}