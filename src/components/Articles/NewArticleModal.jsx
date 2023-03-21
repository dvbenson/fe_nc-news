import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import NewTopicForm from './NewTopicForm';
import NewArticleForm from './NewArticleForm';
import { Alert, Button, Modal } from 'react-bootstrap';
import '../../styles/Articles/TopicAndArticleForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewArticleModal({ topics, setTopics, articles, setArticles }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loggedInUser } = useContext(UserContext);

  if (!loggedInUser.auth) {
    return (
      <>
        <Button onClick={handleShow}>New Article</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>You are not logged in</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please login to post a new article!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Button onClick={handleShow}>New Article</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post your new article below:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='topic-form-container'>
            <NewTopicForm topics={topics} setTopics={setTopics} />
          </div>
          <div className='article-form-container'>
            <NewArticleForm
              articles={articles}
              setArticles={setArticles}
              topics={topics}
              setTopics={setTopics}
              handleClose={handleClose}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewArticleModal;
