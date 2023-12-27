export class Authorizations {

    checkOpenAuthorizations() {
        cy.get('#login2')
            .click()
    }

    checkAuthorizations(userName, password) {
        cy.get('#login2')
            .click()
            .wait(1000)
        cy.get('#loginusername')
            .type(userName, { waitForAnimations: true })
        cy.get('#loginpassword')
            .type(password, { waitForAnimations: true })
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click()
        cy.get('#nameofuser')
            .should('contain.text', 'Welcome ' + userName)
    }

}

export const authorizations = new Authorizations()