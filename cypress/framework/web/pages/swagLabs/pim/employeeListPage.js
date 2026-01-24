/// <reference types ="cypress"/>
require("@cypress/xpath")

class employeeListPage {
    elements = {
        ancorEmployeeList: () => cy.xpath("//a[text() = 'Employee List']"),
        btnAdd: () => cy.xpath("//button[normalize-space() ='Add']"),
        inputSearchEmployeeId: () => cy.xpath("//label[text() = 'Employee Id']/../following-sibling::div/input"),
        btnSearch: () => cy.get("[type='submit']"),
        collunId: (id) => cy.xpath(`//div[text()= '${id}']`),
        btnEditar: () => cy.xpath("(//div[text() = 'Actions']/../../following-sibling::div//button)[1]"),
        btnExluir: () => cy.xpath("(//div[text() = 'Actions']/../../following-sibling::div//button)[2]"),
        btnSave: () => cy.get("[type='submit']:first-child"),
        btnConfirmDelete: () => cy.xpath("//button[normalize-space() = 'Yes, Delete']"),
        loader: () => cy.get('.oxd-table-loader')
    }

    employeerList() {
        this.elements.
            ancorEmployeeList().
            should('be.visible').
            click()
    }

    buttonAdd() {
        this.elements.
            btnAdd().
            should('be.visible').
            click()
    }

    inputEmployeeId(id) {
        this.elements.
            inputSearchEmployeeId().
            should('be.visible').
            clear().
            type(id)
    }

    buttonSearch() {
        this.elements.
            btnSearch().
            click()
    }

    collunId(id) {
        return this.elements
            .collunId(id)
    }

    buttonExcluir() {
        this.elements.
            btnExluir().
            click()
    }

    buttonConfirmeDelete() {
        this.elements.
            btnConfirmDelete().
            should('be.visible').
            click()
    }

    loaderTela() {
        return this.elements.
            loader()
    }

    buttonEditar() {
        this.elements.
            btnEditar().
            click()
    }

    buttonSave() {
        this.elements.
            btnSave().
            click()
    }


}
export default employeeListPage