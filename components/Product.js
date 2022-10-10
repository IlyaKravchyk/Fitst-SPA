function Product() {

   this.getProductData = async (id) => {
      const respone = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await respone.json()
      return data
   }

   this.create = async (idProduct) => {
      const productData = await this.getProductData(idProduct)
      const element = document.createElement('div')
      const { title, image, description, price, id } = productData
      element.classList.add('product')

      element.innerHTML = `<div class = "container">
                              <div class = "product__wrapper">
                                 <div class = "product__items">
                                    <div class = "product__item">
                                       <div class = "product__image">
                                          <img src="${image}" alt="${title}">
                                       </div>
                                    </div>
                                    <div class = "product__item">
                                       <h2 class = "product__title">
                                          ${title}
                                       <h2>
                                       <div class = "prouct__subtitle">
                                          ${description}
                                       </div>
                                       <div class = "product__price">
                                          ${price} $
                                       </div>
                                       <button class="product__button" id="${id}">
                                          Add Product
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>`
      return element
   }


   this.init = () => {
      const idProduct = location.hash.split('/')[1];
      console.log(idProduct)
      return this.create(idProduct)
   }
}

const product = new Product()
export default product