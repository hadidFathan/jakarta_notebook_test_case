// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('logins', (username, username1, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.fixture('jakartanotebook').then(user => {
        const username = user.username
        const username1 = user.username1
        const password = user.password

        cy.get('.LoginForm___StyledDiv6-v7mguz-9 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').clear()
        cy.get('.LoginForm___StyledDiv6-v7mguz-9 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').type(username1)
        cy.get('.LoginForm___StyledDiv7-v7mguz-10 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').clear()
        cy.get('.LoginForm___StyledDiv7-v7mguz-10 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').type(password) 
        cy.get('.LoginForm___StyledDiv8-v7mguz-11 > .Button__StyledButton-sc-1l0qx1m-1').click()
        cy.get('.Alert__StyledAlert-sc-1btmvfv-1').should('have.text', 'Email / Password tidak sesuai.')
        cy.get('.LoginForm___StyledDiv6-v7mguz-9 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').clear()
        cy.get('.LoginForm___StyledDiv6-v7mguz-9 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').type(username)
        cy.get('.LoginForm___StyledDiv7-v7mguz-10 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').clear()
        cy.get('.LoginForm___StyledDiv7-v7mguz-10 > .Input___StyledDiv7-sc-1en4ex3-12 > .Input__StyledInput-sc-1en4ex3-3 > .Input___StyledInput-sc-1en4ex3-14').type(password) 
        cy.wait(5000)
        cy.get('.LoginForm___StyledDiv8-v7mguz-11 > .Button__StyledButton-sc-1l0qx1m-1').click()
        
        
    })
})