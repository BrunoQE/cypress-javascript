import HomePage from "../../pages/swagLabs/home/page/homePage"

const homePage = new HomePage

class homeFlows {

    validateDashboardIsVisible() {
        homePage.validarTextoDashBoardVisivel()
        cy.screenshot("tela-dashBoard")
    }

}

export default homeFlows