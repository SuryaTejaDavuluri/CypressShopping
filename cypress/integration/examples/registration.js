/// <reference types="cypress" />

import RegistrationPage from '../../support/pageobjects/registrationobjects'
const registrationPage = new RegistrationPage()

describe('ShoppingSite', function () {

before(function () {
    cy.clearCookies()
})

beforeEach(function () {


    cy.fixture('example').then(function (data) {
        this.data = data
    })

    let email = Cypress.env('email')
    let password = Cypress.env('password')
    cy.log(email,password)
    cy.Login(email,password)

})



    it('Registration', () => {

        // cy.visit('baseUrl')
        registrationPage.signOut().click()
        cy.wait(5000)
        registrationPage.signInVerify().should('have.text', 'Authentication')
        registrationPage.newEmailAddress().type('cypress13@test.com')
        registrationPage.createNewEmail().click()
        registrationPage.VeirfyNewEmailPage().should('have.text', 'Create an account')
        registrationPage.gender().click()
        registrationPage.firstName().type('FirstName')
        registrationPage.lastName().type('LastName')
        registrationPage.newPassword().type('testpassword')
        registrationPage.dateDOB().select('17')
        registrationPage.monthDOB().select('7')
        registrationPage.yearDOB().select('2001')
        registrationPage.newsLetterCheckbox().check()
        registrationPage.specialOfferCheckbox().check()
        registrationPage.addressFirstName().type('TestFirstName')
        registrationPage.addressLastName().type('TestLastName')
        registrationPage.company().type('TestCompanyName')
        registrationPage.address1().type('TestAddress1')
        registrationPage.address2().type('TestAddress2')
        registrationPage.city().type('Test City')
        registrationPage.state().select('Connecticut')
        registrationPage.postcode().type('57001')
        registrationPage.state().select('Connecticut')
        registrationPage.country().type('United States')
        registrationPage.mobile().type('1234567890')
        registrationPage.alias().type('TestAlias1')
        registrationPage.submitAccount().click()
        registrationPage.accountName().then(function (el) {

            let name = el.text()
            cy.log(name)
            expect(name).to.equal('FirstName LastName')

        })







    })

})
