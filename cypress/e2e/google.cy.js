/// <reference types="cypress" />
require('@cypress/xpath');

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

    it('Search cheese!', () => {
        let cheese = 'cheese!'
        cy.xpath("//div[text() = 'Zaakceptuj wszystko']/parent::button").click();
        cy.get('textarea[name="q"]').type(`${cheese}{enter}`)
        cy.wait(2000).title().should('include', cheese);
    })
})