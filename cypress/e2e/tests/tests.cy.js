/// <reference types="cypress" />

import homePage from "../pages/home-page";

context('Actions', () => {
    beforeEach(() => {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    })

    it('Acessar home para selecionar opcao de novos veiculos', () => {
        // Dado que estou na home
        cy.goToHomePage()
        
        // Quando clico na sessão de “novos” no header

        // Então sou direcionado para listagem de veículos novos 

    })

    it.skip('Selecionar um veiculo dentro da listagem de veículos novos', () => {
        // Listagem URL ==> /novos
        // Breadcrumb da listagem ==>  " Novos "
        
        // Dois itens com o mesmo a href e h3
        // Dado que estou na listagem de veículos novos 
        // Quando clico em algum veículo listado 
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