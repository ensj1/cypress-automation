import ActionsPage from '../pages/actions.page';
import NetworksPage from '../pages/networks.page';

describe('Test the Commands Pages', () => {

    const token = 'abcd123'
    const actionsPage = new ActionsPage();
    const networksPage = new NetworksPage();

    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
            cy.log('data from example is: ', this.data)
        })
    })

    it('use fixture data in network', function () {
        networksPage.visit()
        cy.intercept('GET', '**/comments/*', this.data).as('getComment')
        networksPage.clickOnTheNetworkButton()
        cy.wait('@getComment').then((res) => {
            cy.log('RES: ', res)
        })
    })

    // it('successfully loads', () => {
    //     cy.visit('https://docs.cypress.io/guides/overview/why-cypress') // change URL to match your dev URL
    //     cy.get('a').contains('Key Differences').click()
    //     cy.url().should('contain', 'key-differences')
    //     cy.get('.headerWrapper_tu51 h1').invoke('text').should('equal', 'Key Differences')
    // })

    it('doc actions are clickable', () => {
        cy.visit('https://example.cypress.io')
        cy.get('a').contains('Actions').first().click({ force: true })
    })

    it('user can type to input', () => {
        actionsPage.visit()
        actionsPage.getEmailField().type('Test').should('have.value', 'Test')
    })

    it('user can type description in force', () => {
        let desc = 'Description'
        actionsPage.visit()
        actionsPage.getDescriptionField().first().type(desc).should('have.value', desc).clear().should('have.value', '')
    })

    it('user can check checkboxes', () => {
        actionsPage.visit()
        actionsPage.getFirstCheckbox().check({ force: true }).should((checkbox) => {
            expect(checkbox).be.checked
        })
    })

    it('set storage cookies', () => {
        cy.setLocalStorage('token', token)
        cy.getLocalStorage('token').should((actualToken) => {
            expect(actualToken).eq(token)
        })
    })

    it('user can type to input with hidden info', () => {
        const testEmailText = 'Test'
        actionsPage.visit()
        actionsPage.fillEmail(testEmailText)
        actionsPage.getEmailField().should((emailField) => {
            expect(emailField).have.value(testEmailText)
        })
    })

    it('user can click on the different sections of a canvas', () => {
        actionsPage.visit()
        actionsPage.getActionCanvas().click('top')
        actionsPage.getActionCanvas().click('bottomRight')
        actionsPage.getActionCanvas().click(80, 100)
    })
})