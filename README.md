## Conceitos Utilizados

### Integração Contínua (CI)

Integração Contínua é uma prática de desenvolvimento que permite executar automaticamente tarefas de validação sempre que alterações são enviadas ao repositório.

### GitHub Actions

GitHub Actions é a ferramenta utilizada para automatizar a execução da pipeline.

### Testes Automatizados

Os testes foram implementados utilizando Mocha e são executados automaticamente pela pipeline.

### Artifact

Após a execução dos testes, é gerado um arquivo de relatório que é armazenado na execução da pipeline por meio de artifacts do GitHub Actions.

# Serviço de Pagamento

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
