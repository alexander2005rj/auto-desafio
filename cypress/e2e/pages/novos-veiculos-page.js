/// <reference types="cypress" />

import homePage from "./home-page"
import headerPage from "./header-page"

class NovosVeiculosPage {
    // Mapeamento de elementos da página
    elements = {
        suffixUrlHome: '/novos',
        breadcrumbNovo: 'li.breadcrumb-item.active',
        linkVeiculo: 'h3.new-vehicle-card__title',
        titleBannerSection: 'div > .banners-section__title',
        inputBusca: 'div > .search-term__input'
    }

    // Mapeamento de rótulos da página
    labels = {
        titlePage: 'Veículos Novos Fiat é na Layout testes - Showroom Fiat 2.0 - Dois',
        textBreadcrumb: ' Novos ',  
        textTitleBannerSection: ' Seu fiat 0km está na “Layout testes - Showroom Fiat 2.0 - Dois” ',
        placeholderBusca: 'O que está buscando?',
    }

    // Ações da página
    visitNovosVeiculosPage() {
        cy.visit(`${Cypress.config().baseUrl}${homePage.elements.suffixUrlHome}${this.elements.suffixUrlHome}`)
    }

    checkNovosVeiculosPageElements() {
        cy.url().should('eq', `${Cypress.config().baseUrl}${homePage.elements.suffixUrlHome}${this.elements.suffixUrlHome}`)
        cy.title(this.labels.titlePage)
        headerPage.checkHeaderPageElements();
        cy.get(this.elements.breadcrumbNovo).scrollIntoView().should('be.visible').invoke('text').then((nomeEtapa) => {
            expect(nomeEtapa.trim()).to.equal(this.labels.textBreadcrumb.trim())
        })
        cy.get(this.elements.titleBannerSection).scrollIntoView().should('be.visible').invoke('text').then((nomeBanner) => {
            expect(nomeBanner.trim()).to.equal(this.labels.textTitleBannerSection.trim())
        })
        cy.get(this.elements.inputBusca).scrollIntoView().should('be.visible').invoke('attr', 'placeholder').then((textoPlaceHolder) => {
            expect(textoPlaceHolder.trim()).to.equal(this.labels.placeholderBusca.trim())
        })
        // TODO: Filtrar
        // TODO: Ordenar
        // TODO: Carousel
        // TODO: Rotas
    }

    clickVeiculoDesejado(nomeVeiculo) {
        cy.contains(this.elements.linkVeiculo, nomeVeiculo).closest('a').click()
    }
}

export default new NovosVeiculosPage()