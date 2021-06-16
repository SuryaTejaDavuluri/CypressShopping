/// <reference types="cypress" />

describe('Add Product to Cart', function () {

    beforeEach(function () {


        cy.clearCookies()
        cy.visit('http://automationpractice.com/index.php?',{ failOnStatusCode: false })

        cy.title().then(function(title){
            cy.log(title)
            if (title == " 508 Resource Limit Is Reached") {
                // cy.go('back')
                // cy.visit('http://automationpractice.com/index.php?')
                cy.reload()
            }
            
        })
        

        let email = Cypress.env('email')
        let password = Cypress.env('password')
        cy.log(email, password)
        cy.Login(email, password)

    })

    it('Add Product', function () {


        var items = ["Blouse"]


        for (let x of items) {

            cy.get('[title="Women"]:visible').click({force:true})
            cy.title().then(function(title){
                cy.log(title)
                if (title == " 508 Resource Limit Is Reached") {
                    // cy.go('back')
                    // cy.visit('http://automationpractice.com/index.php?')
                    cy.reload()
                    cy.get('[title="Women"]:visible').click({force:true})
                }
                
            })
           
            cy.get('[itemprop="name"]')
                .contains(x)
                .parent().nextAll('[itemprop="offers"]')
                .find('.price.product-price').then(function (el) {
                    let amount = el.text()
                    this.amount = amount.trim()
                    cy.log(amount)
                })

            cy.get('[itemprop="name"]')
                .contains(x)
                .parent().nextAll('.button-container')
                .find('[title="Add to cart"]').click()


        }

        cy.wait(10000)
        cy.get('.layer_cart_product_info').then(function (el) {


            let title = el.find('#layer_cart_product_title').text()
            let color = el.find('#layer_cart_product_attributes').text()
            let quantity = el.find('#layer_cart_product_quantity').text()
            let price = el.find('#layer_cart_product_price').text()


            expect(price).to.equal(this.amount)

            cy.log(title, color, quantity, price)
        })

        cy.get('.shopping_cart').find('.ajax_cart_quantity').then(function (el) {

            let cartQuantity = el.text()
            cy.log("cartQuantity " + cartQuantity)
        })

        cy.get('.layer_cart_row').find('.ajax_block_cart_total').then(function (el) {

            let cartTotal = el.text()
            cy.log("CartTotal " + cartTotal)

        })

        cy.get('[title="Proceed to checkout"]').click()
        cy.get('.page-heading').should('include.text','Shopping-cart summary')
        cy.get('.cart_navigation.clearfix').find('[title="Proceed to checkout"]').click()
        cy.get('.page-heading').should('include.text','Addresses')
        cy.get('[name="processAddress"]').click()
        cy.get('.page-heading').should('include.text','Shipping')
        cy.get('#cgv').check()
        cy.get('[name="processCarrier"]').click()
        cy.get('.page-heading').should('include.text','Please choose your payment method')
        cy.get('.cheque').click()
        cy.get('.page-heading').should('include.text','Order summary')
        cy.get('[type="submit"]').contains('I confirm my order').click()
        cy.get('.alert.alert-success').then(function(m){
            
            let msg = m.text()
            expect(msg).to.equal('Your order on My Store is complete.')
        })
        // expect(this.price).to.equal(this.amount)


    })

})
