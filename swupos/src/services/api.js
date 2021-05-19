import router from "@/router";
import { server } from "@/services/constants";
import httpClient from "@/services/httpClient";

const register = async (values) => {
  const result = await httpClient.post(server.REGISTER_URL, values);
  if (result.data.result == "ok") {
    router.push("login");
    return true;
  } else {
    return false;
  }
};

export default { register };
