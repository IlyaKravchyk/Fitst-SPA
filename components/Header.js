import nav from './Nav.js'
import { CART } from '../constants/constants.js'
function Header() {
   this.create = () => {
      const element = document.createElement('header');
      element.classList.add('header');
      element.innerHTML = `
                                 <div class ="container">
                                    <div class = "header__wrapper">
                                       <div class = "header__items">
                                          <div class = "header__logo">
                                             <a class = "header__link" href = "/">
                                                <img class = "header__image" src = "../image/logo.svg" alt = "logo">
                                             </a>
                                          </div>
                                          ${nav.outerHTML}
                                          <div class = "header__cart">
                                             <a href = "#${CART}"class = "header__link link__cart" id = "basket__count">
                                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                             </a>
                                          </div >
                                          </div >
                                       </div >
                                    </div >
                                 </div >
         `
      return element;
   }
   this.init = () => this.create();
}

const header = new Header().init();

export default header;


