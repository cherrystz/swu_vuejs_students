<template lang="html">
  <v-container>
    <v-card class="mx-auto  pa-5" outlined>
      <v-form @submit.prevent="submit" ref="form">
        <v-text-field
          v-model="product.name"
          :counter="10"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          suffix="THB"
          type="number"
          v-model="product.price"
          label="Price (฿)"
          required
        ></v-text-field>

        <v-text-field
          suffix="PCS"
          v-model="product.stock"
          label="Stock (PCS.)"
          required
        ></v-text-field>

        <input type="file" @change="onFileSelected" />
        <br />
        <img :src="getProductImage()" style="height: 200px;" class="mt-3" />

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
import { imageUrl } from "@/services/constants";
export default {
  name: "stock-edit",
  data: () => ({
    product: { name: "", image: "" },
    imageFile: null,
  }),
  async mounted() {
    const result = await api.getProductById(this.$route.params.id);
    this.product = result.data;
  },
  methods: {
    onFileSelected(event) {
      // For loading preview image
      const reader = new FileReader();
      reader.onload = (event) => {
        this.product.image = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      // For uploading image
      this.imageFile = event.target.files[0];
    },
    getProductImage() {
      if (this.product.image.length > 100) {
        return this.product.image;
      } else {
        return this.$options.filters.imageUrl(this.product.image);
        // return `${imageUrl}/${this.product.image}`;
      }
    },
    async submit() {
      let formData = new FormData();
      const { name, price, stock, product_id } = this.product;
      formData.append("product_id", product_id);
      formData.append("name", name);
      formData.append("stock", stock);
      formData.append("price", price);
      if (this.imageFile != null) {
        formData.append("image", this.imageFile);
      }

      await api.updateProduct(formData);
      this.$router.back();
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
// .stock-create {
//
// }
</style>
