<template>
  <h2> Товары</h2>
  <div class="products">
    <div class="product" v-for="product in products">
      <div>{{ product.title }}</div>
      <div><img :src="product.thumbnail" alt="{{product.title}}"></div>
      <div class="price">
        <div>{{product.price}}</div>
        <div><button class="btn btn-purchase">Купить</button></div>
      </div>
    </div>
</template>


<style scoped>
.products{
  display: flex;
  flex-wrap: wrap;

}
.product{
  width: 300px;
  margin: 40px 20px;
}
.product.img{
  width: 280px;
  margin: 10px;
  background: cadetblue;
}
</style>

<script setup>
export default {
  data(){
    return{
      products: []
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts(){
      fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => this.products = data.products)
    }
  },
}
</script>
