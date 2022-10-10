function Contacts() {
   this.create = async () => {
      const element = document.createElement('div')
      element.classList.add('home')
      element.innerHTML = `
            <div class = "contacts__items">
               <div class = "contacts__phone">
                  <h2>
                     Call us.
                  </h2>
                  <a href ="tel:375331234567">
                     +375(33)-123-45-67
                  </a>
               </div>
               <div class = "contacts__mail">
                  <h2>
                     Write to us.
                  </h2>
                  <a href = "https://mail.ru/" target ="_blanc">
                     test.@gmail.com
                  </a>
               </div>
               <div class ="contacts__address">
                  <h2>
                     Our address.
                  </h2>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
               </div>
            </div>
      `
      return element
   }
   this.init = () => this.create()
}

const contacts = new Contacts().init();

export default contacts
