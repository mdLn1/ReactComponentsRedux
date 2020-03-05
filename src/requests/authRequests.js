import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const loginReq = async (username, password) => {
  try {
    const res = await axios.post("/api/auth/login", { username, password }, config);
    return res;
  } catch (err) {
    return err;
  }
}
