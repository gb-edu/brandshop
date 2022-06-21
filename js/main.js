//range
const rangeInput = document.querySelectorAll('.range-input input'),
      progress = document.querySelector('.range-slider__progress'),
      rangeSpan = document.querySelectorAll('.price-filter__values span');

let priceGap = 200;

rangeInput.forEach(input => {
  input.addEventListener('input', e => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      rangeSpan[0].innerText = '$' + minVal;
      rangeSpan[1].innerText = '$' + maxVal;
      progress.style.left = (minVal / rangeInput[0].max)*100 + '%';
      progress.style.right = 100 - (maxVal / rangeInput[1].max)*100 + '%';
    }
  })
})
//end range

let buttonBrowse = document.querySelector('.search__btn-browse'),
    accountBtnCart = document.querySelector('.account__btn-cart'),
    accountBtn = document.querySelector('.account__btn'),
    dropdownMenu = document.querySelector('.dropdown-menu'),
    browseMenu = document.querySelector('.dropdown-menu--browse'),
    cartMenu = document.querySelector('.cart-menu');

document.querySelector('body').addEventListener ('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    browseMenu.classList.remove('show');
  } else if (cartMenu.classList.contains('show')) {
    cartMenu.classList.remove('show');
  }
})

accountBtnCart.addEventListener('click', e => {
  e.stopPropagation();
  cartMenu.classList.toggle('show');
})


buttonBrowse.addEventListener('click', e => {
  e.stopPropagation();
  browseMenu.classList.toggle('show');
})
  
accountBtn.addEventListener('click', () => {
  window.location.href='checkout.html';
})