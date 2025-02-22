/// <reference types="cypress" />

import headerPage from "./header-page";

class NovosVeiculosPage {
  // Mapeamento de elementos da página
  elements = {
    suffixUrlHome: "/novos",
    breadcrumbNovo: "li.breadcrumb-item.active",
    linkVeiculo: '[class="new-vehicle-card__title"]',
    titleBannerSection: "div > .banners-section__title",
  };

  // Mapeamento de rótulos da página
  labels = {
    titlePage:
      "Veículos Novos Fiat é na Layout testes - Showroom Fiat 2.0 - Dois",
    textBreadcrumb: " Novos ",
    textTitleBannerSection:
      " Seu fiat 0km está na “Layout testes - Showroom Fiat 2.0 - Dois” ",
  };

  // Ações da página
  checkNovosVeiculosPageElements() {
    // Rotas
    cy.intercept(
      "POST",
      "https://bam.nr-data.net/1/**&ref=https://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois/novos&**",
    ).as("postBamNovos");

    cy.url().should("include", `${this.elements.suffixUrlHome}`);
    cy.title(this.labels.titlePage);
    headerPage.checkHeaderPageElements();

    cy.get(this.elements.breadcrumbNovo)
      .contains(this.labels.textBreadcrumb)
      .should("be.visible");
    cy.get(this.elements.titleBannerSection)
      .contains(this.labels.textTitleBannerSection)
      .should("be.visible");

    // Esperas das rotas
    cy.wait("@postBamNovos").then((xhr) => {
      expect(xhr.response.statusCode).to.be.eq(200);
    });
  }

  clickVeiculoDesejado(modelo) {
    cy.contains(this.elements.linkVeiculo, modelo).closest("a").click();
  }
}

export default new NovosVeiculosPage();
