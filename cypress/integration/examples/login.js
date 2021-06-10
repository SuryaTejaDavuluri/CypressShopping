/// <reference types="cypress" />

  //cypress@test.com
  //cypresstest
describe('ShoppingSite', function () {

    it('Login', () => {

        cy.visit('baseUrl')
        cy.get('.login').click()
        cy.get('.page-heading').should('have.text','Authentication')
        cy.get('#email').type('cypress@test.com')
        cy.get('#passwd').type('cypresstest')
        cy.get('#SubmitLogin').click()


        cy.get('.account').then(function(el){

            let name = el.text()
            cy.log(name)
            expect(name).to.equal('Cypress Test')

        })







    })
  
})
  