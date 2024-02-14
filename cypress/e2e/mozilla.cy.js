describe('Mozilla Test', () => {
    // it('Test page with synchronize', () => {
    //     cy.visit('https://mozilla.com')
    //     cy.get('[data-link-text="Product Help"]').click()
    //     cy.get('#support-search-masthead').find('input').type('email')
    //     cy.wait(2000).then(() => {
    //         console.log("tes is finished")
    //         fetch('https://api.spacexdata.com/v3/missions')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data)
    //             })
    //     })
    //     cy.get('#main-content').find('.card--product').should('have.length', 12).find('a').first().should('have.attr', 'data-event-label', 'Firefox')
    // })

    it('mouse hover should work', () => {
        cy.visit('https://www.mozilla.org/pl/firefox/')
        cy.get('[aria-controls="c-menu-panel-firefox"]').first().trigger('mouseover')
        cy.get('[data-link-text="Firefox Desktop Browser"]').first().should('be.visible')
    })
})