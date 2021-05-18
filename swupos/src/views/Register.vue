<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>Register</v-card-title>
    </v-img>

    <v-card-text>
      <v-form @submit.prevent="onSubmit">
        <!-- username -->
        <v-text-field
          v-model="account.username"
          name="username"
          label="username"
          id="username"
          :rules="emailRules"
        ></v-text-field>

        <!-- password -->
        <v-text-field
          v-model="account.password"
          name="password"
          label="password"
          id="password"
          :rules="passwordRules"
        ></v-text-field>

        <!-- buttons -->
        <div style="height: 10px;"></div>
        <v-row class="justify-space-around">
          <v-btn type="button" text @click="onCancel">Cancel</v-btn>
          <v-btn type="submit" color="success">Confirm</v-btn>
        </v-row>
        <div style="height: 10px;"></div>
      </v-form>
    </v-card-text>

    <!-- Two way binding -->
    <!-- <v-card-text class="text--primary">
      <form >
        <input 
          @change=" (e) => (account.username = e.target.value)"
          :value="account.username"
          type="text" placeholder="username" 
          name="username" 
        />
        <br/>
        <input
          v-model="account.password" 
          type="text" placeholder="password" 
          name="password" 
        />
        <br/>

        <button @click="submit" type="button">Submit</button>
      </form>
    </v-card-text> -->
  </v-card>
</template>

<script>
import axios from 'axios';
import api from '@/services/api';

export default {
  name: 'Register',
  data() {
    return {
      account: {
        username: "",
        password: ""
      },
      emailRules: [(v) => !!v || "E-mail is required"],
      passwordRules: [(v) => !!v || "Password is required"]
    };

  },
  methods: {
    async onSubmit() {
      const result = await api.register(this.account);
      alert(JSON.stringify(result));
    },
    onCancel() {

    }
  },
};
</script>

<style>

</style>