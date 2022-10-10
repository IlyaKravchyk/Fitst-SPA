import { CATALOG } from '../constants/constants.js'

function Home() {
   this.create = async () => {
      const element = document.createElement('div')
      element.classList.add('home')
      element.innerHTML = `
            <div class = "home__items">
               <div class = "home__promo">
                  <a href = "#${CATALOG}">
                     <img src = "./image/home__sale.jpg">
                  </a>
               </div>
               <div class = "home__images">
                  <img src = "./image/home__new.jpg">
                  <img src = "./image/home__jeans.jpg">
               </div>
            </div>
      `
      return element
   }
   this.init = () => this.create()
}

const home = new Home().init();

export default home

