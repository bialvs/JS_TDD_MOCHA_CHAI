export default class Calculadora{

    static soma(a, b){
        return a + b
    }

    static subtracao(a, b){
        return a - b
    }

    static multiplicacao(a, b){
        return a * b
    }

    static divisao(a, b){
        return a / b
    }

    static seno(a){
        return Math.sin(a)
    }

    static quadradoDaSoma(a, b){
        let quadradoDoPrimeiroTermo = Math.pow(a,2)
        let quadradoDoSegundoTermo = Math.pow(b, 2)
        let resposta = quadradoDoPrimeiroTermo + 2*a*b + quadradoDoSegundoTermo
        return resposta
    }

    static escolhaFormula(a,b){
        if (a <= 5 && b >= 2){
            return Math.pow(a, b)
        }else{
            return 0
        }
    }

}