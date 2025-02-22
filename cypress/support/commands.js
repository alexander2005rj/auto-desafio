import headerPage from "../e2e/pages/header-page";
import homePage from "../e2e/pages/home-page";
import novosVeiculosPage from "../e2e/pages/novos-veiculos-page";
import veiculoSelecionadoPage from "../e2e/pages/veiculo-selecionado-page";

Cypress.Commands.add("goToHomePage", () => {
  homePage.visitHomePage();
  homePage.checkHomePageElements();
});

Cypress.Commands.add("goToNewVehicles", () => {
  cy.goToHomePage();
  headerPage.clickMenuNovos();
  novosVeiculosPage.checkNovosVeiculosPageElements();
});

Cypress.Commands.add("goToDesiredVehicle", (model) => {
  cy.goToNewVehicles();
  novosVeiculosPage.clickVeiculoDesejado(model);
});

Cypress.Commands.add("createLead", (modelVehicle, dataObj, isValid) => {
  cy.goToDesiredVehicle(modelVehicle);
  const formatModelo = modelVehicle.toLowerCase().replace(" ", "-");
  veiculoSelecionadoPage.checkNovosVeiculosPageElements(formatModelo);
  veiculoSelecionadoPage.fillLead(dataObj, isValid);
});
