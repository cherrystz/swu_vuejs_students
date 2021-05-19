import httpClient from "@/services/httpClient";
import { server } from "@/services/constants";
import router from "@/router";

const axios = require('axios');

const register =  async(account) => {
  const result = await httpClient.post(server.REGISTER_URL, values);
  if (result.data.result == "ok") {
    router.push("login");
    return true;
  }
  else {
    return false;
  }
};

export default { register };
