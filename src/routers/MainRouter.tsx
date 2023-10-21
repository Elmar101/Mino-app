import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Post from "../pages/Post";
import Error from "../pages/Error";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
};

export default MainRouter;
