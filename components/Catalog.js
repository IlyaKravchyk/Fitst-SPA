import { CATALOG } from '../constants/constants.js'
function Catalog() {
   this.catalogData = JSON.parse(localStorage.getItem('catalogData')) || [];

   this.getCatalogData = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      localStorage.setItem('catalogData', JSON.stringify(data))
      return data;
   }
   this.create = async () => {
      if (this.catalogData.length === 0) {
         this.catalogData = await this.getCatalogData();
      }

      const element = document.createElement('div');

      element.classList.add('catalog')
      let li = '';
      this.catalogData.forEach(({ title, price, image, id }) => {
         li += `<li class="catalog__item">
                        <div class="catalog__item__image">
                           <a href="#${CATALOG}/${id}">
                              <img src="${image}" alt="${title}">
                           </a>
                        </div>
                        <div class="catalog__item__info">
                           <div class="catalog__item__title">
                              <a href="#${CATALOG}/${id}">${title}</a></div>
                              <div class="catalog__item__price">
                                 ${price} $
                              </div>
                        </div>
                        <div class = "catalog__item__button">
                           <button class = "add__cart" id="${id}">Add to cart</button>
                        </div>
                  </li>`
      })

      element.innerHTML = `
                              <div class = "catalog__wrapper">
                                 <ul class = "catalog__items">
                                    ${li}
                                 </ul>
                              </div>
                           `

      return element
   }

   this.init = () => this.create();
}

const catalog = new Catalog().init();

export default catalog;