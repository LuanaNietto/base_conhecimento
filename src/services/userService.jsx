import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:4000";

export function signup(data) {
  const body = { ...data };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/user/login`, data);
  return response;
}

export function getAllUsers() {
  try {
    const response = axios.get(`${baseURL}/user/getall`);
    return response;
  } catch (error) {
    throw error;
  }
}

export function getUserById(id) {
  const response = axios.get(`${baseURL}/user/getById/${id}`);
  return response;
}

export function updateUser(id, data) {
  const body = { ...data };
  const response = axios.put(`${baseURL}/user/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deleteUser(id) {
  const response = axios.delete(`${baseURL}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user/protegido`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}