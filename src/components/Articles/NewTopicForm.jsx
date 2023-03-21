import React, { useState } from 'react';
import { postTopic } from '../../utils';
import { Button } from 'react-bootstrap';
import '../../styles/Articles/TopicAndArticleForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewTopicForm({ topics, setTopics }) {
  const [newTopic, setNewTopic] = useState({ slug: '', description: '' });

  const handleTopicChange = (e) => {
    setNewTopic({
      ...newTopic,
      [e.target.name]: e.target.value,
    });
  };

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    postTopic(newTopic)
      .then((topicFromApi) => {
        setTopics((currTopics) => {
          return [topicFromApi, ...currTopics];
        });
      })
      .then(() => {
        setNewTopic({ slug: '', description: '' });
      });
  };

  return (
    <form
      className='new-topic-form'
      onSubmit={handleTopicSubmit}
      id='newTopicForm'
    >
      <label className='article-label' htmlFor='slug'>
        Add a new topic:
        <input
          className='topic-input'
          type='text'
          name='slug'
          onChange={handleTopicChange}
        ></input>
      </label>
      <label className='article-label' htmlFor='description'>
        Add topic description:
        <input
          className='topic-input'
          type='text'
          name='description'
          onChange={handleTopicChange}
        ></input>
      </label>
      <div className='new-topic-btn'>
        <Button type='submit'>Submit Topic</Button>
      </div>
    </form>
  );
}

export default NewTopicForm;
