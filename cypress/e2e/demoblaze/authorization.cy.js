/// <reference types="cypress" />

describe('Авторизация', () => {

  let userName = 'user123423123'
  let password = '12345678'

  before(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

  //
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('index.html', { failOnStatusCode: false })
  })

  it('1. Проверка заголовка на главной странице', () => {
    cy.get('.navbar-brand').should('contains.text', 'PRODUCT STORE')
  })

  it('2. Проверка открытия окна авторизации', () => {
    cy.get('#login2').click()
  })

  it('3. Проверка авторизации', () => {
    cy.get('#login2')
      .click()
      .wait(2000)
    cy.get('#loginusername')
      .type(userName, { waitForAnimations: true })
    cy.get('#loginpassword')
      .type(password, { waitForAnimations: true })
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click()
    cy.get('#nameofuser')
      .should('contain.text', 'Welcome ' + userName)
  })

})