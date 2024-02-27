// cypress/support/index.ts
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Function setLocalStorage helps to fill in browser local storage.
             * @example cy.setLocalStorage('token', 'abc')
             */
            setLocalStorage()
        }
    }
}