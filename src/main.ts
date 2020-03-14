import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./index.ts";
import vuetify from "./plugins/vuetify";


//█████████████████████████████████████████████████████████████
//――――――――――――――――――――― Global Helper Methods ―――――――――――――――――――――
//█████████████████████████████████████████████████████████████


Vue.mixin({
    data() {
        return {
            Selldone:window.Selldone,

            shopId: window.Selldone.shopId,
            appApiKey: window.Selldone.appApiKey,
            redirectUrl: window.Selldone.redirectUrl,
            scope: window.Selldone.scope,
            accessToken: window.Selldone.accessToken,
            expiresIn: window.Selldone.expiresIn
        };
    },


    computed: {},



});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");

