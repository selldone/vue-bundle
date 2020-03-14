import "./configure";
import ApiRepository from "@/api/ApiRepository";


// Local test url:
// http://localhost:8000?api={api_key}&shop_id={shop_id}


//―――――――――――――――――――――― Set shop_id & api return by Selldone ――――――――――――――――――――――

function getQueryStringValue(key: string) {
    return decodeURIComponent(
        window.location.search.replace(
            new RegExp(
                "^(?:.*[&\\?]" +
                // eslint-disable-next-line no-useless-escape
                encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
                "(?:\\=([^&]*))?)?.*$",
                "i"
            ),
            "$1"
        )
    );
}


let needReset=false;

if (getQueryStringValue("shop_id")) {
    window.Selldone.shopId = getQueryStringValue("shop_id");

    if(window.Selldone.shopId!==sessionStorage.getItem("shop_id"))needReset=true;

    sessionStorage.setItem("shop_id", `${window.Selldone.shopId}`);
}
if (getQueryStringValue("api")) {
    window.Selldone.appApiKey = getQueryStringValue("api");

    if(window.Selldone.appApiKey!==sessionStorage.getItem("api"))needReset=true;

    sessionStorage.setItem("api", `${window.Selldone.appApiKey}`);
}
if(needReset){
    sessionStorage.removeItem("access_token");
    sessionStorage.removeItem("token_expires_in");
    console.info('RESET ACCESS TOKEN! CHANGE SHOP.')
}

window.Selldone.shopId =  sessionStorage.getItem("shop_id");
window.Selldone.appApiKey =  sessionStorage.getItem("api");


//―――――――――――――――――――――― Set redirect url & scopes by header contents ――――――――――――――――――――――

const redirectUrl: any = document.head.querySelector(
    'meta[name="app-redirect-url"]'
);
window.Selldone.redirectUrl = redirectUrl ? redirectUrl.content : null;

const scope: any = document.head.querySelector('meta[name="app-scope"]');
window.Selldone.scope = scope ? scope.content : null;
console.log("scope", scope.content);


//―――――――――――――――――――――― Set Access Token by header contents ――――――――――――――――――――――

const accessToken: any = document.head.querySelector('meta[name="app-access-token"]');
window.Selldone.accessToken = accessToken ? accessToken.content : null;
if(window.Selldone.accessToken){
    console.log("Access token set by meta tags. (Feed by your application backend)");
}




//█████████████████████████████████████████████████████████████
//――――――――――――――――― Redirect get access token from Selldone ―――――――――――――――――
//█████████████████████████████████████████████████████████████

const fragmentString = location.hash.substr(1);
const fragment: any = {};
const fragmentItemStrings = fragmentString.split("&");
for (const i in fragmentItemStrings) {
    const fragmentItem = fragmentItemStrings[i].split("=");
    if (fragmentItem.length !== 2) {
        continue;
    }

    fragment[fragmentItem[0]] = fragmentItem[1];
}

if (fragment["access_token"]) {
    console.log("--- Set Sessions ---");

    const accessToken = fragment["access_token"];
    const tokenType = fragment["token_type"];
    const expiresIn = fragment["expires_in"];

    // Store
    sessionStorage.setItem("access_token", tokenType + " " + accessToken);
    sessionStorage.setItem("token_expires_in", expiresIn);
}

window.Selldone.accessToken = sessionStorage.getItem("access_token");
window.Selldone.expiresIn = sessionStorage.getItem("token_expires_in");


//――――――――――――――――――――――――― Axios ―――――――――――――――――――――――――

window.axios = require("axios");
window.axios.defaults.headers.common["Access-Control-Allow-Origin"] =
    "https://selldone.com";
window.axios.defaults.headers.common["Access-Control-Allow-Headers"] =
    "Origin, X-Requested-With, Content-Type, Accept";

if (window.Selldone.accessToken)
    window.axios.defaults.headers.common["Authorization"] =
        window.Selldone.accessToken;


ApiRepository.Register()
