class NetworksPage {
    visit() {
        cy.visit('/commands/network-requests')
    }

    getNetworkButton() {
        return cy.get('.network-btn')
    }

    clickOnTheNetworkButton() {
        const networkBtn = this.getNetworkButton()
        networkBtn.click()
    }
}

export default NetworksPage;