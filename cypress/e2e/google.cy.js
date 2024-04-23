/// <reference types="cypress" />
import { createFakeUser } from '../utils/generator'

describe('Google search should work', () => {
    before(() => {
        const user = createFakeUser()
        cy.task('setupDb', {
            email: user.email,
            password: user.password
        })
    })

    beforeEach(() => {
        cy.visit('https://www.google.com');
    })

    it('sheck search functionality', { defaultCommandTimeout: 6000 }, () => {
        cy.get('button').find('div').contains('Zaakceptuj wszystko').last().parent().click()
        cy.get("[name='q']").type("cheese!{enter}")
        cy.title().should('contain', 'cheese!')
    })

    it('Contains the correct title', () => {
        cy.title().should('include', 'Google')
    })
})