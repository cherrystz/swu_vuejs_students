<template>
  <v-container>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="@/assets/login_header.jpg"
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
            type="password"
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
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import api from "@/services/api";

export default {
  name: "Register",
  data() {
    return {
      account: {
        username: "",
        password: "",
      },
      emailRules: [(v) => !!v || "E-mail is required"],
      passwordRules: [(v) => !!v || "Password is required"],
    };
  },
  methods: {
    async onSubmit() {
      const result = await api.register(this.account);
      if (!result) {
        alert(JSON.stringify(result));
      }
    },
    onCancel() {
      this.$router.push("login");
    },
  },
};
</script>

<style></style>
