<template>
  <div class="home">
    <Products :products="products"></Products>
    <CreateProduct @save="save"></CreateProduct>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from "@/components/Products.vue";
import CreateProduct from "@/components/CreateProduct.vue";

export default {
  name: "Home",
  components: {
    Products,
    CreateProduct
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },
    save(product) {
      this.$store.dispatch("createProduct", product);
    },
  },
};
</script>
