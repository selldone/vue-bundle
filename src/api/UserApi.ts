export default class UserApi {
  mainSiteUrl: string | null;

  xapiPath: string | null;

  constructor(mainSiteUrl: string, xapiPath: string) {
    this.mainSiteUrl = mainSiteUrl;

    this.xapiPath = xapiPath;
  }

  getLoginUrl() {
    return `${this.mainSiteUrl}/apps-login/${window.Selldone.appApiKey}?shop_id=${window.Selldone.shopId}&redirect=${window.Selldone.redirectUrl}&scope=${window.Selldone.scope}`;
  }

  getUserInfo() {
    return window.axios.get(`${this.xapiPath}/me`);
  }

  getUserAvatarUrl(userId: string | number, size = "small") {
    return `${this.mainSiteUrl}/users/${userId}/profile/avatar/${size}`;
  }
}
