import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Home from './components/Basics/Home';
import Articles from './components/Articles/Articles';
import Article from './components/Articles/Article';
import Comments from './components/Comments/Comments';
import UserList from './components/Authentication/UserList';
import Login from './components/Authentication/Login';
import './styles/App.css';

function App() {
  const [topics, setTopics] = useState([]);

  return (
    <div className='App'>
      <NavBar topics={topics} setTopics={setTopics} />
      <Routes>
        <Route path='*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route
          path='/topics/:topic'
          element={<Articles topics={topics} setTopics={setTopics} />}
        />
        <Route path='/users' element={<UserList />} />
        <Route path='/users/:username' element={<UserList />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/articles'
          element={<Articles topics={topics} setTopics={setTopics} />}
        />
        <Route path='/articles/:article_id' element={<Article />} />
        <Route path='/articles/:article_id/comments' element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
