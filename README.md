# Auto-Desafio

Desafio de automação web e API utilizando Cypress.

Este projeto foi desenvolvido para praticar a automação de testes utilizando a ferramenta [Cypress](https://www.cypress.io/), executando testes tanto de interface web quanto de API (por intermédio de interceptação de rotas).

---

## Índice

- [Instalações Necessárias](#instalações-necessárias)
- [Executando os testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Page Objects](#page-objects)
- [Estratégias utilizadas para trabalhar com CSS Selector](#estratégias-utilizadas-para-trabalhar-com-css-selector)
- [Comandos customizados criados no Cypress](#comandos-customizados-criados-no-cypress)
- [Escrita dos testes](#escrita-dos-testes)
- [Uso de relatórios](#uso-de-relatórios)
- [Arquivo de Configuração](#arquivo-de-configuração)
- [Workflow no GitHub Actions](#workflow-no-github-actions)

---

## Instalações Necessárias

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (versão 20 ou superior) – [Download](https://nodejs.org/)
- **NPM** (geralmente instalado junto com o Node.js)
- Repositório clonado ou baixado na sua máquina


##### Pacotes (NPM) contidos neste projeto:
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [faker-br](https://www.npmjs.com/package/faker-br)
- [prettier](https://www.npmjs.com/package/prettier)

Após clonar o repositório, entre na pasta criada: 

```bash
cd auto-desafio/
```

Agora, instale as dependências executando:

```bash
npm install
```

Isso instalará o [Cypress](https://www.npmjs.com/package/cypress) e outras dependências definidas em `package.json` (e descritas acima - [Pacotes (NPM) contidos neste projeto](#Pacotes-(NPM)-contidos-neste-projeto)).


---

## Executando os testes

O arquivo `package.json` define alguns scripts para facilitar a execução dos testes:

- **Abrir a interface interativa do Cypress:**

  ```bash
  npm run cy:open
  ```

- **Executar os testes no modo headless (via CLI):**

  ```bash
  npm test
  ```

- **Executar checagem de formatação de código (Prettier - via CLI):**

  ```bash
  npm lint:check
  ```


- **Executar os ajustes de formatação de código (Prettier - via CLI):**

  ```bash
  npm lint:fix
  ```


---

## Estrutura do Projeto

A organização do projeto segue uma estrutura padrão para testes com Cypress:

```
auto-desafio/
├── .github/
│   └── workflows/
│       └── main.yml            # Workflow do GitHub Actions para execução dos testes (Chrome e Firefox)
├── cypress/                    
│   ├── e2e/                    
│   |   ├── pages/              # Page Objects usados nos comandos customizados
│   |   ├── tests/              # Caso de teste e seus cenários
│   ├── fixtures/               # Dados de teste (fixtures)
│   ├── reports/                # Local onde os relatórios gerados ficam armazenados
│   |── support/                
│   |   ├── commands.js         # Comandos customizados usados nos testes
│   |   ├── e2e.js              # Configuração de suporte para os testes E2E
├── .editorconfig               # Define regras de formatação e convenções para diversos editores
├── .gitignore                  # Arquivos e pastas ignoradas pelo Git
├── .nvmrc                      # Especifica a versão do Node.js a ser utilizada no projeto.
├── .prettierignore             # Indica quais arquivos e pastas devem ser ignorados pelo Prettier ao formatar o código.
├── cypress.config.js           # Arquivo de configuração do Cypress
├── package-lock.json           # Dependências do projeto
├── package.json                # Scripts e dependências do projeto
└── README.md                   # Documentação do projeto
```


> ***Porque não usar variáveis de ambiente nesse contexto?***

No escopo deste desafio, a utilização de variáveis de ambiente não foi aplicada para:
- **Simplicidade e Reprodutibilidade:** O ambiente de testes é padronizado e utiliza um único baseUrl fixo, garantindo que todos os testes rodem sobre o mesmo contexto.
- **Evitar Complexidade Desnecessária:** Introduzir variáveis de ambiente pode aumentar a complexidade de configuração, especialmente quando o foco é demonstrar a automação de cenários específicos sem depender de configurações externas.

---

## Page Objects

O projeto adota o Page Object Model para:

- Isolar a lógica de interação com os elementos da UI;
- Facilitar a manutenção dos testes;
- Promover a reutilização de código.
- Cada página (por exemplo, home-page, header-page, etc.) encapsula os métodos para navegação e verificação de elementos.

---

## Estratégias utilizadas para trabalhar com CSS Selector

A ideia foi utilizar inúmeras formas de se trabalhar com CSS Selector e demonstrar a flexibilidade que este tipo de *locator* pode trazer em projeto de automação Web.

***Exemplos utilizados no projeto:***

- Elementos localizados por **tag**
- Elementos localizados por **classe**
- Elementos localizados por **ID**
- Elementos localizados por **atributo**
- Elementos localizados por **seletores combinados** - **Classe e tag**
- Elementos localizados por **seletores combinados** - **Hierarquia**
- Elementos localizados por **seletores combinados** - **Pseudo-classes ou pseudo-elementos**

---

## Comandos customizados criados no Cypress

No arquivo `cypress/support/commands.js`, foram criados comandos personalizados para abstrair ações comuns, tais como:
- `goToHomePage`: Visita a página inicial e valida elementos essenciais.
- `goToNewVehicles`: Acessa a página de novos veículos por meio do menu.
- `goToDesiredVehicle`: Seleciona um veículo específico a partir da listagem.
- `createLead`: Realiza o fluxo completo de criação de lead, desde a navegação até o preenchimento dos dados e validação da página.  


---

## Escrita dos testes

Os testes foram escritos seguindo boas práticas:
- **Casos de Testes**: Cada teste cobre um cenário específico, como navegação entre páginas, seleção de veículos e criação de leads.
- **Cenários de Testes**: Os cenários contemplam fluxos positivos e negativos, garantindo a validação tanto dos caminhos esperados quanto dos de erro.

---

## Uso de relatórios

#### Relatório anexado ao repositório
O repositório contém um relatório de execução gerado pelo **cypress-mochawesome-reporter**, que pode ser consultado para análise dos testes executados.


#### Como verificar outros relatórios de execução (GitHub Actions)?
- Acesse a aba **Actions** no repositório do GitHub.
- Selecione o workflow desejado para visualizar logs e relatórios detalhados da execução dos testes.
- Os resultados são disponibilizados diretamente na interface do GitHub. Mais sobre os eventos que disparam as **Actions** serão descritos em [sessões mais abaixo](#workflow-no-github-actions).

---

## Arquivo de Configuração

O arquivo `cypress.config.js` contém as configurações básicas do Cypress para este projeto:

> **Obs:**  *Para execução satisfatória, foi necessário alterar 3 tipos de timeout (**defaultCommandTimeout**, **requestTimeout**, **responseTimeout**)*


```js
const { defineConfig } = require("cypress");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  requestTimeout: 5000,
  responseTimeout: 5000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    videoOnFailOnly: true,
    saveAllAttempts: false,
    overwrite: true,
  },
  e2e: {
    baseUrl: "https://autoforce-academy.pilotodetestes.com.br",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
```

> **Obs:** *Isso deu por conta da integração contínua. A mudança foi de apenas 1 segundo (de 4s para 5s)*

---

## Workflow no GitHub Actions

Para integração contínua, o projeto conta com um workflow principal configurado na pasta `.github/workflows`. O arquivo `main.yml` possui as etapas para:

1. **Checkout do repositório**
2. **Setup do Browser**
3. **Execução dos testes Cypress**
4. **Upload dos artefatos gerados na etapa anterior**

> **Obs:** Além disso, os browsers foram separados em jobs.

##### main.yml:

```yaml
name: Main Workflow - Cypress E2E Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  run-on-chrome:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Test Repository
        uses: actions/checkout@v4

      - name: Setup Chrome
        uses: browser-actions/setup-chrome@v1
        with:
          chrome-version: stable

      - name: Run Chrome Tests
        uses: cypress-io/github-action@v6
        with:
          browser: chrome
          headed: true
          publish-summary: true

      - name: Chrome - Upload Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Chrome - Test Report
          path: cypress/reports
          if-no-files-found: ignore
  
  run-on-firefox:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Test Repository
        uses: actions/checkout@v4

      - name: Setup Firefox
        uses: browser-actions/setup-firefox@v1
        with:
          firefox-version: latest
      
      - name: Run Firefox Tests
        uses: cypress-io/github-action@v6
        with:
          browser: firefox
          headed: true
          publish-summary: true

      - name: Firefox - Upload Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: Firefox - Test Report
          path: cypress/reports
          if-no-files-found: ignore
```

> **Obs:** Usei separadamente dois jobs para demonstrar a diferença no tempo de execução entre os browsers.

#### Verificando os resultados da execução do workflow
- Acesse a aba **Actions** do repositório no GitHub.
- Selecione o workflow `Main Workflow - Cypress E2E Tests` para visualizar o histórico de execuções, logs e relatórios.

> **Obs:** Cada job possui um resumo de teste separado por **browser** (`Chrome` e `Firefox`), assim como os artefatos gerados durante a execução. Ao baixar os arquivos - `Chrome - Test Report`e/ou `Firefox - Test Report` - você pode ter acesso aos relatórios de testes de cada job!

---

*Criado por [Alexander Ribeiro](https://www.linkedin.com/in/ribeiroalexander/)*  
© 2025

---


