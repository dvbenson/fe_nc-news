import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Comments from "./components/Comments";
import Login from "./components/Login";
import "./styles/App.css";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

function App() {
  const userValue = useContext(UserContext);
  console.log(userValue, "<< ---- userValue");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
