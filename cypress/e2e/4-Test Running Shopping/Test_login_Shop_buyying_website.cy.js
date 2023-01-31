describe('I want to checking login in website, and checking in keranjang example buyying earphone ', () => {
    it('First step i want to visit login website', () => {
        cy.visit('https://www.jakartanotebook.com/auth/login')
        cy.url().should('include', 'jakartanotebook.com/auth/login')
    })

    it('Next login User in website and in website shopping', () => {
        cy.logins()
    });
})