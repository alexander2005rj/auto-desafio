/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('/ddm-fiat-v2-dois')
    })

    it('Acessando home page', () => {
        // Home URL ==> /ddm-fiat-v2-dois
        // Dado que estou na home
        // Quando clico na sessão de “novos” no header
        // Então sou direcionado para listagem de veículos novos 
        
    })

    it('Acessando a listagem de novos', () => {
        // Listagem URL ==> /novos
        // Dado que estou na listagem de veículos novos 
        // Quando clico em algum veículo listado 
        // Então sou direcionado a interna do veículo
    })

    it('Acessando página interna do veiculo desejado', () => {
        // Interna de novos ==> /uno-2021
        // Dado que estou na interna da pagina do veículo desejado 
        // Quando preencho o formulário 
        // Então o lead é disparado 
    })

})