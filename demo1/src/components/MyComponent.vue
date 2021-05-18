<template>
  <div>
      <h1>MyComponent {{ title }}</h1>
      <button @click="clear">Clear 1</button>
      <button @click="$emit('onClear', {})">Clear 2</button>
  </div>
</template>

<script>
export default {
    name: "MyComponent",
    props: {
        title: String
    },
    methods: {
        clear() {
            this.$emit("onClear", {});
        }
    },
};
</script>

<style>

button {
    margin: 20px;
    border: 0px;
    padding: 20px 30px;
    border-radius: 40px;
    background: green;
    color: white;
}
button:hover {
    opacity: 80%;
}
</style>