import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const BASE_URL = 'http://localhost:3002';

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    addProduct: (state, product) => {
      state.products = [...state.products, product];
    },
  },
  actions: {
    fetchProducts: (ctx) => {
      fetch(`${BASE_URL}/products`)
        .then((res) => res.json())
        .then((products) => ctx.commit("setProducts", products.data));
    },
    createProduct: (ctx, product) => {
      fetch(`${BASE_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((newProduct) => ctx.commit("addProduct", newProduct));
    },
  },
  modules: {},
});
