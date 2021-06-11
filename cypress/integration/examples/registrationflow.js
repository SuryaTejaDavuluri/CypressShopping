/// <reference types="cypress" />

import RegistrationPage from '../../support/pageobjects/registrationobjects'
const registrationPage = new RegistrationPage()


describe('ShoppingSite', function () {

    beforeEach(function () {
        cy.fixture('reg').then(function (data) {
            this.data = data
        })
        let email = Cypress.env('email')
        let password = Cypress.env('password')
        cy.log(email, password)
        cy.Login(email, password)
    })


    it('Registration', function () {

        registrationPage.signOut().click()
        cy.wait(5000)
        registrationPage.signInVerify().should('have.text', 'Authentication')
        // registrationPage.newEmailAddress().type(this.data.newEmail)
        cy.form(9).then(function(el){
            registrationPage.newEmailAddress().type(el+ "@test.com")
        })
        registrationPage.createNewEmail().click()
        registrationPage.VeirfyNewEmailPage().should('have.text', 'Create an account')
        registrationPage.gender(this.data.gender).click()
        registrationPage.firstName().type(this.data.firstname)
        registrationPage.lastName().type(this.data.lastname)
        registrationPage.newPassword().type(this.data.password)
        registrationPage.dateDOB().select(this.data.dateDOB)
        registrationPage.monthDOB().select(this.data.monthDOB)
        registrationPage.yearDOB().select(this.data.yearDOB)
        registrationPage.newsLetterCheckbox().check()
        registrationPage.specialOfferCheckbox().check()
        registrationPage.addressFirstName().type(this.data.firstname1)
        registrationPage.addressLastName().type(this.data.lastname1)
        registrationPage.company().type(this.data.company)
        registrationPage.address1().type(this.data.address1)
        registrationPage.address2().type(this.data.address2)
        registrationPage.city().type(this.data.city)
        registrationPage.postcode().type(this.data.postcode)
        registrationPage.state().select(this.data.state)
        registrationPage.country().type(this.data.country)
        registrationPage.mobile().type(this.data.mobile)
        registrationPage.alias().type(this.data.alias)
        registrationPage.submitAccount().click()
        registrationPage.accountName().then(function (el) {

            let name = el.text()
            cy.log(name)
            expect(name).to.equal('First Name Last Name')

        })

    })

})
