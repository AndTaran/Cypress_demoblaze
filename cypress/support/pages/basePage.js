export class BasePage {

    open(url, width, height) {
        cy.viewport(width, height)
        cy.visit(url)
    }

    checkTitle(title) {
        cy.get('.navbar-brand')
            .should('contains.text', title)
    }
}

export const basePage = new BasePage()