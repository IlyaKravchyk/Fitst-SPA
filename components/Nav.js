import { CART } from '../constants/constants.js'
function Nav() {
   this.localData = JSON.parse(localStorage.getItem('localData'));

   this.create = () => {
      const element = document.createElement('nav');
      element.classList.add('header__navigation')
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
                           </ul>`
      return element
   }
   this.init = () => {
      return this.create()
   }
}

const nav = new Nav().init();

export default nav;


//${("#${slug}") === ("#${slug}") ? "active" : ""}