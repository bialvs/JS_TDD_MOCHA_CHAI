import assert from 'assert'
import chai, { expect, should} from 'chai'
import Calculadora from '../src/Calculadora.js'

chai.should();

describe('Testes de soma', () => {
    it('Deve somar 8 e 9 resultando em 17', () => {
        let resultado = Calculadora.soma(8, 9)
        expect(resultado).to.be.eq(17)
        resultado.should.be.a('number')
    })
    it('Deve somar -9 e 5 resultando em -4', () => {
        let resultado = Calculadora.soma(-9, 5)
        expect(resultado).to.be.eq(-4)
    })
    it('Deve somar -3 e 6 resultando em 3', () => {
        let resultado = Calculadora.soma(-3, 6)
        expect(resultado).to.be.eq(3)
    })
   
})

describe('Testes de subtrção', () => {
    it('Deve subtrair 10 e 5 resultando em 5', () => {
        let resultado = Calculadora.subtracao(10, 5)
        expect(resultado).to.be.eq(5)
    })
    it('Deve subtrair -9 e -5 resultando em -4', () => {
        let resultado = Calculadora.subtracao(-9, -5)
        expect(resultado).to.be.eq(-4)
    })
    it('Deve subtrair 2 e -5 resultando em 7', () => {
        let resultado = Calculadora.subtracao(2, -5)
        expect(resultado).to.be.eq(7)
    })
    
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 5 e 5 resultando em 25', () => {
        let resultado = Calculadora.multiplicacao(5, 5)
        expect(resultado).to.be.eq(25)
    })
    it('Deve multiplicar 7 e -5 resultando em -35', () => {
        let resultado = Calculadora.multiplicacao(7, -5)
        expect(resultado).to.be.eq(-35)
    })
    it('Deve multiplicar -7 e -5 resultando em 35', () => {
        let resultado = Calculadora.multiplicacao(-7, -5)
        expect(resultado).to.be.eq(35)
    })
     
})

describe('Testes de divisão', () => {
    it('Deve dividir 36 e 6 resultando em 6', () => {
        let resultado = Calculadora.divisao(36, 6)
        expect(resultado).to.be.eq(6)
    })
    it('Deve dividir -64 e 8 resultando em -8', () => {
        let resultado = Calculadora.divisao(-64, 8)
        expect(resultado).to.be.eq(-8)
    })
    it('Deve dividir -24 e -2 resultando em 12', () => {
        let resultado = Calculadora.divisao(-24, -2)
        expect(resultado).to.be.eq(12)
    })
       
})

describe('Testes de seno', () => {
    it('Deve fazer o seno de 45 e resultar entre 0.5 e 1 (sin 45 em rad é aprox. 0,8509)', () => {
        let resultado = Calculadora.seno(45)
        expect(resultado).to.be.above(0.5).and.below(1)
    })
          
})

describe('Teste do quadrado da soma de dois termos', () => {
    it('Deve executar o quadrado da soma de 2 e 5 resultando em 49', () => {
        let resultado = Calculadora.quadradoDaSoma(2, 5)
        expect(resultado).to.be.eq(49)
    })
          
})

describe('Teste escolha a fórmula: Se A for menor ou igual a 5 e B menor ou igual a 2 retorne o quadro de a^b, caso contrário retorne 0', () => {
    it('Deve executar a = 5 e b = 2 resultando em 25', () => {
        let resultado = Calculadora.escolhaFormula(5, 2)
        expect(resultado).to.be.eq(25)
    })
    it('Deve executar a = 8 e b = 2 resultando em 0', () => {
        let resultado = Calculadora.escolhaFormula(8, 2)
        expect(resultado).to.be.eq(0)
    })
          
})
