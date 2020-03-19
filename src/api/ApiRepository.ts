import UserApi from "@/api/UserApi";
import ShopApi from "@/api/ShopApi";

export default class ApiRepository {
  static Register() {
    const mainSiteUrl = "https://selldone.com";
    const apiPath = "https://api.selldone.com";
    const xapiPath = "https://xapi.selldone.com";

    window.Selldone.UserApi = new UserApi(mainSiteUrl, xapiPath);
    window.Selldone.ShopApi = new ShopApi(apiPath, xapiPath);
  }
}
