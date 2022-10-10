import { CATALOG } from '../constants/constants.js'
function Cart() {
   this.cart = []
   this.create = () => {
      const element = document.createElement('div')
      element.classList.add('cart')
      if (this.cart.length === 0) {
         element.innerHTML = `<div class = "cart__bg">
                                 <div class = "container">
                                    <div class = "cart__items">
                                       <p class = "cart__description">
                                          Cart is empty, it's time to go to the <a class = "cart__link" href = "#${CATALOG}">Catalog!</a>
                                       </p>
                                    </div >
                                 </div>
                              </div> `
      } else {
         let cartElement = ''
         let sum = 0;
         this.cart.forEach(({ title, price, count, image, id }, index) => {
            sum += (price * count);
            cartElement += `
            <div class = "container">
               <div class ="cart__items">
                  <div class = "cart__item cart__info">
                     <div class= item__image>
                        <a href="#${CATALOG}/${id}">
                           <img src ="${image}" alt = "icon">
                        </a>
                     </div>
                     <div class = "cart__description">
                        ${title}
                     </div>
                  </div>
                  <div class = "cart__item cart__count">
                     <button class = "button__down" id ="${id}" ${(count <= 1) ? "disabled" : ''}>
                        <i class="fa fa-minus" aria-hidden="true"></i>
                     </button>
                     <div class = "cart__cout__number">
                        ${count}
                     </div>
                     <button class="button__up" id="${id}">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                     </button>
                  </div >
                  <div class = "cart__item cart__price">
                     ${(price * count).toFixed(2)} $
                  </div>
                  <div class = "cart__item">
                     <button class = "button__deleted" id ="${id}">
                        delete
                     </button>
                  </div>
               </div >
            </div>
            `
         });
         element.innerHTML = `
         ${cartElement}
         <div class = cart__total>
            <div class = "cart__pay">
               <div class = "cart__fullprice">
                  All price ${sum.toFixed(2)} $
               </div>
               <div class = "cart__pay__btn">
                  <button >
                     Pay
                  </button>
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
