import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginFlows from "../../../framework/web/flows/loginFlows/loginFlows";
import HomeFlows from "../../../framework/web/flows/homeFlows/homeFlows";

const loginFlows = new LoginFlows
const homeFlows = new HomeFlows

Given("que eu não informe usuário e senha", () => {
  loginFlows.loginWithoutCredentials()
})

When("clico em login", () => {
  loginFlows.submitLogin()
})

Then("valido mensagem de campo obrigatório", () => {
  loginFlows.validateRequiredFieldsErrorMessage()
})

Given("que eu informo usuário e senha inválidos", () => {
  loginFlows.loginWithInvalidCredentials()
})

Then("valido mensagem de erro {string}", (mensagem) => {
  loginFlows.validErrorMessage(mensagem)
})

Given("que eu informo usuário e senha válidos", () => {
  loginFlows.loginWithValidCredentials()
})

Then("valido que a tela de dashboard é exibida", () => {
  homeFlows.validateDashboardIsVisible()
})