import axios from "axios";
import { signinTypes } from "./dataTypes";
import callApi from "../config/api";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const setSignUp = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callApi({
    url,
    method: "POST",
    data,
  });
};

export const setSignIn = async (data: signinTypes) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callApi({
    url,
    method: "POST",
    data,
  });
};
