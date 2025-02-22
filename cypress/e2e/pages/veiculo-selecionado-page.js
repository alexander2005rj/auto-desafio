/// <reference types="cypress" />

import headerPage from "./header-page"

class VeiculoSelecionadoPage {
    // Mapeamento de elementos da página
    elements = {
        breadcrumbModelo: 'ol > li.breadcrumb__item.active',
        headerModelo: 'div > .showcase-new-cars__info-box-title',
        btnEuQuero: '[type=button][data-product="Uno 2021"]',
        titleForm: '[class="conversion-form"] [class="form__header-title"]',
        paragraphForm: '[class="conversion-form__subtitle"]',
        inputNome: 'input[name="name"]',
        inputEmail: 'input[name="email"]',
        inputPhone: 'input[type="phone"]',
        inputCPF: 'input[name="cpf"]',
        btnEnviar: 'button[type="submit"]',
        toastMensagem: '[class="form-message-overlay__top-message"]',
        divErrorFiels: '[class="form__text-field"]'
    }

    // Mapeamento de rótulos da página
    labels = {
        titlePage: ' - é na Layout testes - Showroom Fiat 2.0 - Dois',
        textBreadcrumbModelo: ' Uno 2021 ',
        titleLead: 'Estou Interessado',
        textParagraphForm: 'Preencha o formulário abaixo para receber o contato de um de nossos especialistas:',
        textSuccessMessage: 'Solicitação realizada com sucesso!',
        textErrorFields: 'Por favor, preencha esse campo'
    }

    // Ações da página
    checkNovosVeiculosPageElements(formatModelo) {
        // Rotas
        cy.intercept('POST', `https://bam.nr-data.net/1/**&ref=https://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois/novos/${formatModelo}&**`).as(`postBamNovos${formatModelo}`)

        cy.url().should('include', `/${formatModelo}`)
        cy.title(this.labels.titlePage)
        headerPage.checkHeaderPageElements()

        cy.get(this.elements.breadcrumbModelo).contains(this.labels.textBreadcrumbModelo).should('be.visible')
        cy.get(this.elements.btnEuQuero).scrollIntoView().should('be.visible')

        // Esperas das rotas
        cy.wait(`@postBamNovos${formatModelo}`).its('response.statusCode').should('eq', 200)
    }

    createLead(){
        cy.get(this.elements.btnEnviar).should('be.visible').click()
        cy.get(this.elements.toastMensagem).contains(this.labels.textSuccessMessage).should('be.visible')
    }

    hasMissingFields() {
        cy.get(this.elements.divErrorFiels).contains(this.labels.textErrorFields).should('be.visible')
    }

    fillLead(dataObj, isValid) {
        cy.get(this.elements.btnEuQuero).scrollIntoView().click()

        cy.get(this.elements.titleForm).contains(this.labels.titleLead).should('be.visible')
        cy.get(this.elements.paragraphForm).contains(this.labels.textParagraphForm).should('be.visible')

        cy.get(this.elements.inputNome).should('be.visible').type(dataObj.name)
        cy.get(this.elements.inputEmail).should('be.visible').type(dataObj.email)
        cy.get(this.elements.inputPhone).should('be.visible').type(dataObj.telephone)
        cy.get(this.elements.inputCPF).should('be.visible').type(dataObj.cpf)

        if (isValid)
            this.createLead()
        else
            this.hasMissingFields()
    }

    
}

export default new VeiculoSelecionadoPage()