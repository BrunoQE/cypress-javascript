/// <reference types="cypress"/>
require("@cypress/xpath")

class homePage {

    elements = {
        dashBoard: () => cy.get("span h6")
    }

    pegarLogoHome() {
        return this.elements
            .dashBoard()
    }

    validarTextoDashBoardVisivel() {
        this.pegarLogoHome().
        should('be.visible').
        and('contain.text', 'Dashboard')
    }

}

export default homePage