/// <reference types="cypress" />



before(function () {


    cy.clearCookies()
    cy.visit('baseUrl', { failOnStatusCode: false })

    let email = Cypress.env('email')
    let password = Cypress.env('password')
    cy.log(email, password)
    cy.Login(email, password)

})



describe('Add Product to Cart', function () {

    


    var items = ["Faded Short Sleeve T-shirts","Blouse"]

    for (let x of items) {


        it('Add "'+ x + '" to Cart', function () {

            let i = 0
            while (i < 3) {
                cy.get('[title="Women"]:visible').click({ force: true })
                cy.title().then(function (title) {
                    cy.log(title)
                    if (title == " 508 Resource Limit Is Reached") {
                        // cy.go('back')
                        // cy.visit('http://automationpractice.com/index.php?')
                        cy.reload()
                        cy.get('[title="Women"]:visible').click({ force: true })
                    }

                })

                cy.get('[itemprop="name"]')
                    .contains(x)
                    .parent().nextAll('[itemprop="offers"]')
                    .find('.price.product-price').then(function (el) {
                        let amount = el.text()
                        this.amount = Number(amount.trim().slice(1))
                        cy.log(this.amount)
                    })


                cy.get('[itemprop="name"]')
                    .contains(x)
                    .parent().nextAll('.button-container')
                    .find('[title="Add to cart"]').click()
                i++
            }


        


        })

    }

    // it('Get Cart values', function () {

    //     cy.wait(10000)
    //     cy.get('.layer_cart_product_info').then(function (el) {


    //         let title = el.find('#layer_cart_product_title').text()
    //         let color = el.find('#layer_cart_product_attributes').text()
    //         let quantity = el.find('#layer_cart_product_quantity').text()
    //         let price = el.find('#layer_cart_product_price').text()

    //         price = Number(price.trim().slice(1))

    //         this.price = price


    //         expect(this.price).to.equal(this.amount * 3)

    //         cy.log(title, color, quantity, price)
    //     })



    //     cy.get('.shopping_cart').find('.ajax_cart_quantity').then(function (el) {

    //         let cartQuantity = el.text()
    //         cy.log("cartQuantity " + cartQuantity)
    //     })

    //     cy.get('.layer_cart_row').find('.ajax_block_cart_total').then(function (el) {

    //         let cartTotal = el.text()
    //         cartTotal = Number(cartTotal.trim().slice(1))
    //         cy.log("CartTotal " + cartTotal)

    //         expect(cartTotal).to.equal(this.price + 2)
    //     })


    // })

    // it('Proceed to Checkout', function () {

        // cy.get('[title="Proceed to checkout"]').click()
        // cy.get('.page-heading').should('include.text', 'Shopping-cart summary')
        // cy.get('.cart_navigation.clearfix').find('[title="Proceed to checkout"]').click()
        // cy.get('.page-heading').should('include.text', 'Addresses')
        // cy.get('[name="processAddress"]').click()
        // cy.get('.page-heading').should('include.text', 'Shipping')
        // cy.get('#cgv').check()
        // cy.get('[name="processCarrier"]').click()
        // cy.get('.page-heading').should('include.text', 'Please choose your payment method')
        // cy.get('.cheque').click()
        // cy.get('.page-heading').should('include.text', 'Order summary')
        // cy.get('[type="submit"]').contains('I confirm my order').click()
        // cy.get('.alert.alert-success').then(function (m) {

        //     let msg = m.text()
        //     expect(msg).to.equal('Your order on My Store is complete.')
        // })
        // // expect(this.price).to.equal(this.amount)


    // })

})
