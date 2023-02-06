import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://badsauce-webservices.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then(({ data }) => {
    return data;
  });
};
