import { AxiosInstance } from "axios";
import UserApi from "@/api/UserApi";
import ShopApi from "@/api/ShopApi";

export interface Selldone {
  VERSION: string;

  // Global variables set by Selldone app url (In the Query)
  shopId: number | string | null;
  appApiKey: string | null;

  // Selldone Application Config provided in the page meta tags
  redirectUrl: string | null;
  scope: string | null;

  // Access Tokens by user authentication (Store in sessions)
  accessToken: string | null; // tokenType+' '+ accessToken
  expiresIn: string | number | null;

  UserApi: UserApi;
  ShopApi: ShopApi;
}

declare global {
  interface Window {
    Selldone: Selldone;
    axios: AxiosInstance;
  }
}

if (typeof window !== "undefined") {
  window.Selldone = window.Selldone || {};
  window.Selldone.VERSION = "{{SELLDONE_VERSION}}";
}

export const selldoneVersion = "{{SELLDONE_VERSION}}";
