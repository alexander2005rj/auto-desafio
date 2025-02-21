import homePage from "../e2e/pages/home-page";

Cypress.Commands.add('goToHomePage', () => {
    homePage.visitAndCheckHomePage();
})