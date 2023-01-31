describe('First Check Searching input', () => {
    it('visit to website', () => {
        cy.visit('https://www.jakartanotebook.com/')
        cy.url().should('include','jakartanotebook.com')
        cy.get('.SelectBranchButton___StyledDiv3-sc-1oov5eu-5 > .Button__StyledButton-sc-1l0qx1m-2').click()
    })

    it('next checking search box use and input eartphone', () => {
        cy.get('.SearchSection___StyledDiv2-rs4tda-9 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 >.Input___StyledInput-sc-1en4ex3-14').type('earphone').type('{enter}')
    });

    it('choice buyying one item in shopping website, example WOJOQ TWS Earphone Bluetooth Headset 5.0 with Charging Case - i12 - White', () => {
        cy.contains('WOJOQ TWS Earphone Bluetooth Headset 5.0').click()
        cy.get('.SelectBranchButton___StyledDiv3-sc-1oov5eu-5 > .Button__StyledButton-sc-1l0qx1m-2').click()
    })
})