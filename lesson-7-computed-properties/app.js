//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks.',
    selectedVariant: 0,
    url: 'https://www.google.com',
    inStock: true,
    cart: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/images/green-socks.jpg',
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
    updateProduct(pickedVariant){
      this.selectedVariant = pickedVariant;
      }
  },
  computed: {
    title(){
      return `${this.brand} ${this.product}`;
    },
    image(){
     return this.variants[this.selectedVariant].variantImage;
    }
  }

})

