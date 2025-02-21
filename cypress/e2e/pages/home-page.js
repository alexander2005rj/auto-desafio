/// <reference types="cypress" />

class HomePage {
    // Mapeamento de elementos da página
    elements = {
        suffixUrlHome: '/ddm-fiat-v2-dois/',
        imgFiatLogo: '.header__brand-logo >> .img-fluid',
        imgDealerLogo: '.header__dealer-logo-img',
        selectLocal: '.select__button',
        btnWhatsAppHeader: '.header__whatsapps > .button--whatsapp',
        btnTelefoneHeader: '.header__phones > .button--primary',
        linkOfertas: ':nth-child(1) > .nav-link',
        linkNovos: ':nth-child(1) > .nav-link',
        headerConfiraNovasOfertas: '.section-site__header-title',
        carouselOfertas: '#splide01',
        paragraphNovosModelosFiat: '.new-vehicles-lazy__subtitle',
        carouselNovosModelosFiat: '#splide02',
        btnVerTodosModelos: '.vehicles-new__ctas.text-center > .button--carousel-vehicles-new-main',
        btnNegocieWhatsApp: '.section-ctas__whatsapp-item > a',
        btnSimuleFinanciamento: '.vehicles-new__ctas.text-center > .button--financing-simulator',
        banneFinanciamento: '.page__container > .financing-simulator-section',
        btnSimularFinanciamento: '.financing-simulator-section__left-content > .button--skewed',
        headerOpcoesShowroom: '',
        linkVendasDiretas: '',
        linkConsorcio: '',
        linkServicos: '',
        linkPecas: '',
        linkAcessorios: '',
    }

    // Mapeamento de rótulos da página
    labels = {
        titlePage: 'Fiat é na Layout testes - Showroom Fiat 2.0 - Dois',
        titleImgFiatLogo: 'Colored Fiat Logo',
        titleImgDealerLogo: 'Layout testes - Showroom Fiat 2.0 - Dois',
        textSelectLocal: ' Fiat - Feira Motors - BA ',
        textHeaderConfiraNovasOfertas: ' Confira nossas ofertas '
    }

    // Ações da página
    visitAndCheckHomePage() {
        cy.visit(this.elements.suffixUrlHome);
        cy.url().should('eq', `${Cypress.config().baseUrl}${this.elements.suffixUrlHome}`)
        cy.title(this.labels.titlePage)
        cy.get(this.elements.imgFiatLogo).should('be.visible').and('have.attr', 'title').and('include', this.labels.titleImgFiatLogo)
        cy.get(this.elements.imgDealerLogo).should('be.visible').and('have.attr', 'title').and('include', this.labels.titleImgDealerLogo)
        cy.get(this.elements.selectLocal).find('span').invoke('text').then((nomeLocal) => {
            expect(nomeLocal.trim()).to.equal(this.labels.textSelectLocal.trim());
        });
        cy.get(this.elements.headerConfiraNovasOfertas).contains(this.labels.textHeaderConfiraNovasOfertas.trim())
        cy.get(this.elements.carouselOfertas).should('be.visible')
        cy.get(this.elements.paragraphNovosModelosFiat).scrollIntoView().should('be.visible').and('contain', 'Conheça todos os modelos fiat')
        cy.get(this.elements.carouselNovosModelosFiat).scrollIntoView().should('be.visible')
        cy.get(this.elements.btnVerTodosModelos).scrollIntoView().should('be.visible')
        cy.get(this.elements.btnNegocieWhatsApp).scrollIntoView().should('be.visible')
        cy.get(this.elements.btnSimuleFinanciamento).scrollIntoView().should('be.visible')
        
        
        // TODO - Interceptar rotas
        cy.wait(10000)
    }


    clickOfertas() {

    }

    clickNovos() {

    }
    
    
}

export default new HomePage()