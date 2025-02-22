/// <reference types="cypress" />

let faker = require("faker-br");

context("Actions", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });

  it("Acessar home para selecionar opcao de novos veiculos", () => {
    cy.goToNewVehicles();
  });

  it("Selecionar um veiculo dentro da listagem de veículos novos", () => {
    cy.goToDesiredVehicle("Uno 2021");
  });

  it("Preencher o formulário - lead - do veiculo desejado", () => {
    // Criando contato (telefone) válido
    const formatTelephone = `${faker.random.number({ min: 11, max: 91 })}${faker.random.number({ min: 911111111, max: 999999999 })}`;

    // Criando objeto para lead
    let obj = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      telephone: formatTelephone,
      cpf: faker.br.cpf(),
    };

    console.log(JSON.stringify(obj));

    cy.createLead("Uno 2021", obj, true);
  });

  it("Validar campos obrigatórios para envio de fomulario - lead - do veiculo desejado", () => {
    // Criando objeto para lead
    const obj = {
      name: " ",
      email: " ",
      telephone: " ",
      cpf: " ",
    };

    cy.createLead("Uno 2021", obj, false);
  });
});
