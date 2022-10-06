
import { getLocalData } from '../helpers/helpers.js'
import { getSlugNoHash, getPageData, createHashChangeEvent } from '../helpers/helpers.js'

function App() {
   this.elementApp = '';
   this.create = () => {
      this.elementApp = document.createElement('div');
      this.elementApp.classList.add('app');
      document.body.appendChild(this.elementApp)
   }

   this.createLoader = () => {
      const loader = document.createElement('div')
      loader.classList.add('loader');
      loader.innerHTML = `
                           Loading...
                        `
      return loader
   }

   this.showLoader = () => {
      const localData = getLocalData();
      let loader = this.createLoader();
      if (!localData) {
         this.elementApp.appendChild(loader);
         this.getData();
      } else {
         const checkLoader = this.elementApp.querySelector('.loader')
         if (checkLoader) {
            checkLoader.remove()
         }
         this.setTitle(location.hash)
         this.render();
      }
   }

   this.getData = () => {
      fetch('../data/data.js')
         .then(response => response.text())
         .then(data => {
            setTimeout(() => {
               localStorage.setItem('localData', data);
               this.showLoader();
            }, 2000)
         })
   }


   this.setTitle = (hash) => {
      const slugNoHash = getSlugNoHash(hash);
      const data = getPageData(slugNoHash);
      const { pageTitle } = data;
      document.title = (pageTitle);
   }

   this.createActiveTitle = () => {
      const dataTitle = document.querySelectorAll('.header__link')
      const classActive = document.querySelector('.active')
      console.log(classActive);
      dataTitle.forEach(item => {
         item.addEventListener('click', () => {
            if (classActive) {
               classActive.remove()
               item.classList.add('active')
            } else {
               item.classList.add('active')
            }
         })
      })
   }


   this.render = async () => {

      const dataHeader = await import('./Header.js');
      const dataMain = await import('./Main.js');
      const dataFooter = await import('./Footer.js');

      const header = dataHeader.default;
      const main = dataMain.default;
      const footer = dataFooter.default;

      this.elementApp.appendChild(header);
      this.elementApp.appendChild(main);
      this.elementApp.appendChild(footer);
      this.createActiveTitle()
   }

   this.init = () => {
      this.create();
      this.showLoader();
      createHashChangeEvent(this.setTitle);
   }
}

const app = new App().init();

export default app;


// • Метод create() для создания главного элемента «div» с классом «app» и сохранения его в
// свойстве «element».
// • Метод render() для добавления главного элемента в тег «body» HTML-документа и для
// последующего добавления в контейнер <div class=”app”></div> других элементов из других
// загруженных компонентов.
// • Метод init() для инициализации главного компонента вашего приложения — для описании
// будущей логики загрузки других компонентов, а также для вызова методов create() и render().