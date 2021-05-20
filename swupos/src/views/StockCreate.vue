<template lang="html">
  <v-container>
    <v-card class="mx-auto  pa-5" outlined>
      <v-form @submit.prevent="submit" ref="form">
        <v-text-field
          v-model="product.name"
          :counter="10"
          :rules="nameRule"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          suffix="THB"
          :rules="priceRule"
          type="number"
          v-model="product.price"
          label="Price"
          required
        ></v-text-field>

        <v-text-field
          suffix="PCS"
          :rules="stockRule"
          v-model="product.stock"
          label="Stock"
          required
        ></v-text-field>

        <input type="file" @change="onFileSelected" />
        <br />

        <img
          v-if="imageURL"
          :src="imageURL"
          style="height: 200px;"
          class="mt-3"
        />
        <br />
        <br />
        <v-layout row>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" @click="cancel">
            Cancel
          </v-btn>

          <v-btn color="success" type="submit">
            Confirm
          </v-btn>
        </v-layout>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import api from "@/services/api";

export default {
  name: "stock-create",
  data: () => ({
    product: {
      name: "",
      price: "",
      stock: "",
      image: null,
    },
    imageURL: null,
    nameRule: [(v) => !!v || "Name is required"],
    priceRule: [
      (v) => !!v || "price is required",
      (v) => Number(v) > 10 || "price must greater than 10",
    ],
    stockRule: [(v) => !!v || "stock is required"],
  }),
  methods: {
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
      this.product.image = event.target.files[0];
    },
    async submit() {
      if (this.$refs.form.validate() == true) {
        let formData = new FormData();
        const { name, price, stock } = this.product;
        formData.append("name", name);
        formData.append("stock", stock);
        formData.append("price", price);
        formData.append("image", this.product.image);
        await api.addProduct(formData);
        this.$router.back();
      }
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
// .stock-create {

// }
</style>
