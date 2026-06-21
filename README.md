### Serviço de Pagamento
Projeto desenvolvido em Node.js para demonstrar a implementação de uma pipeline de Integração Contínua (CI) utilizando GitHub Actions, com execução automatizada de testes e geração de relatórios

## Objetivo
Implementar uma pipeline de Integração Contínua capaz de:
- Executar automaticamente a cada alteração enviada ao repositório;
- Permitir execução manual;
- Possibilitar execução agendada;
- Executar testes automatizados;
- Gerar relatórios de testes;
- Armazenar os relatórios produzidos como artifacts da pipeline.

## Tecnologias Utilizadas
- JavaScript
- Node.js
- Mocha
- Mochawesome
- Node Assert
- GitHub Actions

## Estrutura do Projeto
src/
test/
.github/workflows/
mochawesome-report/
README.md

## Casos de Teste
Arquivo:

test/ServicoDePagamento.test.js

# Os cenários testados são:
1. Classificação de pagamento como categoria "cara".
2. Classificação de pagamento como categoria "padrão".
3. Consulta do último pagamento realizado.

## Execução Local
Instalação das dependências:

Execução dos testes:
npm test
npm ci
npm run test:report

Execução dos testes com geração dos relatórios:
npm run test:report

## Relatórios gerados:
Após a execução dos testes, são produzidos os seguintes arquivos:

- reports/mochawesome-report.html
- reports/mochawesome-report.json

Esses relatórios podem ser gerados tanto localmente quanto durante a execução da pipeline no GitHub Actions.

## Pipeline de Integração Contínua
A pipeline está definida em:

.github/workflows/ci.yml

# O workflow é acionado pelos seguintes eventos:
- Push para a branch principal;
- Execução manual (workflow_dispatch);
- Execução agendada (schedule).

# Durante sua execução, a pipeline realiza:
1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências utilizando npm ci.
4. Execução dos testes automatizados.
5. Geração dos relatórios HTML e JSON.
6. Armazenamento dos relatórios como artifacts da execução.

## Conceitos Aplicados

### Integração Contínua (CI)
Prática que permite validar automaticamente o código sempre que novas alterações são enviadas ao repositório.

### GitHub Actions
Ferramenta utilizada para automatizar a execução da pipeline de Integração Contínua..

### Testes Automatizados
Os testes foram implementados utilizando o framework Mocha e são executados automaticamente pela pipeline.

### Relatórios de Teste
Os resultados das execuções são registrados em arquivos HTML e JSON gerados pelo Mochawesome.

### Artifact
Os relatórios produzidos são armazenados como artifacts do GitHub Actions, permitindo rastreabilidade, download e consulta posterior dos resultados.






























