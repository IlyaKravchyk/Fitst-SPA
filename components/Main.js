import { getSlugNoHash, getPageData, createHashChangeEvent, getHtmlTemplate, createClickEvent } from '../helpers/helpers.js';
import { CATALOG, CART } from '../constants/constants.js'

function Main() {
   this.localData = JSON.parse(localStorage.getItem('dataSPA'))
   this.element = ''
   this.create = () => {
      this.element = document.createElement('main');
      this.element.classList.add('main');
      this.render(location.hash);
      createHashChangeEvent(this.render);
   }


   this.createCountInBasket = (dataCount) => {
      this.elementCount = document.createElement('span')
      this.elementCount.classList.add('header__cart__count')
      this.elementCount.innerHTML = `${dataCount}`
      this.showCountInBasket()
   }

   this.showCountInBasket = () => {
      const elementCount = document.querySelector('.header__cart__count')
      const countParent = document.querySelector('#basket__count')
      if (elementCount) {
         elementCount.remove()
         countParent.appendChild(this.elementCount)
      } else {
         countParent.appendChild(this.elementCount)
      }
   }


   this.render = (hash) => {
      let slugNoHash = getSlugNoHash(hash);
      if (!hash) {
         location.replace(`${location.pathname}#${getSlugNoHash()}`)
      }

      const mainData = getPageData(slugNoHash)
      const { title, content } = mainData;

      this.element.innerHTML = getHtmlTemplate(title, content)

      if (slugNoHash === CART) {
         import('./Cart.js').then(response => {
            const cartData = response.default.init();
            this.element.innerHTML = cartData.outerHTML;

            const btnDelete = this.element.querySelectorAll('.button__deleted');
            btnDelete.forEach(btn => {
               btn.addEventListener('click', (event) => {
                  this.deleteToCart(event.currentTarget.id)


               })

            })
            const btnCountUp = this.element.querySelectorAll('.button__up')
            const btnCountDowt = this.element.querySelectorAll('.button__down')
            createClickEvent(btnCountUp, this.countUp);
            createClickEvent(btnCountDowt, this.countDown)
         })
      }

      if (slugNoHash.includes(CATALOG)) {

         if (slugNoHash === CATALOG) {
            import('./Catalog.js').then(response => {
               this.element.innerHTML = `<div class = "loader"></div>`
               const responseDefault = response.default
               responseDefault.then(data => {
                  this.element.innerHTML = this.getHtmlTemplate(title, content, data.outerHTML)
                  const addToCartBtns = this.element.querySelectorAll('.catalog__item__btn')
                  addToCartBtns.forEach(btn => {
                     btn.addEventListener('click', (e) => {
                        this.addToCart(e.target.id)
                     })
                  })
               })
            })
         }

         if (slugNoHash.includes('/')) {
            this.element.innerHTML = `<div class = "loader"><div/>`
            import('./Product.js').then(response => {
               const product = response.default.init();
               product.then(productData => {
                  this.element.innerHTML = productData.outerHTML;
                  const addProductBtn = this.element.querySelector('.add__product__cart');
                  addProductBtn.addEventListener('click', (e) => {
                     this.addToCart(e.target.id)
                  })
               })
            })
         }
      }

   }

   this.cart = JSON.parse(localStorage.getItem('cart')) || [];

   this.addToCart = (idProduct) => {

      const dataCatalog = JSON.parse(localStorage.getItem('catalogData'));
      const product = dataCatalog.find(({ id }) => id === +idProduct)
      const arrayIndex = this.cart.findIndex(({ id }) => id === +idProduct)

      if (arrayIndex !== -1) {
         this.cart[arrayIndex].count += 1;
      } else {
         product.count = 1;
         this.cart.push(product)
      }

      localStorage.setItem('cart', JSON.stringify(this.cart))
      this.createCountInBasket(this.cart.length)
   }

   this.deleteToCart = (idProduct) => {
      const dataCart = JSON.parse(localStorage.getItem('cart'))
      const newDataCart = dataCart.filter(({ id }) => id !== +idProduct)
      localStorage.setItem('cart', JSON.stringify(newDataCart))
      this.filterThisCartArray(idProduct)
      this.createCountInBasket(newDataCart.length)
      this.render(location.hash)
   }

   this.filterThisCartArray = (idProduct) => {
      this.cart = this.cart.filter(({ id }) => id !== +idProduct)
   }

   this.countUp = (idProduct) => {
      const dataCart = JSON.parse(localStorage.getItem('cart'))
      const newDataCart = dataCart.map((item) => {
         if (item.id === +idProduct) {
            item.count += 1
            return item
         } {
            return item
         }
      })
      localStorage.setItem('cart', JSON.stringify(newDataCart))
      this.render(location.hash)
   }

   this.countDown = (idProduct) => {
      const dataCart = JSON.parse(localStorage.getItem('cart'))
      const newDataCart = dataCart.map((item) => {
         if (item.id === +idProduct) {
            item.count -= 1
            return item
         } {
            return item
         }
      })
      localStorage.setItem('cart', JSON.stringify(newDataCart))
      this.render(location.hash)
   }


   this.getHtmlTemplate = (title, content, htmlElement) => {
      return `<div class="container">
                     <div class="main_wrapper">
                        <h1>${title}</h1>
                        ${htmlElement ? htmlElement : ''}
                        <p>${content}</p>
                     </div>            
               </div>`
   }

   this.init = () => {
      this.create();
      return this.element;
   };
}
const main = new Main().init();

export default main;