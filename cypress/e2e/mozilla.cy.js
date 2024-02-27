/// <reference types="cypress" />
import MozillaHomePage from "../pages/mozilla.page";

describe('Mozilla WebPage Test', () => {

    const mozillaPage = new MozillaHomePage();

    it('test page with synchronize', () => {
        mozillaPage.visit().getProductHelpLinkClick().typeToTheSupportInput('email')
        cy.wait(2000).then(() => {
            fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
        })
        mozillaPage.getCardProductLink().should('have.length', 12).find('a').first().should('have.attr', 'data-event-label', 'Firefox')
    })

    it('mouse hover should work', () => {
        /* 
        *  There are possibility to do it by cypress methods like
        *  .invoke('addClass', 'mzp-is-animated mzp-is-selected') or
        *  directly to click on the web element .clickOnTheFirstMenuLink()
        *  But it is better to simulate it with external library 
        */
        mozillaPage.navigate('/pl/firefox/').getFirstMenuLink().parent().realHover()
        mozillaPage.getFirstFirefoxMenuLink().should('be.visible')
    })
})