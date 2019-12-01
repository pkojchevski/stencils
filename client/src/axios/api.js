import axios from "axios";

export const API = axios.create({
  baseURL: "https://localhost:8080/"
});

export const setAuthToken = token => {
  if (token) {
    API.defaults.headers.common["Authorization"] = token;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
