function AboutUs() {
   this.create = async () => {
      const element = document.createElement('div')
      element.classList.add('About')
      element.innerHTML = `
                           <h2 class = "about__title">
                              Large selection of goods.
                           </h2>
                           <p class = "about__description">
                              A wardrobe with over 2,000,000 fashion items: men's, women's and children's clothing, shoes and accessories. You can look into it at any time and order whatever you want with the appropriate delivery. It is so simple! The world's largest online clothing, footwear and accessories store with over 1000 million brands: Nike, Adidas, DKNY and many others
                           </p>
                           <h2 class = "about__title">
                              Delivery with fitting.
                           </h2>
                           <p class = "about__description">
                              Delivery with fitting Free shipping* nationwide.choose any goods you like, place an order, and we will deliver it as soon as possible.- Our service of delivery and delivery to the Points of Issue of Orders operates.If you place an order before 13: 00, you will receive it the next day at a time convenient for you.You can also place an order at 23: 00 with the possibility to receive it the very next day from 15: 00(for delivery by our service) and from 17: 00(for delivery to Pickup Points).- In addition, in large large data centers *, when placing an order before 23: 00, you can receive it the day after placing the order at a convenient time interval for you.You will also have the opportunity to try things on for 15 minutes and choose from those products that did not suit you.In other cities, delivery was carried out by postal operators within a few days
                           </p>
                           <h2 class = "about__title">
                              Payment and return.
                           </h2>
                           <p class = "about__description">
                              For the convenience of customers, it is possible to order services free of charge: advance payment(by online bank card, ERIP), payment at the time of delivery upon receipt of the order.You can redeem the order in whole or in part(only for delivery by the LMExpress delivery service or to the Pickup Points), or refuse the order(for any delivery method).For more information on payment methods, see the 'Public Offer'.If you have not decided to return anything after payment, terrible.The term for the return of goods is 14 days by mail and through the points of issue of orders.
                           </p>
                        `
      return element
   }
   this.init = () => this.create();
}

const aboutUs = new AboutUs().init()

export default aboutUs;