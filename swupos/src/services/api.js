import { server } from "@/services/constants";
const axios = require('axios');

const register =  async(account) => {
  const result = await axios.post(
    "http://localhost:3000/api/v2/register",
    account
  );
  return result.data
}

export default { register };