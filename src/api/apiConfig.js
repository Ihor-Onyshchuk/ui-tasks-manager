import axios from "axios";

export const setToken = (token) => {
  localStorage.setItem("user-token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const instance = axios.create({
  baseURL: "https://testapi.doitserver.in.ua/api/",
});
