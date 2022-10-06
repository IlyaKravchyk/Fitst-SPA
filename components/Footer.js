function Footer() {
   this.create = () => {
      const element = document.createElement('footer');
      element.classList.add('footer');
      element.innerHTML = `      <div class = "container">
                                    <div class = "footer__wrapper">
                                       <a class = "footer__link" href = "/">
                                          <img class = "footer__image" src = "../image/logo.svg" alt = "logo">
                                       </a>
                                       <ul class = "footer__items">
                                          <li class = "footer__item">
                                             <a class ="footer__link" href = "#catalog">
                                                Catalog
                                             </a>
                                          </li>
                                          <li class = "footer__item">
                                             <a class ="footer__link" href = "#about">
                                                About Us
                                             </a>
                                          </li>
                                          <li class = "footer__item">
                                             <a class ="footer__link" href = "#contacts">
                                                Contacts
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                           `
      return element;
   }
   this.init = () => this.create();
}

const footer = new Footer().init();
export default footer;