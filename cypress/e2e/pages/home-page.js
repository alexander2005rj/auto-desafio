/// <reference types="cypress" />

import headerPage from "./header-page";

class HomePage {
  // Mapeamento de elementos da página
  elements = {
    suffixUrlHome: "/ddm-fiat-v2-dois",
    headerConfiraNovasOfertas: ".section-site__header-title",
    btnVerMais: ".section-site__header-title-wrapper > .btn",
    carouselOfertas: "#splide01",
    paragraphTodosModelosFiat: ".new-vehicles-lazy__subtitle",
    carouselNovosModelosFiat: "#splide02",
  };

  // Mapeamento de rótulos da página
  labels = {
    titlePage: "Fiat é na Layout testes - Showroom Fiat 2.0 - Dois",
    textHeaderConfiraNovasOfertas: " Confira nossas ofertas ",
    textBtnVerMais: " Ver mais ",
    textParagraphTodosModelosFiat: "Conheça todos os modelos fiat",
  };

  // Ações da página
  visitHomePage() {
    // Rotas
    cy.intercept(
      "POST",
      "https://fiathuboffers.fcalatam.com.br/offers/search",
    ).as("postOffersSearch");
    cy.intercept(
      "POST",
      "https://bam.nr-data.net/1/**&ref=https://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois**",
    ).as("postBam");

    // FIXME: A rota /offers estava com erro (500) durante o desafio
    // cy.intercept('GET', 'https://api.pilotodetestes.com.br/api/v2/3047/offers?active=true&expiration_gte=2025-02-21&per_page=100').as('getOffers')

    cy.visit(this.elements.suffixUrlHome);

    // Esperas das rotas
    cy.wait("@postOffersSearch").its("response.statusCode").should("eq", 200);
    cy.wait("@postBam").its("response.statusCode").should("eq", 200);

    // FIXME: A rota /offers estava com erro (500) durante o desafio
    // cy.wait('@getOffers').its('response.statusCode').should('eq', 200)
    return this;
  }

  checkHomePageElements() {
    cy.url().should(
      "eq",
      `${Cypress.config().baseUrl}${this.elements.suffixUrlHome}`,
    );
    cy.title(this.labels.titlePage);
    headerPage.checkHeaderPageElements();
    cy.get(this.elements.headerConfiraNovasOfertas).contains(
      this.labels.textHeaderConfiraNovasOfertas.trim(),
    );
    cy.get(this.elements.btnVerMais).contains(
      this.labels.textBtnVerMais.trim(),
    );

    // FIXME: A rota /offers estava com erro (500) durante o desafio
    // cy.get(this.elements.carouselOfertas).should('be.visible')

    cy.get(this.elements.paragraphTodosModelosFiat)
      .scrollIntoView()
      .should("be.visible")
      .and("contain", this.labels.textParagraphTodosModelosFiat);

    // FIXME: A rota /offers estava com erro (500) durante o desafio
    // cy.get(this.elements.carouselNovosModelosFiat).scrollIntoView().should('be.visible')
  }
}

export default new HomePage();
