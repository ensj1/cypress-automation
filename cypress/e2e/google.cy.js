/// <reference types="cypress" />

describe('Google search should work', () => {
    beforeEach(() => {
        cy.visit('https://google.com');
    })

    it('sheck search functionality', () => {
        cy.get('button').find('div').contains('Zaakceptuj wszystko').last().parent().click()
        cy.get("[name='q']").type("cheese!{enter}")
        cy.title().should('contain', 'cheese!')
    })

    it('Contains the correct title', () => {
        cy.title().should('include', 'Google')
    })
})