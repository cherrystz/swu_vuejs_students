import router from "@/router";
import { server } from "@/services/constants";
import httpClient from "@/services/httpClient";
import * as productAPI from "@/services/api_product";
import * as transactionAPI from "@/services/api_transaction";

const register = async (values) => {
  const result = await httpClient.post(server.REGISTER_URL, values);
  if (result.data.result == "ok") {
    router.push("login");
    return true;
  } else {
    return false;
  }
};

const isLoggedIn = () => {
  let token = localStorage.getItem(server.TOKEN_KEY);
  return token != null;
};

const logoff = () => {
  localStorage.removeItem(server.TOKEN_KEY);
  router.push("/login");
};

const login = async (values) => {
  let result = await httpClient.post(server.LOGIN_URL, values);
  if (result.data.result == "ok") {
    localStorage.setItem(server.USERNAME, values.username);
    localStorage.setItem(server.TOKEN_KEY, result.data.token);
    router.push("/stock");
    return true;
  } else {
    return false;
  }
};

export default {
  register,
  logoff,
  login,
  isLoggedIn,
  ...productAPI,
  ...transactionAPI,
};
