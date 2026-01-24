/// <reference types="cypress"/>
require("@cypress/xpath")

class loginPage {
    elements = {
        inputUser: () => cy.get("[name='username']"),
        inputPassword: () => cy.get("[name='password']"),
        btnLogin: () => cy.get("[type='submit']"),
        mensagemErrRequird: () => cy.get(".oxd-input-group__message"),
        mensgemErrInvalidCredential: () => cy.get("[role='alert'] p")

    }

    visitLoginPage() {
        cy.visit(Cypress.env("portal_url"))
    }

    fillUsername(user) {
        this.elements.
            inputUser().
            should('be.visible').
            type(user, { log: false })
    }

    fillPassword(password) {
        this.elements.
            inputPassword().
            should('be.visible').
            type(password, { log: false })
    }

    submitLogin() {
        this.elements.
            btnLogin().
            should('be.visible').
            click()
    }

    getRequiredFieldsErrorMessage() {
        return this.elements.
            mensagemErrRequird()
    }

    getErrorMessage() {
        return this.elements.
            mensgemErrInvalidCredential().
            invoke('text')
    }

}

export default loginPage