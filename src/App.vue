<template>
  <v-app>
    <v-app-bar app flat>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          contain
          src="https://selldone.com/favicon/android-chrome-512x512.png"
          transition="scale-transition"
          width="40"
        />
        <img src="./assets/wire.svg" height="20" class="mx-2" />
        <v-img
          alt="Vuetify Logo"
          contain
          :src="Selldone.ShopApi.getShopIconUrl()"
          transition="scale-transition"
          width="40"
        />

        <span class="mx-2">Selldone Test App</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn class="me-2" :to="{ name: 'Home' }" text>
        <span>Home</span>
      </v-btn>

      <v-btn class="me-2" :to="{ name: 'About' }" text>
        <span class="me-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>

      <login-button class="mx-2"></login-button>
    </v-app-bar>

    <v-content style="overflow-y: auto;max-height: 80vh;min-height: 840px">
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";
import LoginButton from "./components/LoginButton.vue";

export default Vue.extend({
  name: "App",

  components: {
    LoginButton
  },

  data: () => ({
    //
  }),

  methods: {}
});
</script>
