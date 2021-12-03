# Teste de Automação para QA - CI&T

## Objetivo

Este projeto é um exemplo de automações para testes, que tem como objetivo alcançar e validar algumas funcionalidades pré-definidas do site [OpenTDB](https://opentdb.com/).

## Cenários de Testes

### 1° Caso 

#### Temos o seguinte cenário, escrito em Gherkin, que devemos automatizar: 

Precisamos iniciar uma busca no Banco de Questões, devemos validar se essa busca por questões traz resultado inexistente e se no final mostrará uma mensagem de erro.

- **Funcionalidade**: Busca no Banco de Questões;
- **Cenário**: Busca por questão inexistente;
- **Dado** que navego para a página de busca do banco de questões;
- **E** digito 'Science: Computers' no campo de busca;
- **Quando** clico no botão de buscar;
- **Então** visualizo uma mensagem de erro com o texto 'No questions found.'

### 2° Caso

#### Agora, estamos com a seguinte informação de um novo cenário que temos que testar para o usuário final:

Precisamos fazer uma busca na categoria por Science: Computers e verificar se a listagem de questões está com 25 itens e se o controle de paginação irá aparecer.

- **Funcionalidade** :  verificar a listagem de questões se o controle de paginação irá aparecer;
- **Cenário**: fazer uma busca por Science: Computers;
- **Dado** que vou em comportamento     ;                                 
- **E** mudo para a categoria Science: Computers ;
- **Quando** aperto para buscar ;
- **Então** vizualizo o controle de paginação e os 25 itens .

### 3° Caso 

#### Vamos criar um novo cenário que não foi descrito ainda, criando esse cenário do zero:

Um novo usuário quer se cadastrar no site, mas não possui um cadastro e tenta acessar mesmo assim.

- **Funcionalidade**: fazer login no sistema;
- **Cenário**: login inválido ;
- **Dado** que o usuário clique em login;
- **E** preenche nome e senha inexistentes;
- **Quando** clico em sign in ;
- **Então** visualizo uma mensagem de erro com o texto 'ERROR! Logging In Failed.'

## Pré-requisitos

É necessário ter instalado em sua máquina (recomendadas versões utilizadas no desenvolvimento): 
- Node.js - `v12.14.0`
- Docker - `v20.10.8 build 3967b7d`

## Instalação

1. Clone este projeto em sua máquina
2. Dentro do diretório deste projeto execute o seguinte comando
```
npm install
```

## Execução

1. Inicie o motor de execução do Docker
2. Em um terminal com integração do Docker execute o seguinte comando
```
docker run -d -p 4444:4444 --shm-size="2g" --name=desafio-cit-unibh-qa selenium/standalone-chrome
```
> Caso seja desejável alterar a porta de execução do contêiner, você também deve alterar a constante `SELENIUM_REMOTE_URL` em `index.ts` para a porta escolhida
3. Com o contêiner Docker sendo executado, execute o seguinte comando dentro do diretório deste projeto
```
npm start
```

## Tecnologias

Pela simplicidade de desenvolvimento, foi escolhido para execução dos testes deste projeto o TypeScript, e para criação do servidor de testes Selenium, o Docker, para mais versatilidade.


## Autores

Edu Pinheiro Caribé - [@caribeedu](https://github.com/caribeedu)

Julio Luiz dos Reis Filho - [@julio-reis-04](https://github.com/julio-reis-04)

Amilton Gonçalves de Jesus - [@amiltonbh](https://github.com/amiltonbh)

Yan Aguiar Marinho Wendling - [@yanwend11](https://github.com/yanwend11)

Guilherme Coelho Costa - [@Guilhermecmd](https://github.com/Guilhermecmd)

Júlio César Jiménez - [@jmnzjulio](https://github.com/jmnzjulio)

Daniel Pereira da Costa Filho - [@daniel-filho-3011](https://github.com/daniel-filho-3011)


## Licença

MIT
