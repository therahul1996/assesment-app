import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Article, Home, NewsFeed } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Article />}></Route>
          <Route path="/news-feed" element={<NewsFeed />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
