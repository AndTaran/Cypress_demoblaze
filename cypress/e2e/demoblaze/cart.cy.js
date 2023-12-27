/// <reference types="cypress" />

describe('Корзина', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('index.html')
  })

  it('4. Переход в пустую корзину', () => {
    cy.get('#cartur')
      .click()

      .get('#totalp').should('not.be.enabled')
  })

  it('5. Добавление товара в корзину', () => {
    cy.get('#tbodyid')
      .children()
      .eq(0)
      .wait(500)
      .click()

    cy.contains('Add to cart')
      .click()

      .get('#cartur')
      .click()
      .get('#tbodyid')
      .should('be.visible')
  })

  it('6. Удаление товара из корзины', () => {
    cy.get('#tbodyid')
      .children()
      .eq(0)
      .click()

    cy.contains('Add to cart')
      .click()

      .get('#cartur')
      .click()

    cy.contains('Delete').click()
      .get('#tbodyid')
      .should('not.be.visible')
  })

  it('7. Оформление покупки товара в корзине', () => {

    const dataForForm = ['User', 'Russia', 'Moscow', '4111 1111 1111 1111', 'December', '2023']

    cy.get('#tbodyid')
      .children()
      .eq(0)
      .wait(500)
      .click()

      .get('.product-content').should('be.visible')

    cy.contains('Add to cart')
      .click()

      .get('#cartur')
      .click()

      .get('[data-target="#orderModal"]').click().wait(500)

    cy.get('#name').type(dataForForm[0])
    cy.get('#country').type(dataForForm[1])
    cy.get('#city').type(dataForForm[2])
    cy.get('#card').type(dataForForm[3])
    cy.get('#month').type(dataForForm[4])
    cy.get('#year').type(dataForForm[5])

    cy.contains('Purchase').click()

    cy.get('.sweet-alert h2').should('have.text', 'Thank you for your purchase!')
  })
})