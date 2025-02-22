import headerPage from "../e2e/pages/header-page";
import homePage from "../e2e/pages/home-page";
import novosVeiculosPage from "../e2e/pages/novos-veiculos-page";

Cypress.Commands.add('goToHomePage', () => {
    homePage.visitHomePage()
    //homePage.checkHomePageElements()
})

Cypress.Commands.add('goToNewVehicles', () => {
    cy.goToHomePage()
    headerPage.clickMenuNovos()
    novosVeiculosPage.checkNovosVeiculosPageElements()
})

