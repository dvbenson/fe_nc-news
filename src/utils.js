import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://badsauce-webservices.onrender.com/api",
});

export const getArticles = (topic, searchParams) => {
  let paramSearch = {};
  const sortBy = searchParams.get("sort_by");
  const order = searchParams.get("order");

  if (topic) paramSearch = { topic: topic, sort_by: sortBy, order: order };
  else if (!topic) paramSearch = { sort_by: sortBy, order: order };

  return newsAPI.get("/articles", { params: paramSearch }).then(({ data }) => {
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

export const getUsers = () => {
  return newsAPI.get(`/users`).then(({ data }) => {
    return data;
  });
};
