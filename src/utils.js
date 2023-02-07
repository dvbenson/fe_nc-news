import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://badsauce-webservices.onrender.com/api",
});

export const getArticles = (topic) => {
  let path = `/articles`;
  if (topic) path += `?topic=${topic}`;
  return newsAPI.get(path).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getCommentsById = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return newsAPI.get(`/topics`).then(({ data }) => {
    return data;
  });
};
