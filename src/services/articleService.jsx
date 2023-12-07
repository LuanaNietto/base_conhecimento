import axios from "axios";

const baseURL = "http://localhost:4000";

export function create(data) {
  const body = {
    ...data
  };
  const response = axios.post(`${baseURL}/article/create`, body);
  return response;
}

export function getAllPosts() {
  try {
    const response = axios.get(`${baseURL}/article/getall`);
    return response;
  } catch (error) {
    throw error;
  }
}

export function searchPosts(keyword) {
  const response = axios.get(`${baseURL}/article/get/${keyword}`);
  return response;
}

export function getArtigoById(id) {
  const response = axios.get(`${baseURL}/article/getbyid/${id}`);
  return response;
}

export function addArtigo(data) {
  const body = {
    ...data
  };
  const response = axios.post(`${baseURL}/article/create`, body);
  return response;
}

export function updateArtigo(id, data) {
  const body = {
    ...data
  };
  const response = axios.put(`${baseURL}/article/update/${id}`, body);
  return response;
}

export function deleteArtigo(id) {
  const response = axios.delete(`${baseURL}/article/${id}`);
  return response;
}

export function curtirPost(id) {
  const response = axios.put(`${baseURL}/article/likecount/${id}`);
  return response;
}