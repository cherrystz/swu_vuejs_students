// npm install --save material-design-icons-iconfont // import
'material-design-icons-iconfont/dist/material-design-icons.css'

<template lang="html">
  <v-container>
    <!-- Summary section -->
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard title="TOTAL" avatar_bg="#00a65a" subtitle="1,800">
          <template v-slot:avatar>
            <v-icon color="white">mdi-cart-outline</v-icon>
          </template>
        </StockCard>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="SOLD-OUT"
          avatar_ic="mdi-flask-empty-outline"
          avatar_bg="#f39c12"
          subtitle="12"
        >
          <template v-slot:avatar>
            <v-img
              src="https://image.shutterstock.com/image-vector/cute-fun-dog-cartoon-260nw-350881304.jpg"
            />
          </template>
        </StockCard>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="RETURN"
          avatar_ic="mdi-keyboard-return"
          avatar_bg="#dd4b39"
          subtitle="2"
        >
          <template v-slot:avatar>
            <v-icon color="white">mdi-keyboard-return</v-icon>
          </template>
        </StockCard>
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <StockCard
          title="DISCOUNT"
          avatar_ic="mdi-gift-outline"
          avatar_bg="#00c0ef"
          subtitle="101"
        >
          <template v-slot:avatar>
            <v-img src="https://image.shutterstock.com/image-vector/cute-fun-dog-cartoon-260nw-350881304.jpg"/>
          </template>
        </StockCard>
      </v-col>
    </v-row>

    <v-card>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="mDataArray"
        :items-per-page="7"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stock-create')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New Product</span>
            </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item="{ item }">
          <tr :class="{ primary: item.product_id === selectedProductId }">
            <td @click="editItem(item)">{{ item.product_id }}</td>
            <td @click="editItem(item)">
              <v-img
                v-bind:src="item.image | imageUrl"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="50"
                max-height="50"
              ></v-img>
            </td>
            <td @click="editItem(item)">{{ item.name }}</td>
            <td @click="editItem(item)">{{ item.price | currency("฿") }}</td>
            <td @click="editItem(item)">
              {{ item.stock | number("0,0") }} pcs.
            </td>
            <td>
              <v-icon class="mr-2" @click="editItem(item)">
                edit
              </v-icon>
              <span class="ma-1"></span>
              <v-icon @click="deleteItem(item)">
                delete
              </v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>

      <v-dialog v-model="confirmDeleteDlg" max-width="290">
        <v-card>
          <v-card-title class="headline">Confirm Delete</v-card-title>

          <v-card-text class="body">
            Are you sure to delete this product? You cannot restore it after
            clicking confirm.
          </v-card-text>

          <v-card-subtitle>
            <v-img
              v-if="selectedProduct"
              v-bind:src="selectedProduct.image | imageUrl"
              lazy-src="https://picsum.photos/id/11/10/6"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="50"
              max-height="50"
            ></v-img>
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="confirmDeleteDlg = false">
              Cancel
            </v-btn>

            <v-btn color="error" text @click="confirmDelete">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script lang="js">
import api from "@/services/api";
import StockCard from "@/components/cards/StockCard.vue"

  export default  {
    name: 'stock',
    props: [],
    components: {
      StockCard
    },
    async mounted () {
      this.loadProducts()
    },
    data () {
      return {
        search:"",
        selectedProductId:"",
        selectedProduct: null,
        confirmDeleteDlg: false,
        mDataArray:[],
        headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'product_id',
          },
          { text: 'Image', value: 'image' },
          { text: 'Name', value: 'name' },
          { text: 'Price', value: 'price' },
          { text: 'Stock', value: 'stock' },
          { text: 'Action', value: 'action' },
        ],
      }
    },
    methods: {
      async loadProducts(){
        let result = await api.getProducts()
        this.mDataArray = result.data
      },
      editItem(item){
        this.$router.push(`/stock-edit/${item.product_id}`)
      },
      deleteItem(item){
        this.selectedProductId = item.product_id
        this.selectedProduct = item
        this.confirmDeleteDlg = true
      },
      async confirmDelete(){
        await api.deleteProduct(this.selectedProductId)
        this.confirmDeleteDlg = false
        this.loadProducts()
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.stock {
}
</style>
