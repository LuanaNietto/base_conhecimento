import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:4000";

export function signup(data) {
  const body = {
    ...data
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/user/login`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user/get`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    }
  });
  return response;
}