<template>
  <form @submit.prevent="onSubmit(name, quantity)">
    <input type="text" name="name" v-model="name" />
    <input type="number" name="quantity" v-model="quantity" />
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      quantity: 1,
    };
  },
  methods: {
    onSubmit(name, quantity) {
      this.$emit("save", { name, quantity });
    },
  },
};
</script>
