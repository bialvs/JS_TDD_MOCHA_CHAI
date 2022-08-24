//Números Primos

exibirNumerosPrimos(21);

function exibirNumerosPrimos(limite){
    for(let num = 2; num <= limite; num++){
        if(NumeroPrimo(num)) 
        console.log(num);
    }

}

function NumeroPrimo(num){
    for(divisor = 2; divisor < num; divisor++){
        if(num % divisor === 0){
            return false;
        }
    }
    return true;
}