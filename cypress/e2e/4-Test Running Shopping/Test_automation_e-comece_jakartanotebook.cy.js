describe('i want to create automation e-comece jakarta notebook website', () => {
    before(() => {
        cy.visit('https://www.jakartanotebook.com/')
        cy.url().should('include','jakartanotebook.com')
        cy.get('.SelectBranchButton___StyledSpan3-sc-1oov5eu-6').click()
      })
    it('i want to checking button slide in website', () => {
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.bx-next').click()
        cy.wait(5000)
        cy.get('.home__banner__slider > :nth-child(2) > img').click()
        cy.wait(5000)
    })
    it('next checking search box use and input eartphone ', () => {
        cy.get('.SearchSection___StyledDiv2-rs4tda-9 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 >.Input___StyledInput-sc-1en4ex3-14').type('earphone').type('{enter}')
    })
    it('choice buyying one item in shopping website, example WOJOQ TWS Earphone Bluetooth Headset 5.0 with Charging Case - i12 - White', () => {
        cy.get('.SelectBranchButton___StyledSpan3-sc-1oov5eu-6').click()
        cy.contains('WOJOQ TWS Earphone Bluetooth Headset').click()
        
    })
    it('I want to checking login in website', () => {
        cy.visit('https://www.jakartanotebook.com/auth/login')
        cy.url().should('include', 'jakartanotebook.com/auth/login')
    })
    it('Next login User in website and in website shopping', () => {
        cy.logins()
    })


    })