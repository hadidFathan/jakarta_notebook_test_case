describe('Checking Website webapp security fitur searching', () => {
    it('i want to checking visit to website', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include','zero.webappsecurity.com')
    })

    it('try fitur searching in website example pay bils', () => {
        cy.get('#searchTerm').type('pay bills{enter}')
        cy.get('h2').should('contain.text', 'Search Results:')
    })

    it('i want to check link in visit to pay bils', () => {
        cy.get('li > a').click()
    })

    
})