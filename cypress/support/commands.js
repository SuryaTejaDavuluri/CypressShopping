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

import RegistrationPage from '../support/pageobjects/registrationobjects'
const login = new RegistrationPage()

Cypress.Commands.add('Login', function (email, password) {

    cy.visit('baseUrl')
    login.signIn().click()
    login.signInVerify().should('have.text', 'Authentication')
    login.email().type(email)
    login.password().type(password)
    login.loginButton().click()
    login.accountName().then(function (el) {
        let name = el.text()
        cy.log(name)
        expect(name).to.equal('Cypress Test')
    })

})