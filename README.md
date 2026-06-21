### Serviço de Pagamento
Projeto em Node.js com testes automatizados.

## Testes
Há 3 casos de teste em test/servicoPagamento.test.js:

(1) Pagamento com categoria cara
(2) Pagamento com categoria padrao
(3) Consulta do último pagamento

## Como rodar localmente

npm ci
npm test
npm run test:report

## Relatórios gerados:

- reports/mochawesome-report.html
- reports/mochawesome-report.json

## CI (Continuous Integration)

A pipeline de Integração Contínua é definida no arquivo `.github/workflows/ci.yml` e é executada pelo GitHub Actions.

O workflow é configurado para ser acionado automaticamente em eventos de `push` para a branch principal do projeto, além de permitir execução manual por meio do evento `workflow_dispatch` e execução periódica utilizando `schedule`.

Durante a execução, a pipeline realiza as seguintes etapas:

1. Checkout do código-fonte do repositório.
2. Configuração do ambiente de execução com Node.js.
3. Instalação determinística das dependências utilizando o comando `npm ci`.
4. Execução dos testes automatizados por meio do comando `npm run test:report`.
5. Geração dos relatórios de testes na pasta `reports/`.
6. Validação da existência dos artefatos produzidos.
7. Publicação dos relatórios como artifacts do GitHub Actions, permitindo armazenamento, rastreabilidade e download dos resultados das execuções.

Dessa forma, a pipeline implementa os princípios de Integração Contínua (CI), garantindo a validação automática do código, a execução recorrente dos testes e a disponibilização dos relatórios produzidos em cada execução.

## Conteúdo do repositório
- src/servicoDePagamento.js - implementação do serviço
- test/servicoDePagamento.test.js - testes automatizados
- .github/workflows/ci.yml - pipeline de CI
- reports/ - relatórios de testes gerados localmente ou em CI

## Conceitos Utilizados

### Integração Contínua (CI)

Integração Contínua é uma prática de desenvolvimento que permite executar automaticamente tarefas de validação sempre que alterações são enviadas ao repositório.

### GitHub Actions

GitHub Actions é a ferramenta utilizada para automatizar a execução da pipeline.

### Testes Automatizados

Os testes foram implementados utilizando Mocha e são executados automaticamente pela pipeline.

### Artifact

Após a execução dos testes, é gerado um arquivo de relatório que é armazenado na execução da pipeline por meio de artifacts do GitHub Actions.
NPM TEST
## Objetivo

Projeto desenvolvido para demonstrar a utilização de GitHub Actions em uma pipeline de Integração Contínua.

## Tecnologias

- JavaScript
- Node.js
- Mocha
- Node Assert
- GitHub Actions

## Pipeline

A pipeline realiza:

- Execução automática por Push
- Execução Manual
- Execução Agendada (Schedule)
- Execução dos testes automatizados
- Geração do relatório
- Publicação do relatório como Artifact

## Estrutura

src/

test/

.github/workflows/

README.md

## Executando localmente

npm install

npm test

## Fluxo da Pipeline

1. Checkout do projeto
2. Instalação do Node
3. Instalação das dependências
4. Execução dos testes
5. Geração do relatório
6. Publicação do relatório

Teste execução por push
Commit xxxxx pushed by Hesdrasgtr
