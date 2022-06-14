let buttonBrowse = document.querySelector('.search__btn-browse')
let accountBtnCart = document.querySelector('.account__btn-cart')
let accountBtn = document.querySelector('.account__btn')

let browseMenu = document.querySelector('.browse__menu')
// let browseMenu = document.querySelector('.nav-menu--browse')
let cartMenu = document.querySelector('.cart__menu')

accountBtnCart.addEventListener('click', () => {
  cartMenu.classList.toggle('show')
})

accountBtn.addEventListener('click', () => {
  window.location.href='checkout.html'
})

buttonBrowse.addEventListener('click', () => {
  browseMenu.classList.toggle('show')
})