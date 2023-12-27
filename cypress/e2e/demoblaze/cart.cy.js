/// <reference types="cypress" />
import { basePage } from "../../support/pages/basePage"
import { cart } from "../../support/pages/cart"

describe('Корзина', () => {

  beforeEach(() => {
    basePage.open('index.html', 1920, 1080)
  })

  it('4. Переход в пустую корзину', () => {
    cart.goToCart()
    cart.checkEmptyCart()
  })

  it('5. Добавление товара в корзину', () => {
    cart.addItemToCart(0)
    cart.goToCart()
    cart.checkProductInTheCart()

  })

  it('6. Удаление товара из корзины', () => {
    cart.addItemToCart(0)
    cart.goToCart()
    cart.checkProductInTheCart()
    cart.delItemToCart()
  })

  it('7. Оформление покупки товара в корзине', () => {

    const dataForForm = ['User', 'Russia', 'Moscow', '4111 1111 1111 1111', 'December', '2023']

    cart.addItemToCart(2)
    cart.goToCart()
    cart.checkProductInTheCart()
    cart.openPurchaseForm()
    cart.purchaseItem(dataForForm)
  })
})