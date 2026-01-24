
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


import LoginFlows from "../../../framework/web/flows/loginFlows/loginFlows"
import EmployeeFlows from "../../../framework/web/flows/employeeFlows/employeeFlows"
import PainelFlows from "../../../framework/web/flows/painelFlows/painelFlows"

const loginFlows = new LoginFlows
const painelFlows = new PainelFlows
const employeeFlows = new EmployeeFlows

Given("que eu estou na funcionalidade de cadastro de funcionários", () => {
    loginFlows.loginWithValidCredentials()
    loginFlows.submitLogin()
    painelFlows.clickOnThePimOption()
})

When("realizo o cadastro de {int} funcionários com dados válidos", (quantidade) => {
    employeeFlows.createEmployeesInLoop(quantidade)
})

Then("o funcionário deve ser exibido na lista de funcionários", () => {
    employeeFlows.searchEmployees()
})

When("realizar a exclusão de {int} funcionários", (quantidade) => {
    employeeFlows.deleteEmployee(quantidade)
})

When("edito os funcionarios restantes", () => {
    employeeFlows.editEmployee()
})

When("faço logout com sucesso", () => {
    loginFlows.logout()
})