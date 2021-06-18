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

    // cy.visit('baseUrl')
    // login.signIn().click()
    cy.title().then(function (head) {
     cy.log(head)
       while(head.includes('Limit')) {
        cy.reload(true)
        login.signIn().click()
    } 
    login.signIn().click()
            
        
    })
       
    login.signInVerify().should('have.text', 'Authentication')
    login.email().type(email)
    login.password().type(password)
    login.loginButton().click()
    cy.title().then(function (title) {
        cy.wait(2000)
        cy.log(title)
            while(title.includes("508")) {
                cy.reload(true)
            }
            // login.loginButton().click()
    })
    login.accountName().then(function (el) {
        let name = el.text()
        cy.log(name)
        expect(name).to.equal('Cypress Test')
    })

})


Cypress.Commands.add('form', function(size) {
    // fill-out form
    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   
   return makeid(size)

})


Cypress.Commands.add('Refresh', function() {

    cy.title().then(function (title) {
        cy.log(title)
        if (title.includes("508")) {
            cy.reload(true)
        }
    })

})