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
        btnVerMais: '.section-site__header-title-wrapper > .btn',
        carouselOfertas: '#splide01',
        paragraphTodosModelosFiat: '.new-vehicles-lazy__subtitle',
        carouselNovosModelosFiat: '#splide02',
        btnVerTodosModelos: '.vehicles-new__ctas.text-center > .button--carousel-vehicles-new-main',
        btnNegocieWhatsApp: '.section-ctas__whatsapp-item > a',
        btnSimuleFinanciamento: '.vehicles-new__ctas.text-center > .button--financing-simulator',
        bannerFinanciamento: '.page__container > .financing-simulator-section',
        btnSimularFinanciamento: '.financing-simulator-section__left-content > .button--skewed',
        headerOpcoesShowroom: '.section-site__header > .section-site__header-title',
        bannerVendasDiretas: ':nth-child(1) > .dealer-modules__item-link-wrapper',
        bannerConsorcio: ':nth-child(2) > .dealer-modules__item-link-wrapper',
        bannerServicos: ':nth-child(3) > .dealer-modules__item-link-wrapper',
        bannerPecas: ':nth-child(4) > .dealer-modules__item-link-wrapper',
        bannerAcessorios: ':nth-child(5) > .dealer-modules__item-link-wrapper',
        footerImgDealer: '.footer__brand-logo > img',
        footerImgFiat: '.footer__channel-logo > picture > img',
        footerParagraphUnidade: '.footer__text_unit > .footer__text_unit-title',
        spanEnderecoUnidade: '.footer-units__info > span',
        paragraphCEP: '.footer-units__info > p',
        footerTelefone: ':nth-child(2) > .footer-units__info > ul > li',
        footerCNPJ: '.footer-main-unit__items > :nth-child(1)',
        footerRazaoSocial: '.footer-main-unit__items > :nth-child(2)',
        footerEnderecoMatriz: '.footer-main-unit__items > :nth-child(3)',
        footerImgAutoForce: '.footer__logo-autoforce > a > img',
        footerParagraphCopyright: '.footer__copyright > p',
        fluidBtnWhatsApp: '.floating-whatsapp  button'
    }

    // Mapeamento de rótulos da página
    labels = {
        titlePage: 'Fiat é na Layout testes - Showroom Fiat 2.0 - Dois',
        titleImgFiatLogo: 'Colored Fiat Logo',
        titleImgDealerLogo: 'Layout testes - Showroom Fiat 2.0 - Dois',
        textSelectLocal: ' Fiat - Feira Motors - BA ',
        textHeaderConfiraNovasOfertas: ' Confira nossas ofertas ',
        textBtnVerMais: ' Ver mais ',
        textParagraphTodosModelosFiat: 'Conheça todos os modelos fiat',
        textHeaderOpcoesShowroom: 'Layout testes - Showroom Fiat 2.0 - Dois',
        ariaLabelBannerVendasDiretas: 'Ir para Vendas diretas',
        ariaLabelBannerConsorcio: 'Ir para Consórcio',
        ariaLabelBannerServicos: 'Ir para Serviços',
        ariaLabelBannerPecas: 'Ir para Peças',
        ariaLabelBannerAcessorios: 'Ir para Acessórios',
        textFooterImgDealer: 'Logo Layout testes - Showroom Fiat 2.0 - Dois',
        textFooterImgFiat: 'Colored Fiat Logo',
        textFooterParagraphUnidade: 'Fiat - Feira Motors'
    }

    // Ações da página
    visitHomePage() {
        cy.visit(this.elements.suffixUrlHome)
        cy.url().should('eq', `${Cypress.config().baseUrl}${this.elements.suffixUrlHome}`)
        cy.title(this.labels.titlePage)
    }

    checkHomePageElements() {
        cy.get(this.elements.imgFiatLogo).should('be.visible').and('have.attr', 'title').and('include', this.labels.titleImgFiatLogo)
        cy.get(this.elements.imgDealerLogo).should('be.visible').and('have.attr', 'title').and('include', this.labels.titleImgDealerLogo)
        cy.get(this.elements.selectLocal).find('span').invoke('text').then((nomeLocal) => {
            expect(nomeLocal.trim()).to.equal(this.labels.textSelectLocal.trim())
        })
        cy.get(this.elements.headerConfiraNovasOfertas).contains(this.labels.textHeaderConfiraNovasOfertas.trim())
        cy.get(this.elements.btnVerMais).contains(this.labels.textBtnVerMais.trim())
       
        // FIXME: Rota com erro 500
        // cy.get(this.elements.carouselOfertas).should('be.visible')
        
        cy.get(this.elements.paragraphTodosModelosFiat).scrollIntoView().should('be.visible').and('contain', this.labels.textParagraphTodosModelosFiat)
        // FIXME: Rota com erro 500
        // cy.get(this.elements.carouselNovosModelosFiat).scrollIntoView().should('be.visible')
        
        cy.get(this.elements.btnVerTodosModelos).scrollIntoView().should('be.visible')
        cy.get(this.elements.btnNegocieWhatsApp).scrollIntoView().should('be.visible')
        cy.get(this.elements.btnSimuleFinanciamento).scrollIntoView().should('be.visible')
        cy.get(this.elements.bannerFinanciamento).scrollIntoView().should('be.visible')
        cy.get(this.elements.btnSimularFinanciamento).scrollIntoView().should('be.visible')
        cy.get(this.elements.headerOpcoesShowroom).scrollIntoView().should('be.visible').find('span').invoke('text').then((textoShowroom) => {
            expect(textoShowroom.trim()).to.contains(this.labels.textHeaderOpcoesShowroom)
        })
        cy.get(this.elements.bannerVendasDiretas).scrollIntoView().should('be.visible').invoke('attr', 'aria-label').then((textoBanner) => {
            expect(textoBanner.trim()).to.contains(this.labels.ariaLabelBannerVendasDiretas)
        })
        cy.get(this.elements.bannerConsorcio).scrollIntoView().should('be.visible').invoke('attr', 'aria-label').then((textoBanner) => {
            expect(textoBanner.trim()).to.contains(this.labels.ariaLabelBannerConsorcio)
        })
        cy.get(this.elements.bannerServicos).scrollIntoView().should('be.visible').invoke('attr', 'aria-label').then((textoBanner) => {
            expect(textoBanner.trim()).to.contains(this.labels.ariaLabelBannerServicos)
        })
        cy.get(this.elements.bannerPecas).scrollIntoView().should('be.visible').invoke('attr', 'aria-label').then((textoBanner) => {
            expect(textoBanner.trim()).to.contains(this.labels.ariaLabelBannerPecas)
        })
        cy.get(this.elements.bannerAcessorios).scrollIntoView().should('be.visible').invoke('attr', 'aria-label').then((textoBanner) => {
            expect(textoBanner.trim()).to.contains(this.labels.ariaLabelBannerAcessorios)
        })
        
        
        // TODO: Interceptar rotas
        // Carousel - Confira nossas ofertas
        // Carousel - Todos os modelos Fiat
        // cy.wait(10000)
    }


    clickMenuOfertas() {
        cy.get(this.elements.linkOfertas).scrollIntoView().should('be.visible').click()
    }

    clickMenuNovos() {
        cy.get(this.elements.linkNovos).scrollIntoView().should('be.visible').click()
    }
    
    
}

export default new HomePage()