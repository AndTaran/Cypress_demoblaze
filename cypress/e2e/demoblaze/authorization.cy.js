/// <reference types="cypress" />
import { authorizations } from "../../support/pages/authorization"
import { basePage } from "../../support/pages/basePage"

describe('Авторизация', () => {

  beforeEach(() => {
    basePage.open('index.html', 1920, 1080)
  })

  it('1. Проверка заголовка на главной странице', () => {
    basePage.checkTitle('PRODUCT STORE')
  })

  it('2. Проверка открытия окна авторизации', () => {
    authorizations.checkOpenAuthorizations()
  })

  it('3. Проверка авторизации', () => {
    const userName = 'user123423123'
    const password = '12345678'

    authorizations.checkAuthorizations(userName, password)
  })

})