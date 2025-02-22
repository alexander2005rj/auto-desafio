/// <reference types="cypress" />

import veiculoSelecionadoPage from "../pages/veiculo-selecionado-page"
let faker = require('faker-br');

context('Actions', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })

    it.skip('Acessar home para selecionar opcao de novos veiculos', () => {
        cy.goToNewVehicles()
    })

    it.skip('Selecionar um veiculo dentro da listagem de veículos novos', () => {
        cy.goToDesiredVehicle('Uno 2021')
    })

    it.skip('Preencher o formulário - lead - do veiculo desejado', () => {
        // Criando objeto para lead
        let obj = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            telephone: faker.phone.phoneNumber(),
            cpf: faker.br.cpf()
        }

        console.log(JSON.stringify(obj))
        
        cy.createLead('Uno 2021', obj, true) 
    })

    it('Validar campos obrigatórios para envio de fomulario - lead - do veiculo desejado', () => {
        // Criando objeto para lead
        const obj = {
            name: ' ',
            email: ' ',
            telephone: ' ',
            cpf: ' '
        }

        cy.createLead('Uno 2021', obj, false) 
    })

})