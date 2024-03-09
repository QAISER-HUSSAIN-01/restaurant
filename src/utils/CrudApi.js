import axios from "axios";
import { getLocalItem } from "./functions";

// const url = "http://localhost:3001/";
const url = "http://5.189.174.161:6001/api/v3/";

const headers = {
  "Content-Type": "application/json",
  // "Access-Control-Allow-Origin":'*',
  // "Access-Control-Allow-Methods":["PUT", "GET", "HEAD", "POST", "DELETE", "OPTIONS"]

};

const axiosInstance = axios.create({
  baseURL: url,
  headers: {...headers,Authorization: `Bearer ${getLocalItem('token')}`},
});

const handleRequestError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    switch (status) {
      case 400:
        console.log("Bad Request:", data.error); // Display a user-friendly message
        break;
      case 401:
        console.log("Unauthorized:", data.error); // Redirect to login page or display a login modal
        break;
      case 403:
        console.log("Forbidden:", data.error); // Display a user-friendly message
        break;
      case 404:
        console.log("Not Found:", data.error); // Display a user-friendly message or redirect
        break;
      case 500:
        console.log("Internal Server Error:", data.error); // Display a user-friendly message
        break;
      case 503:
        console.log("Service Unavailable:", data.error); // Display a user-friendly message
        break;
      default:
        console.log("Server responded with an error status:", status);
        console.log("Error response data:", data);
        break;
    }
  } else if (error.request) {
    console.log("No response received from the server:", error.request);
  } else {
    console.log("Error setting up the request:", error.message);
  }
};

export const Post = async (path, payload) => {
  try {
    const { data } = await axiosInstance.post(`${url + path}`, payload);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Get = async (path, param) => {
  try {
    const { data } = await axiosInstance.get(`${url + path}`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const GetAll = async (path) => {
  try {
    const { data } = await axiosInstance.get(`${url + path}`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Update = async (path, param, payload) => {
  try {
    const { data } = await axiosInstance.put(
      `${url + path}/:${param}`,
      payload
    );
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const Delete = async (path, param, payload) => {
  try {
    const { data } = await axiosInstance.delete(
      `${url + path}/:${param}`,
      payload
    );
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};
