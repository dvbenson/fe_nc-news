import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Basics/Home";
import About from "./components/Basics/About";
import Contact from "./components/Basics/Contact";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import Comments from "./components/Comments/Comments";
import LoginPage from "./components/Authentication/LoginPage";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
