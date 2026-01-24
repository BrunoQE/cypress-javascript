/// <reference types="cypress"/>
require("@cypress/xpath")

class painelPage {
    elements = {
        btnPim: () => cy.xpath("//span[text() = 'PIM']/..")
    }

    optionPim() {
        this.elements
            .btnPim().
            should('be.visible').
            click()
    }
}

export default painelPage