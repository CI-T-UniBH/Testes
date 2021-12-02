# Teste de Automação para QA - CI&T

## Objetivo

Alcançar e validar as funcionalidades pré-definidas do site [OpenTDB](https://opentdb.com/).

## Cenários de Testes

## 1° Caso 

### Precisamos iniciar uma busca no Banco de Questões e essa busca por questão seja inexistente e no final mostrará uma mensagem.

#### Temos o seguinte cenário, escrito em Gherkin, que devemos automatizar: 

- **Funcionalidade**: Busca no Banco de Questões
- **Cenário**: Busca por questão inexistente
- **Dado** que navego para a página de busca do banco de questões
- **E** digito 'Science: Computers' no campo de busca
- **Quando** clico no botão de buscar
- **Então** visualizo uma mensagem de erro com o texto 'No questions found.'

## 2° Caso

### Agora, estamos com a seguinte informação de uma novo cenário que temos que testar para o usuário final 

#### Precisamos fazer uma busca na categoria por Science: Computers e verificar se a listagem de questões está com 25 itens e se o controle de paginação irá aparecer.

- **Funcionalidade** :  verificar se a listagem de questões se o controle de paginação irá aparecer.
- **Cenário**: fazer uma busca
- **Dado** que digito Science: Computers 
- **E** clico em categoria 
- **Quando** aperto para buscar 
- **Então** aparece a mensagem No questions found.

## 3° Caso 

### Vamos criar um novo cenário que não foi descrito ainda, criando esse cenário do zero 

#### Um novo usuário quer se cadastrar no site, mais não possuí um cadastro e tenta acessar mesmo assim 

- **Funcionalidade**: login 
- **Cenário**: login invalido 
- **Dado** que o usuário clique em login
- **E** preenche nome e senha 
- **Quando** clico em sign in 
- **Então** aparecera ERROR! Logging In Failed.

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

A imagem escolhida do Docker foi a oficial do Selenium, com o driver do Chrome.

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
