import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getRequest = async url => {
  try {
    const errorFreeResponse = await api.get(url);
    // console.log(errorFreeResponse);
    return errorFreeResponse.data;
  } catch (err) {
    console.log(error.message);
  }
};
