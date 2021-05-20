# swupos

vue add router
vue add vuetify
yarn add axios chart.js@2 material-design-icons-iconfont vue-chartjs vue-moment vue2-filters
yarn add material-design-icons-iconfont
http://travistidwell.com/jsencrypt/demo/

// Add this in main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css'

### CORS

https://www.youtube.com/watch?v=ttd4zOgCJdc

edit vue.config.js

- lintOnSave: false,

### example of two-way binding and v-model

  <v-card-text class="text--primary">
      <form>
        <input
          @change="(e) => (account.username = e.target.value)"
          :value="account.username"
          type="text"
          placeholder="username"
          name="username"
        />
        <br />
        <input
          v-model="account.password"
          type="text"
          placeholder="password"
          password="password"
        />
        <br />

        <button @click="submit" type="button">Submit</button>
      </form>
    </v-card-text>
