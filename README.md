<img src="https://i.imgur.com/0scsoNu.jpg" title="source: imgur.com" />

</br>

> Status do projeto: Finalizado 🙌

## Introdução

A sprint 4 vem propor uma série de estudos e projetos para que seja possível aprender e colocar em prática tecnologias como: git, github, JavaScript, JS KOANS, TDD, Mocha e Chai. 


## Conteúdos abordados
[x] Sistema `git` para versionamento de arquivos;

[x] Platafroma e ferramentas `Github`;

[x] Linguagem de programação `JavaScript`;

[x] `KOANS-JS` - Aprendizado sobre refatoração e testes automatizados;

[x] `TDD` - Teste Driven Development 

[x] Bibliotecas `Mocha` e `Chai`;

## Conteúdos a serem avaliados

- Nome do repositório, branches e commits diários;
- Organização das pastas, arquivos e código;
- O README.md contendo as informações do projeto;
- Instalação e funcionamento dos códigos;
- Métodos robustos na classe calculadora.js;
- Arquivo(s) de teste com testes eficientes;
- Nome das variáveis e métodos;
- Plágio! 

## Pré-requisitos

No desenvolvimento dessa sprint você precisará de uma conta no <a href="https://github.com/"> Github </a>, do sistema de versionamento <a href="https://git-scm.com/downloads"> Git </a> e um editor de código, nesse caso foi utilizado o <a href="https://code.visualstudio.com/download"> VSCode </a>.

- Git: <a href="https://git-scm.com/downloads"> https://git-scm.com/downloads </a>
- Github: <a href="https://github.com/"> https://github.com </a>
- VSCode: <a href="https://code.visualstudio.com/download"> https://code.visualstudio.com/download </a>

## Tecnologias utilizadas

Para construção do projeto foram utilizadas as seguintes tecnologias:

- <a href="https://nodejs.org/en/download/"> NodeJS </a>
- <a href=" https://mochajs.org/"> Mocha </a>
- <a href="https://www.chaijs.com/"> Chai </a>

<img src="https://i.imgur.com/tn3UfOG.jpg" title="source: imgur.com" />

## Objetivo

Utilizando as tecnologias mocha e chai, foi desenvolvido uma calculadora com base no Desenvolvimento Orientado por Testes (TDD)

## Conceitos 

### TDD

O TDD ou Desenvolvimento Orientador por Testes se baseia em pequenos ciclos de repetições, onde para cada funcionalidade do sistema um teste é criado antes. O ciclo de desenvolvimento do TDD se baseia em:
- Escrever um teste que inicalmente não passa
- Adicionar uma nova funcionalidade ao sistema
- Fazer o teste passar
- Refatorar o código da nova funcionalidade 
- Escrever o próximo teste

### Mocha e Chai
Mocha é um Framework JavaScript que permite realizar  suites de teste de forma rápida e fácil. 

Chai é uma biblioteca baseada em BDD/TDD que pode ser combinada com qualquer Framework de testes Java.

## Teste Calculadora 
</br>

### Instalando Mocha e Chai
</br>

- Crie uma pasta vazia onde desejar e dentro da pasta, com o botão direito do mouse, inicie o terminal de comando Git Bash
- No terminal digite `npm init -y` para que seja inicializado o arquivo `package.json`. Feito isso, abra-o no VSCode colocando no terminal o comando `code .`
- Aberto o arquivo, você irá notar uma série de comandos. Abaixo da linha onde está escrito `main` adicione o `"type":'module'`, com isso o projeto poderá ser executado com comandos do NodeJS
- Na parte superior do VSCode você irá encontrar o `Terminal`, clique nele e abra um `Novo terminal`. Note que apareceu uma telinha abaixo da janela do package.json.
- Nessa tela digite `npm i -D mocha chai`, esse comando irá instalar todas as bibliotecas e comandos do mocha e chai
- Voltando para janela do packege, você encontrará o `test`, substitua a instrução que está após o test por `"mocha"` e salve
</br>

### Inicializando o teste
</br>

- Crie uma pasta com nome `test` e nela crie o arquivo `calculadora.spec.js`, nele iremos colocar todos os nossos testes
- Crie também uma pasta `src` e nela crie o arquivo `Calculadora.js`, onde será feito todo nosso código da calculadora.
- No arquivo `Calculadora.js` digite a função da calculadora que você deseja testar, como por exemplo:

        export default class Calculadora {

        static soma(a, b){
        return a + b  
        }
        }

- E dentro do arquivo `calculadora.spec.js` elabore o teste que deseja ser feito, por exemplo:

        import assert from 'assert'
        import chai, { expect} from 'chai'
        import Calculadora from '../src/Calculadora.js'

        describe('Testes de soma', () => {
            it('Deve somar 8 e 9 resultando em 17', () => {
            let resultado = Calculadora.soma(8, 9)
            expect(resultado).to.be.eq(17)
            resultado.should.be.a('number')   })
            })

- Para verificar o resultado do teste, abra o terminal e digite `npm test`, aguarde alguns segundos e ele irá retornar se seu teste passou ou não. Caso o teste não passe, ele dará algumas dicas de onde se econtra o erro.


### Resultado dos testes

<a href="https://imgur.com/Tvxu9E9"><img src="https://i.imgur.com/Tvxu9E9.jpg" title="source: imgur.com" /></a>


## Referências

A elaboração desse repositório não seria possível sem o auxílio de:

Rafaella Ballerini com seus vídeos
- <a href="https://youtu.be/DqTITcMq68k">O que é git e github</a>
- <a href="https://youtu.be/UBAX-13g8OM">Como usar git e github na prática!</a>
  
Jhonatan com os vídeos
- <a href="https://www.youtube.com/watch?v=kB5e-gTAl_s">Curso de git e github</a>
- <a href="https://youtu.be/i6Oi-YtXnAU">JavaScript em 4h</a> e 35min! (Incrivelmente bom! Mas não se iluda com as 4h.. elas podem virar 8h muito fácil)

Os sites com conceito de mocha, chai e TDD
- <a href= https://medium.com/@rafaelvicio/testando-api-rest-com-mocha-e-chai-bf3764ac2797>Mocha e Chai</a>
- <a href= https://www.devmedia.com.br/test-driven-development-tdd-simples-e-pratico/18533 >TDD</a>

## Desenvolvido por 
<div align = 'center'>
</br>
BEATRIZ ALVES
</br>
<img src="https://i.imgur.com/Bcte2Bb.jpg" title="source: imgur.com" height = "150" />

</div>
