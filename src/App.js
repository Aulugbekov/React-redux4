import "./App.css";
import { Fragment } from "react";
import Forma from "./components/Forma/Forma";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home, { Posts } from "./components/pages/Posts";

import store from "./components/Posts/PostsSlice";
import { Provider } from "react-redux";
import PostsDetail from "./components/pages/PostsDetail";
import About from "./components/pages/About";
import Main from "./components/pages/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
        </Fragment>

        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Forma />
              </Fragment>
            }
          />

          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />

          <Route path="/home" element={<Home />} />

          <Route path="/users">
            <Route path="/users" element={<Posts />} />
            <Route path="/users/:id" element={<PostsDetail />} />
          </Route>
          <Route path="*" element={<>404 NOT FOUND</>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
