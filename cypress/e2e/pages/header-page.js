/// <reference types="cypress" />

class HeaderPage {
  // Mapeamento de elementos da página
  elements = {
    imgFiatLogo: ".header__brand-logo >> .img-fluid",
    imgDealerLogo: ".header__dealer-logo-img",
    selectLocal: ".select__button",
    btnWhatsAppHeader: ".header__whatsapps > .button--whatsapp",
    btnTelefoneHeader: ".header__phones > .button--primary",
    linkOfertas: ":nth-child(1) > .nav-link",
    linkNovos: ":nth-child(2) > .nav-link",
  };

  labels = {
    titleImgFiatLogo: "Colored Fiat Logo",
    titleImgDealerLogo: "Layout testes - Showroom Fiat 2.0 - Dois",
    textSelectLocal: " Fiat - Feira Motors - BA ",
    ariaLabelWhatsApp: "Abrir whatsapp",
    ariaLableTelefones: "Abrir telefones",
  };

  checkHeaderPageElements() {
    cy.get(this.elements.imgFiatLogo)
      .scrollIntoView()
      .should("be.visible")
      .and("have.attr", "title")
      .and("include", this.labels.titleImgFiatLogo);
    cy.get(this.elements.imgDealerLogo)
      .scrollIntoView()
      .should("be.visible")
      .and("have.attr", "title")
      .and("include", this.labels.titleImgDealerLogo);
    cy.get(this.elements.selectLocal)
      .contains(this.labels.textSelectLocal)
      .should("be.visible");
    cy.get(this.elements.btnWhatsAppHeader)
      .scrollIntoView()
      .should("be.visible")
      .and("have.attr", "aria-label")
      .and("include", this.labels.ariaLabelWhatsApp);
    cy.get(this.elements.btnTelefoneHeader)
      .scrollIntoView()
      .should("be.visible")
      .and("have.attr", "aria-label")
      .and("include", this.labels.ariaLableTelefones);
  }

  clickMenuOfertas() {
    cy.get(this.elements.linkOfertas)
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  clickMenuNovos() {
    cy.get(this.elements.linkNovos)
      .scrollIntoView()
      .should("be.visible")
      .click();
  }
}

export default new HeaderPage();
