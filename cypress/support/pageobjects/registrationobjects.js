class RegistrationPage {


    signIn() {
        return cy.get('.login')
    }

    signOut() {
        return cy.get('.logout')
    }

    signInVerify() {
        return cy.get('.page-heading')
    }

    newEmailAddress() {
        return cy.get('#email_create')
    }

    createNewEmail() {
        return cy.get('#SubmitCreate')
    }

    VeirfyNewEmailPage() {
        return cy.get('.page-heading')
    }

    gender(gender) {
        if(gender=='Male'){
        return cy.get('#id_gender1')
        }
        else {
        return cy.get('#id_gender2')
        }
    }

    firstName() {
        return cy.get('#customer_firstname')
    }

    lastName() {
        return cy.get('#customer_lastname')
    }

    newPassword() {
        return cy.get('#passwd')
    }

    dateDOB() {
        return cy.get('#days')
    }

    monthDOB() {
        return cy.get('#months')
    }

    yearDOB() {
        return cy.get('#years')
    }

    newsLetterCheckbox() {
        return cy.get('#newsletter')
    }

    specialOfferCheckbox() {
        return cy.get('#optin')
    }

    addressFirstName() {
        return cy.get('#firstname')
    }

    addressLastName() {
        return cy.get('#lastname')
    }

    company() {
        return cy.get('#company')
    }

    address1() {
        return cy.get('#address1')
    }

    address2() {
        return cy.get('#address2')
    }

    city() {
        return cy.get('#city')
    }

    state() {
        return cy.get('#id_state')
    }

    postcode() {
        return cy.get('#postcode')
    }

    country() {
        return cy.get('#id_country')
    }

    mobile() {
        return cy.get('#phone_mobile')
    }

    alias() {
        return cy.get('#alias')
    }

    submitAccount() {
        return cy.get('#submitAccount')
    }

    accountName() {
        return cy.get('.account')
    }

    email() {
        return cy.get('#email')
    }

    password() {
        return cy.get('#passwd')
    }

    loginButton() {
        return cy.get('#SubmitLogin')
    }

}

export default RegistrationPage
