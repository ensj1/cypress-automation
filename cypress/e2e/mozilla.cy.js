import MozillaHomePage from "../pages/mozilla.page";

describe('Mozilla WebPage Test', () => {

    const mozillaPage = new MozillaHomePage();

    it('test page with synchronize', () => {
        mozillaPage.visit().getProductHelpLinkClick().typeToTheSupportInput('email')
        cy.wait(2000).then(() => {
            console.log("tes is finished")
            fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
        })
        mozillaPage.getCardProductLink().should('have.length', 12).find('a').first().should('have.attr', 'data-event-label', 'Firefox')
    })

    it('mouse hover should work', () => {
        mozillaPage.navigate('/pl/firefox/').clickOnTheFirstMenuLink()
        mozillaPage.getFirstFirefoxMenuLink().should('be.visible')
    })
})