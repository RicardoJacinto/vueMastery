//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      description: 'A pair of warm, fuzzy socks.',
      image: './assets/images/green-socks.jpg',
      url: 'https://www.google.com',
      inStock: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      variants: [
        {
          variantId: 2234,
          variantColor: "green"
        },
        {
          variantId: 2235,
          variantColor: "blue",
        },
        {

        }
      ]
    } 
  })
  
  