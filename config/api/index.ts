import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallApiProps extends AxiosRequestConfig {
  isAuth?: boolean;
}
let headers = {};
export default async function callApi({
  url,
  method,
  data,
  isAuth,
}: CallApiProps) {
  if (isAuth) {
    const token = Cookies.get("_t");
    if (token) {
      const jwtToken = atob(token);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: response.data.message,
    data: response.data.data,
  };
  return res;
}
