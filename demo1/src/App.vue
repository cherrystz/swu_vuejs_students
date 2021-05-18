<template>
  <div id="app">
    <h1>My name is {{ myName }}</h1>
    <h1 @click="onClickCountBtn">Count is {{ count }}</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <MyComponent :title="count" @onClear="clear" />
  </div>
</template>

<script>

import MyComponent from "./components/MyComponent";

export default {
  components: { MyComponent },
  name: 'App',
  data() {
    return {
      myName: "Plug",
      count: 0
    }
  },
  methods: {
    clear() {
      this.count = 0;
    },
    onClickCountBtn() {
      this.count += 1;
      console.log('1234');
    }
  },
  mounted() {
    setInterval(()=> {
      this.count += 1;
    }, 1000);

  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
