/// <reference types="cypress" />

describe('Корзина', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('index.html')
  })

  it('Переход в пустую корзину', () => {
    cy.get('#cartur')
      .click()

    .get('#totalp').should('not.be.enabled')
  })
})