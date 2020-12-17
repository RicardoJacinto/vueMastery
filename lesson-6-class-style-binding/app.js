//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks.',
    image: './assets/images/green-socks.jpg',
    url: 'https://www.google.com',
    inStock: true,
    cart: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/images/green-socks.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/images/blue-socks.jpg'
      },
      {

      }
    ]
  },
  methods: {
    addToCart(){
      this.cart += 1;
    },
    changeImg(img){
      this.image = img
      },
    removeFromCart(){
      if(this.cart > 0)
      this.cart -= 1;
    }
  }
})

