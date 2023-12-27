export class Cart {

    goToCart() {
        cy.get('#cartur')
            .click()

        cy.contains('Products')
    }

    checkEmptyCart() {
        cy.get('#totalp')
            .should('not.be.enabled')
    }

    checkProductInTheCart() {
        cy.get('#tbodyid')
            .should('be.visible')
    }

    addItemToCart(index = 0) {
        cy.get('.card-title')
            .children()
            .eq(index)
            .click()

        cy.contains('Add to cart')
            .click()
    }

    delItemToCart() {
        cy.contains('Delete')
            .click()
            .get('#tbodyid')
            .should('not.be.visible')
    }

    openPurchaseForm() {
        cy.get('[data-target="#orderModal"]')
            .click()
            .wait(500)

        cy.get('#orderModalLabel')
            .should('have.text', 'Place order')
    }

    purchaseItem(arr) {


        cy.get('#name').type(arr[0])
        cy.get('#country').type(arr[1])
        cy.get('#city').type(arr[2])
        cy.get('#card').type(arr[3])
        cy.get('#month').type(arr[4])
        cy.get('#year').type(arr[5])

        cy.contains('Purchase')
            .click()

        cy.get('.sweet-alert h2')
            .should('have.text', 'Thank you for your purchase!')
    }

}

export const cart = new Cart()