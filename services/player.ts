import axios from "axios";
import callApi from "../config/api";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

// interface idProps {
//   id: string;
// }
export const getFeaturedGame = async () => {
  const ENDPOINT = "players/landingpage";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export const getDetailGameApi = async (id: any) => {
  // const { id } = props;
  const ENDPOINT = `players/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export const getGameCategory = async () => {
  const ENDPOINT = "players/category";

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
  const axiosResponse = response.data;
  return axiosResponse.data;
};

export const checkOutApi = async (data: any) => {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;
  return callApi({
    url,
    method: "POST",
    data,
    isAuth: true,
  });
};
