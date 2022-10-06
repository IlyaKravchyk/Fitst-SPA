import { CATALOG } from '../constants/constants.js'
function Cart() {
   this.cart = []
   this.create = () => {
      const element = document.createElement('div')
      element.classList.add('cart')
      element.classList.add('container')
      if (this.cart.length === 0) {
         element.innerHTML = `<div class = "cart__items">
                                 <p class = "cart__description">
                                    Cart is empty, it's time to go to the <a class = "cart__link" href = "#${CATALOG}">Catalog!</a>
                                 </p>
                              </div > `
      } else {
         let cartElement = ''
         let sum = 0;
         this.cart.forEach(({ title, price, count, image, id }, index) => {
            sum += (price * count);
            cartElement += `
            <div class ="cart__items">
               <div class = "cart__item cart__info">
                  <div class= item__image>
                     <img src ="${image}" alt = "icon">
                  </div>
                  <div class = "cart__description">
                     ${title}
                  </div>
               </div>
               <div class = "cart__item cart__count">
                  <button class = "button__down" id ="${id}" ${(count <= 1) ? "disabled" : ''}>-</button>
                  <div class = "cart__cout__number"> ${count}</div>
                  <button class="button__up" id="${id}">+</button>
               </div >
               <div class = "cart__item cart__price">${(price * count).toFixed(2)} $</div>
               <button class = "cart__item button__deleted" id ="${id}">deleted</button>
            </div >
            `
         });
         element.innerHTML = `
         ${cartElement}
         <div class = cart__total>
            <div class = "cart__items">
               <div class = "cart__fullprice">
                  ${sum.toFixed(2)} $
               </div>
               <div cart__pay>
                  <a href = "#" class = "cart__pay__link" >
                     Pay
                  </a>
               </div>
            </div>
         </div>
         `
      }

      return element
   }

   this.init = () => {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
      return this.create();
   }
}

const cart = new Cart()

export default cart

{/*<div class="cart__item">
<div class = "cart__image">
<img   src = "${image}">
</div>
   <div class = "cart__description">${index + 1}. ${title} - amount: ${count}, price - ${count * price} $</div>
   <button class = "cart__button">Deleted</button>
</div>*/}