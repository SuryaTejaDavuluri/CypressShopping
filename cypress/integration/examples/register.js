/// <reference types="cypress" />

  //cypress@test.com
  //cypresstest
describe('ShoppingSite', function () {

    it('Registration', () => {

        cy.visit('baseUrl')
        cy.get('.login').click()
        cy.get('.page-heading').should('have.text','Authentication')
        cy.get('#email_create').type('cypress5@test.com')
        cy.get('#SubmitCreate').click()
        cy.get('.page-heading').should('have.text','Create an account')
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type('FirstName')
        cy.get('#customer_lastname').type('LastName')

        cy.get('#passwd').type('testpassword')

        cy.get('#days').select('17')
        cy.get('#months').select('7')
        cy.get('#years').select('2001')
        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('#firstname').type('TestFirstName')
        cy.get('#lastname').type('TestLastName')
        cy.get('#company').type('TestCompanyName')
        cy.get('#address1').type('TestAddress1')
        cy.get('#address2').type('TestAddress2')
        cy.get('#city').type('Test City')
        cy.get('#id_state').select('Connecticut')
        cy.get('#postcode').type('57001')
        cy.get('#id_state').select('Connecticut')
        cy.get('#id_country').type('United States')
        cy.get('#phone_mobile').type('1234567890')
        cy.get('#alias').type('TestAlias1')
        cy.get('#submitAccount').click()
        cy.get('.account').then(function(el){

            let name = el.text()
            cy.log(name)
            expect(name).to.equal('FirstName LastName')

        })







    })
  
})
  