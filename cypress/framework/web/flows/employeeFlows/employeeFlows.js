import EmployeeListPage from "../../pages/swagLabs/pim/employeeListPage";
import AddEmployeePage from "../../pages/swagLabs/pim/addEmployeePage";
import { th } from "@faker-js/faker";

const employeeListPage = new EmployeeListPage
const addEmployeePage = new AddEmployeePage
const path = "cypress/results/employeeIds.json"

class employeeFlows {


    /**
     * cria um funcionario com dados randomico
     */
    addNewEmployee() {
        addEmployeePage.fisrtName()
        addEmployeePage.middleName()
        addEmployeePage.lastName()
        addEmployeePage.employeeId()
        addEmployeePage.buttonSave()
    }

    validateSuccessMessage(message) {
        addEmployeePage.toastSuccess().then(text => {
            expect(text).to.be.equal(message)
        })
    }

    /**
     * cria funcionarios em lop com base na quantidade passada via parametro
     * e guarda seus ids em um arquivo para consulta posterior
     * @param {*} quantidade 
     */
    createEmployeesInLoop(quantidade) {
        addEmployeePage.addEmployeePage()

        let count = 0
        while (count !== quantidade) {
            this.addNewEmployee()
            this.validateSuccessMessage("Successfully Saved")
            cy.screenshot("criado-funcionarios")
            cy.wait(1000)
            cy.location('pathname', { timeout: 20000 })
                .should('include', '/pim/viewPersonalDetails/empNumber/');
            addEmployeePage.addEmployeePage()
            count++
        }
    }

    /**
     * procura os funcionarios criados com base no tamanho do 
     * array no arquivo
     */
    searchEmployees() {
        employeeListPage.employeerList()

        cy.readFile(path).then(user => {

            for (let i = 0; i < user.employeeId.length; i++) {
                const element = user.employeeId[i];
                employeeListPage.inputEmployeeId(element)
                employeeListPage.buttonSearch()
                cy.wait(1000)
                employeeListPage.collunId(element).should('be.visible')
                cy.screenshot("buscando-funcionarios")
            }

        })
    }

    /**
     * deleta os funcionarios com base na quantidade passada
     * e atualiza o arquivo
     * @param {*} quantidade 
     */
    deleteEmployee(quantidade) {
        cy.readFile(path).then(user => {
            const ids = Array.isArray(user.employeeId) ? user.employeeId : []
            const idsParaExcluir = ids.slice(0, quantidade)

            cy.wrap(idsParaExcluir).each(id => {

                employeeListPage.inputEmployeeId(id)
                employeeListPage.buttonSearch()
                cy.wait(1000)
                employeeListPage.buttonExcluir()
                employeeListPage.buttonConfirmeDelete()
                this.validateSuccessMessage("Successfully Deleted")
                cy.screenshot("excluindo-funcionarios")

            }).then(() => {
                user.employeeId = ids.filter(id => !idsParaExcluir.includes(id))
                cy.writeFile(path, user)
            })
        })
    }

    /**
     * edita os funcionarios existentes no arquivo
     */
    editEmployee() {
        cy.readFile(path).then(user => {
            const ids = Array.isArray(user.employeeId) ? user.employeeId : []
            const idsParaEditar = ids.slice(0, ids.length)

            cy.wrap(idsParaEditar).each(id => {

                employeeListPage.employeerList()

                cy.location('pathname', { timeout: 20000 })
                    .should('include', '/pim/viewEmployeeList');

                cy.contains("h5", "Employee Information", { timeout: 20000 })
                    .should("be.visible");

                employeeListPage.inputEmployeeId(id)
                employeeListPage.buttonSearch()

                cy.wait(1000)
                employeeListPage.buttonEditar()

                cy.location("pathname", { timeout: 20000 })
                    .should("include", "/pim/viewPersonalDetails/empNumber/");

                cy.contains("h6", "Personal Details", { timeout: 20000 })
                    .should("be.visible");

                addEmployeePage.fisrtName()
                addEmployeePage.driverLicenceNumber()
                addEmployeePage.radioGender()
                employeeListPage.buttonSave()
                this.validateSuccessMessage("Successfully Saved")
                this.validateUpdatedEmployeeData()
                cy.screenshot("editando-funcionarios")

            })
        })
    }

    /**
     * valida se as alterações persistiram
     */
    validateUpdatedEmployeeData() {
        cy.get("@name").then(name => {
            addEmployeePage.elements.inputFirstName().should('have.value', name)
            cy.get("@number").then(number => {
                addEmployeePage.elements.inputDriversNumber().should('have.value', number)
                cy.get("@gender").then(gender => {
                    addEmployeePage.elements.radioGender(gender).should('contain.text', gender)
                })
            })
        })
    }

}
export default employeeFlows
