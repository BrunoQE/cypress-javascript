class header {
    openUseMenu() {
        cy.get("[class='oxd-userdropdown']").click()
    }

    logout() {
        this.openUseMenu()
        cy.contains('Logout').click()
    }
}

export default header