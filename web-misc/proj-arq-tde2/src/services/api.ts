import axios from "axios";

export const api = axios.create({
  baseURL: "https://checkoutt.com.br/universidade/public/api",
});
