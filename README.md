# Teste de Automação para QA - CI&T

## Objetivo

Alcançar e validar as funcionalidades pré-definidas do site [OpenTDB](https://opentdb.com/).

## Cenários de Testes



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