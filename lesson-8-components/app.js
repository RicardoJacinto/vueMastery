var app = new Vue({
  el: '#app',
  data: {
    premium:true
  }

})


Vue.component('product', {

  props: {
    message: {
      type: Boolean, 
      required: true,
      default: false
    }
  },
  template: `
 
        <div class='product'>
              <div class='product-image'>
                  <img :src='image' />
              </div>

              <div class='product-info'>
                <h1 :href='url'>{{title}}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{lineThrough: !inStock}"> Out of Stock</p>
                <p v-if="onSale">{{saleProduct}}</p>
                <p>{{description}}</p>

                <ul>
                  <li v-for="detail in details">{{detail}}</li>
                </ul>

                 <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
                 
                 <div class="cart">
                   <p>Cart({{cart}})</p>
                 </div>

                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{backgroundColor: variant.variantColor}"  @mouseover="updateProduct(index)">
                </div>

                <a :href='url' target='_blank'> Check more products like this</a>
              </div>
            
            </div> 
` ,

data(){
  return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks.',
      selectedVariant: 0,
      url: 'https://www.google.com',
      inStock: true,
      cart: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      onSale: false,
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
        }
      ]
    }
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
      },
      saleProduct(){
        if(this.onSale)
        return `${this.brand} ${this.product} on sale!!` 
      }
    }  
  })


