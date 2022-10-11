import { CART } from '../constants/constants.js'
function Nav() {
   this.localData = JSON.parse(localStorage.getItem('localData'));

   this.create = () => {
      const dataCart = JSON.parse(localStorage.getItem('cart')) || 0;
      const element = document.createElement('nav');
      element.classList.add('header__navigation')
      element.setAttribute('id', 'nav');
      let li = '';
      this.localData.forEach(({ title, slug, id }) => {
         if (slug !== CART) {
            li += `<li class = "header__list">
                     <a class = "header__link" id="${id}" href = "#${slug}">${title}</a>
                  </li> `
         }
      })
      element.innerHTML = `<ul class = "header__menu">
                              ${li}
                           </ul>
                           <div class = "header__cart">
                              <a href = "#${CART}"class = "header__link link__cart" id = "basket__count">
                              <span class = "header__cart__count">${dataCart.length || 0}</span>
                                 <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                              </a>
                           </div >
                           `
      return element
   }
   this.init = () => {
      return this.create()
   }
}

const nav = new Nav().init();

export default nav;


//${("#${slug}") === ("#${slug}") ? "active" : ""}