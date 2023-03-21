import axios from 'axios';

const newsAPI = axios.create({
  baseURL: 'https://badsauce-webservices.onrender.com/api',
});

export const getArticles = (topic, searchParams) => {
  let paramSearch = {};
  const sortBy = searchParams.get('sort_by');
  const order = searchParams.get('order');

  if (topic)
    paramSearch = { topic: topic, sort_by: sortBy, order: order, limit: 100 };
  else if (!topic) paramSearch = { sort_by: sortBy, order: order, limit: 100 };

  return newsAPI.get('/articles', { params: paramSearch }).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const postArticle = (newArticle, loggedInUser) => {
  console.log(newArticle);
  const articleBody = {
    author: loggedInUser.username,
    title: newArticle.title,
    body: newArticle.body,
    topic: newArticle.topic,
    article_img_url: newArticle.article_img_url,
  };
  return newsAPI.post(`/articles`, articleBody).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const deleteArticleById = ({ setError, article_id }) => {
  return newsAPI.delete(`/articles/${article_id}`).catch((err) => {
    if (err) {
      setError(err);
      return err;
    }
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

export const postTopic = (newTopic) => {
  const topicBody = {
    slug: newTopic.slug,
    description: newTopic.description,
  };
  return newsAPI.post(`/topics`, topicBody).then(({ data }) => {
    return data;
  });
};

export const getUsers = () => {
  return newsAPI.get(`/users`).then(({ data }) => {
    return data;
  });
};

export const deleteCommentById = ({ setError, comment_id }) => {
  return newsAPI.delete(`/comments/${comment_id}`).catch((err) => {
    if (err) {
      setError(err);
      return err;
    }
  });
};

export const postComment = (commentBody, loggedInUser, article_id) => {
  const postBody = {
    body: commentBody,
    username: loggedInUser.username,
  };
  console.log(postBody);

  return newsAPI
    .post(`/articles/${article_id}/comments`, postBody)
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleVote = (article_id, vote_change) => {
  const patchBody = {
    inc_votes: vote_change,
  };

  return newsAPI
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data }) => {
      return data;
    });
};

export const patchCommentVote = (comment_id, vote_change) => {
  const patchBody = {
    inc_votes: vote_change,
  };

  return newsAPI
    .patch(`/comments/${comment_id}`, patchBody)
    .then(({ data }) => {
      return data;
    });
};
