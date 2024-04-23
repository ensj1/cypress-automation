export default class ActionsPage {

    visit() {
        cy.visit('/commands/actions');
        return this
    }

    getEmailField() {
        return cy.get('#email1');
    }

    getDescriptionField() {
        return cy.get('#description');
    }

    getFirstCheckbox() {
        return cy.get('.action-checkboxes [type="checkbox"]').eq(1)
    }

    getActionCanvas() {
        return cy.get('#action-canvas')
    }

    fillEmail(value) {
        const field = this.getEmailField();
        field.clear();
        field.type(value, { sensetive: true });

        return this;
    }
}