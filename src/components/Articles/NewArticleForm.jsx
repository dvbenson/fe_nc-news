import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { postArticle } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'react-bootstrap';
import '../../styles/Articles/TopicAndArticleForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewArticleForm({
  topics,
  setTopics,
  articles,
  setArticles,
  handleClose,
}) {
  const [newArticle, setNewArticle] = useState({
    author: '',
    title: '',
    body: '',
    topic: '',
    article_img_url: '',
  });
  const { loggedInUser } = useContext(UserContext);
  const [currentTopic, setCurrentTopic] = useState('Please Select');

  const handleArticleChange = (e) => {
    setNewArticle({
      ...newArticle,
      [e.target.name]: e.target.value,
    });
  };

  const handleArticleSubmit = (e) => {
    e.preventDefault();

    postArticle(newArticle, loggedInUser)
      .then((articleFromApi) => {
        setArticles((currArticles) => {
          return [articleFromApi, ...currArticles];
        });
      })
      .then(() => {
        setNewArticle({
          author: '',
          title: '',
          body: '',
          topic: '',
          article_img_url: '',
        });
      });
  };

  return (
    <form onSubmit={handleArticleSubmit} id='newArticleForm'>
      <label className='article-label' htmlFor='topic'>
        Select existing topic:
        <select
          className='topic-select'
          name='topic'
          value={currentTopic}
          onChange={(e) => {
            setCurrentTopic(e.target.value);
            handleArticleChange(e);
          }}
          required
        >
          <option defaultValue='Please Select' disabled>
            Please Select
          </option>
          {topics.map((topic) => {
            return (
              <option
                key={uuidv4()}
                value={`${topic.slug}`}
              >{`${topic.slug}`}</option>
            );
          })}
        </select>
      </label>
      <label className='article-label' htmlFor='title'>
        Title:
        <input
          className='article-input'
          name='title'
          onChange={handleArticleChange}
          required
        ></input>
      </label>
      <label className='article-label' htmlFor='article-img-url'>
        Add your image:
        <input
          className='article-input'
          name='article_img_url'
          onChange={handleArticleChange}
        ></input>
      </label>
      <label className='article-label' htmlFor='body'>
        Write your article:
        <textarea
          className='article-input'
          name='body'
          onChange={handleArticleChange}
          required
        ></textarea>
      </label>
      <div className='new-article-btn'>
        <Button type='submit' onClick={handleClose}>
          Submit New Article
        </Button>
      </div>
    </form>
  );
}

export default NewArticleForm;
