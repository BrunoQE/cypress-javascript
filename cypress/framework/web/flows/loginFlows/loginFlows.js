import LoginPage from "../../pages/swagLabs/login/page/loginPage"
import Header from "../../../components/header"

const loginPage = new LoginPage
const header = new Header

class loginFlows {

    loginWithoutCredentials() {
        loginPage.visitLoginPage()
    }


    loginWithInvalidCredentials() {
        loginPage.visitLoginPage()
        loginPage.fillUsername(Cypress.env("portal_user"))
        loginPage.fillPassword("4sd54s")
    }

    loginWithValidCredentials() {
        loginPage.visitLoginPage()
        loginPage.fillUsername(Cypress.env("portal_user"))
        loginPage.fillPassword(Cypress.env("portal_password"))
        cy.screenshot("credenciais-validas")
    }


    submitLogin() {
        loginPage.submitLogin()
    }

    validateRequiredFieldsErrorMessage() {
        loginPage.getRequiredFieldsErrorMessage().each(ele => {
            cy.wrap(ele).should('have.text', 'Required')
        })
        cy.screenshot("campos-requeridos")
    }

    validErrorMessage(msg) {
        loginPage.getErrorMessage().then(mensage => {
            expect(mensage).to.be.equal(msg)
        })
        cy.screenshot("credenciais-invalidos")
    }

    logout() {
        header.logout()
        cy.url().should('eq', Cypress.env("portal_url"))
        cy.screenshot("logout")
    }



}

export default loginFlows