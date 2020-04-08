<template>
  <div>
    <h3>Products</h3>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        <span> {{ product.name }} </span>
        <span> ({{ product.quantity }}) </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    products: Array,
  },
};
</script>
