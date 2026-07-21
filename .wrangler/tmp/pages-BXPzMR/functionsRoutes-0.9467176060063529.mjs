import { onRequest as __api_payfast_init_js_onRequest } from "C:\\Users\\shill\\OneDrive\\Desktop\\Coding Projects\\WebDev Stuff\\MissKIWebsite\\miss-kingdom-impact\\functions\\api\\payfast-init.js"
import { onRequestPost as __payfast_webhook_js_onRequestPost } from "C:\\Users\\shill\\OneDrive\\Desktop\\Coding Projects\\WebDev Stuff\\MissKIWebsite\\miss-kingdom-impact\\functions\\payfast-webhook.js"

export const routes = [
    {
      routePath: "/api/payfast-init",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_payfast_init_js_onRequest],
    },
  {
      routePath: "/payfast-webhook",
      mountPath: "/",
      method: "POST",
      middlewares: [],
      modules: [__payfast_webhook_js_onRequestPost],
    },
  ]