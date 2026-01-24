
module.exports = {
    setupHooks: () => {

        after(() => {
            cy.writeFile("cypress/results/employeeIds.json",
                { employeeId: [] },
                { log: false }
            )
        })
    }
}