import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Banana", price: 20 },
      { name: "Banana1", price: 20 },
      { name: "Banana2", price: 20 },
      { name: "Banana3", price: 20 },
    ],
    vegetables: [
      { name: "Cucumber", price: 20 },
      { name: "Radish", price: 20 },
      { name: "Chili", price: 20 },
      { name: "Carrot", price: 20 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
    vegProducts: (state) => {
      var vegProducts = state.vegetables.map((vegetable) => {
        name: "**" + vegetable.name + "**";
        price: vegetable.price * 2;
      });
      return vegProducts;
    },
  },
});
