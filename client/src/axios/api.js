import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/"
});

export const setAuthToken = token => {
  if (token) {
    API.defaults.headers.common["Authorization"] = token;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
