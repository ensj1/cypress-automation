class MozillaHomePage {

    homePage = 'https://mozilla.com'

    visit() {
        cy.visit(this.homePage);
        return this
    }

    navigate(url) {
        cy.visit(this.homePage + url);
        return this
    }

    getProductHelpLinkClick() {
        cy.get('[data-link-text="Product Help"]').click();
        return this
    }

    getCardProductLink() {
        return cy.get('#main-content').find('.card--product');
    }

    clickOnTheCardProductLink() {
        this.getCardProductLink().click()
        return this
    }

    typeToTheSupportInput(text) {
        cy.get('#support-search-masthead').find('input').type(text)
    }

    getFirstMenuLink() {
        return cy.get('[aria-controls="c-menu-panel-firefox"]').first()
    }

    clickOnTheFirstMenuLink() {
        this.getFirstMenuLink().click()//.trigger('mouseover')
    }

    getFirstFirefoxMenuLink() {
        return cy.get('[data-link-text="Firefox Desktop Browser"]').first()
    }

}

export default MozillaHomePage;