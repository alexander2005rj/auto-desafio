/// <reference types="cypress" />

import homePage from "../pages/home-page";
import novosVeiculosPage from "../pages/novos-veiculos-page";

context('Actions', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })

    it('Acessar home para selecionar opcao de novos veiculos', () => {
        cy.goToHomePage()
        // cy.goToNewVehicles()
    })

    it.skip('Selecionar um veiculo dentro da listagem de veículos novos', () => {
        cy.goToNewVehicles()
        novosVeiculosPage.clickVeiculoDesejado('Uno 2021')
        cy.wait(1000)
        
        // Então sou direcionado a interna do veículo
    })

    it.skip('Preencher o formulário - lead - do veiculo desejado', () => {
        // Interna de novos ==> /uno-2021
        // Breadcrumb da veículo ==> " Uno 2021 "
        // Scroll até o botão Eu quero
        // Preencher formulário
        // Toast de confirmação e botão fechar


        // Dado que estou na interna da pagina do veículo desejado 
        // Quando preencho o formulário 
        // Então o lead é disparado 
    })

    it.skip('Validar campos obrigatórios para envio de fomulario - lead - do veiculo desejado', () => {
        
    })

})