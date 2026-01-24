/// <reference types="cypress"/>
import { faker } from "@faker-js/faker"
require("@cypress/xpath")

class addEmployeePage {
    elements = {
        ancorAddEmployee: () => cy.xpath("//a[text() = 'Add Employee']"),
        inputFirstName: () => cy.get("[name ='firstName']"),
        inpurtMiddleName: () => cy.get("[name ='middleName']"),
        inputLastName: () => cy.get("[name ='lastName']"),
        inputEmployeeId: () => cy.xpath("//label[text() ='Employee Id']/../following-sibling::div/input"),
        inputDriversNumber: () => cy.xpath(`//label[text() = "Driver's License Number"]/../..//input`),
        radioGender: (gender) => cy.xpath(`//label[text() = '${gender}']`),
        btnSave: () => cy.xpath("//button[normalize-space() ='Save']"),
        toast: () => cy.get(".oxd-text--toast-message")
    }

    addEmployeePage() {
        this.elements.
            ancorAddEmployee().
            click()
    }

    fisrtName() {
        const name = faker.person.firstName()
        this.elements.
            inputFirstName().
            should('be.visible').
            clear().
            type(name)
        cy.wrap(name).as("name")
    }

    middleName() {
        this.elements.
            inpurtMiddleName()
            .type(faker.person.middleName())
    }

    lastName() {
        this.elements.
            inputLastName().
            type(faker.person.lastName())
    }

    employeeId() {
        const path = 'cypress/results/employeeIds.json'
        cy.readFile(path).then(user => {
            const id = faker.number.int({ min: 1000, max: 5000 })
            this.elements.
                inputEmployeeId().
                clear().
                type(id)

            user.employeeId.push(id)
            cy.writeFile(path, user)
        })

    }

    driverLicenceNumber() {
        const number = faker.phone.number({ style: "national" })
        this.elements.
            inputDriversNumber().
            type(number)
        cy.wrap(number).as("number")
    }

    radioGender() {
        const gender = faker.person.sex()
        const normalized = gender.charAt(0).toUpperCase() + gender.slice(1)
        this.elements.
            radioGender(normalized).
            click()
        cy.wrap(normalized).as("gender")
    }

    buttonSave() {
        this.elements.
            btnSave().
            click()
    }

    toastSuccess() {
        return this.elements.
            toast().
            invoke('text')
    }

}
export default addEmployeePage