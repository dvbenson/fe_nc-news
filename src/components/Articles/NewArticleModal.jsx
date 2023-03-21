import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import NewTopicForm from './NewTopicForm';
import NewArticleForm from './NewArticleForm';
import ReactDOM from 'react-dom';
import { Alert, Button } from 'react-bootstrap';
import '../../styles/Articles/TopicAndArticleForm.css';
import * as FaIcons from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

function NewArticleModal({
  open,
  children,
  onClose,
  topics,
  setTopics,
  articles,
  setArticles,
}) {
  const { loggedInUser } = useContext(UserContext);

  if (!open) return null;

  if (!loggedInUser.auth) {
    return (
      <Alert key={'warning'} variant={'warning'}>
        <Alert.Link as={Link} to='/loginpage'>
          Please log in before you can post!
        </Alert.Link>
      </Alert>
    );
  }
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1 className='modal-title'>
          <b>Post your new Article below:</b>
        </h1>
        <div className='topic-form-container'>
          <NewTopicForm topics={topics} setTopics={setTopics} />
        </div>
        <div className='article-form-container'>
          <NewArticleForm
            articles={articles}
            setArticles={setArticles}
            topics={topics}
            setTopics={setTopics}
          />
        </div>
        <div className='modal-close-btn'>
          <Button onClick={onClose}>
            <FaIcons.FaThumbsUp />
          </Button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('post-article-modal')
  );
}

export default NewArticleModal;
