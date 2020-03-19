<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Variable</th>
            <th class="text-left">Value</th>
            <th class="text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shop ID</td>
            <td class="max-width">
              {{ shopId }}
              <v-alert
                v-if="!shopId"
                class="mt-2"
                dense
                colored-border
                border="left"
                color="red"
                type="error"
                >Set shop_id in your application url query!</v-alert
              >
            </td>
            <td class="font-italic">Auto set by app url</td>
          </tr>
          <tr>
            <td>App API</td>
            <td class="max-width">
              {{ appApiKey }}
              <v-alert
                v-if="!appApiKey"
                class="mt-2"
                dense
                colored-border
                border="left"
                color="red"
                type="error"
                >Set api in your application url query!</v-alert
              >
            </td>
            <td class="font-italic">Auto set by app url</td>
          </tr>

          <tr>
            <td>Redirect URL</td>
            <td class="max-width">{{ redirectUrl }}</td>
            <td class="font-italic">Set in page meta tags</td>
          </tr>
          <tr>
            <td>Scope</td>
            <td class="max-width">{{ scope }}</td>
            <td class="font-italic">Set in page meta tags</td>
          </tr>

          <tr>
            <td>Login link</td>
            <td class="max-width">{{ Selldone.UserApi.getLoginUrl() }}</td>
            <td class="font-italic">Generated login URL</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <div class="overflow-auto">
      <v-alert v-if="accessToken" color="success" border="left" colored-border>
        <b>accessToken:</b> <small>{{ accessToken }}</small>
      </v-alert>
    </div>

    <v-btn @click="getSuggestionUsers()" class="ma-2">getSuggestionUsers</v-btn>

    <v-btn @click="toggle = !toggle" class="ma-2">Toggle show</v-btn>

    <v-expand-transition>
      <div v-if="toggle">
        <div style="background-color: #837;min-height: 450px"></div>
        <div style="background-color: #887025;min-height: 450px"></div>
        <div style="background-color: #4b7288;min-height: 450px"></div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {},
  data: () => {
    return {
      toggle: false
    };
  },

  methods: {
    getSuggestionUsers() {
      window.Selldone.ShopApi.getSuggestionShopStaffs("paj").then(
        ({ data }) => {
          console.error("data", data);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.max-width {
  max-width: 380px !important;
}
</style>
